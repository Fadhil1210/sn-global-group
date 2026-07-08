import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = join(__dirname, 'tickets.json');

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure helmet with strict Content Security Policy (CSP) for CDNs and API sources
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdnjs.cloudflare.com", "https://unpkg.com", "https://cdn.jsdelivr.net"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com", "https://unpkg.com", "https://cdn.jsdelivr.net"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com", "https://unpkg.com", "https://cdn.jsdelivr.net", "https://*.tile.openstreetmap.org"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
      connectSrc: ["'self'", "https://*.tile.openstreetmap.org", "https://wa.me", "https://*.whatsapp.com"]
    }
  }
}));

// Configure rate limiter to prevent abuse (DoS/brute force)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limit each IP to 300 requests per 15 minutes
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Disable legacy headers
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// --- Local File Database Helper Functions ---
function readTickets() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading tickets database file:', err);
    return [];
  }
}

function writeTickets(tickets) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(tickets, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing tickets database file:', err);
  }
}

// --- Nodemailer E-mail Helper ---
async function sendEmailNotification(ticket) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
    console.log(`[SMTP Notification skipped] Ticket ${ticket.id} stored in database. SMTP parameters missing in .env.`);
    return;
  }

  const portVal = parseInt(String(SMTP_PORT).trim() || '587');
  const isSecure = portVal === 465;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST.trim(),
      port: portVal,
      secure: isSecure,
      auth: {
        user: SMTP_USER.trim(),
        pass: SMTP_PASS.trim()
      },
      tls: {
        // Essential fallback for Hostinger/cPanel certificates issues
        rejectUnauthorized: false
      }
    });

    // 1. Admin Email Options (to you)
    const adminMailOptions = {
      from: `"SN Global Group Portal" <${SMTP_USER.trim()}>`,
      to: EMAIL_TO.trim(),
      subject: `[${ticket.service.toUpperCase()} - NEW TICKET] ${ticket.subject} (Ref: ${ticket.id})`,
      text: `Hello,\n\nA new ticket/request has been registered on the SN Global Group portal.\n\n` +
            `--- TICKET DETAILS ---\n` +
            `Ticket ID: ${ticket.id}\n` +
            `Date: ${ticket.date}\n` +
            `Client: ${ticket.name} (${ticket.email})\n` +
            `Department: ${ticket.service}\n` +
            `Subject: ${ticket.subject}\n` +
            `Message: ${ticket.message}\n` +
            `Status: ${ticket.status}\n\n` +
            `Details (JSON):\n${JSON.stringify(ticket.details, null, 2)}\n\n` +
            `This ticket is securely saved in the server database (tickets.json).\n` +
            `Best regards,\nSN Global Group IT System`
    };

    // 2. Client Email Options (Bilingual Auto-Confirmation)
    const clientMailOptions = {
      from: `"SN Global Group" <${SMTP_USER.trim()}>`,
      to: ticket.email.trim(),
      subject: `[SN Global Group] Request Registered / Demande Enregistrée - ${ticket.id}`,
      text: `Dear Client / Cher Client(e),\n\n` +
            `Your request has been successfully registered by our teams.\n` +
            `Votre demande a été enregistrée avec succès par nos équipes.\n\n` +
            `--- REQUEST DETAILS / DÉTAILS DE LA DEMANDE ---\n` +
            `Reference / Référence : ${ticket.id}\n` +
            `Service / Département : ${ticket.service === 'travel' ? 'SN Global Travel' : ticket.service === 'insurance' ? 'SN Global Insurance' : ticket.service === 'careers' ? 'Careers & Recruitment' : 'Corporate Support'}\n` +
            `Subject / Sujet : ${ticket.subject}\n\n` +
            `An advisor from our Baltimore office will contact you within 24 hours.\n` +
            `Un conseiller de notre bureau de Baltimore prendra contact avec vous sous 24 heures.\n\n` +
            `Thank you for your trust.\n` +
            `Merci de votre confiance.\n\n` +
            `Best regards / Cordialement,\n` +
            `SN Global Group LLC\n` +
            `100 N Charles St, Baltimore, MD 21201, USA\n` +
            `www.snglobalgroup.online`
    };

    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log(`Admin email notification sent successfully for ticket ${ticket.id}:`, adminInfo.messageId);

    const clientInfo = await transporter.sendMail(clientMailOptions);
    console.log(`Client email confirmation sent successfully to ${ticket.email} for ticket ${ticket.id}:`, clientInfo.messageId);

  } catch (err) {
    console.error(`Nodemailer failed to send emails for ticket ${ticket.id}:`, err);
  }
}

// --- API Endpoint Routes ---

// Create ticket (Contact, Travel Quote, Insurance Quote)
app.post('/api/tickets', async (req, res) => {
  const { name, email, service, subject, message, status, date, details } = req.body;

  if (!name || !email || !service || !subject || !message) {
    return res.status(400).json({ error: 'Missing required ticket parameters' });
  }

  const rand = Math.floor(1000 + Math.random() * 9000);
  let prefix = 'SN-SUPP';
  if (service === 'travel') prefix = 'SN-TRVL';
  else if (service === 'insurance') prefix = 'SN-INS';

  const ticketId = `${prefix}-${rand}`;

  const newTicket = {
    id: ticketId,
    name,
    email,
    service,
    subject,
    message,
    status: status || 'Nouveau',
    date: date || new Date().toLocaleString(),
    details: details || {}
  };

  const tickets = readTickets();
  tickets.push(newTicket);
  writeTickets(tickets);

  // Send email notification asynchronously
  sendEmailNotification(newTicket);

  res.status(201).json(newTicket);
});

// Query ticket by ID (with dynamic status progression simulation)
app.get('/api/tickets/:id', (req, res) => {
  const { id } = req.params;
  const tickets = readTickets();
  const ticketIndex = tickets.findIndex(t => t.id === id.toUpperCase().trim());

  if (ticketIndex === -1) {
    return res.status(404).json({ error: 'Ticket not found' });
  }

  const ticket = tickets[ticketIndex];
  let changed = false;

  try {
    // ticket.date might contain slashes/spaces depending on locales. Let's parse it safely
    // Fallback if parsing fails
    const cleanDateStr = ticket.date.replace(/,/g, '');
    const createdDate = new Date(cleanDateStr);
    const now = new Date();
    const diffMs = now - createdDate;
    if (!isNaN(diffMs)) {
      const diffMins = Math.max(0, Math.floor(diffMs / (1000 * 60)));
      
      if (diffMins >= 10 && ticket.status !== 'Traité') {
        ticket.status = 'Traité';
        changed = true;
      } else if (diffMins >= 2 && ticket.status === 'Nouveau') {
        ticket.status = 'En cours';
        changed = true;
      }
    }
  } catch (e) {
    console.error('Failed to parse ticket date for progression:', e);
  }

  if (changed) {
    tickets[ticketIndex] = ticket;
    writeTickets(tickets);
  }

  res.json(ticket);
});

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// Fallback to index.html for SPA routing (if any)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


