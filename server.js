import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import dns from 'dns';
import crypto from 'crypto';

// Load environment variables from .env file
dotenv.config();

// DNS Resolver helper to force IPv4
async function resolveIPv4(host) {
  try {
    const result = await dns.promises.lookup(host, { family: 4 });
    return result.address;
  } catch (err) {
    console.error(`DNS lookup failed for ${host}:`, err.message);
    return host;
  }
}

// Format ticket details cleanly without any developer JSON tags
function formatDetails(details) {
  if (!details || Object.keys(details).length === 0) return '';
  
  let text = `\n--- ADDITIONAL SPECIFICATIONS / SPÉCIFICATIONS ADDITIONNELLES ---\n`;
  for (const [key, value] of Object.entries(details)) {
    // Convert camelCase to Space separated Title (e.g. "selectedPlan" -> "Selected Plan")
    const formattedKey = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
    
    if (typeof value === 'object' && value !== null) {
      text += `${formattedKey}:\n`;
      for (const [subKey, subVal] of Object.entries(value)) {
        const formattedSubKey = subKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        text += `  - ${formattedSubKey}: ${subVal}\n`;
      }
    } else {
      text += `${formattedKey}: ${value}\n`;
    }
  }
  return text;
}

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

// Strict API Rate Limiter (to prevent brute-force, ticket spam, and SMTP exhaustion)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 40, // Limit each IP to 40 requests per 15 minutes on API endpoints
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests on the API, please try again in 15 minutes.' }
});

// Relaxed global rate limiter for static files (prevents browser block on page refresh)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1500, // 1500 requests per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many connection requests, please try again later.'
});

// Whitelisting origin middleware to prevent cross-site request abuse (CORS & Referer check)
const whitelistedOrigins = [
  'snglobalgroup.online',
  'www.snglobalgroup.online',
  'onrender.com',
  'localhost',
  '127.0.0.1'
];

app.use((req, res, next) => {
  // CORS configuration
  const origin = req.headers.origin || '';
  if (origin) {
    const isAllowed = whitelistedOrigins.some(domain => origin.includes(domain));
    if (isAllowed) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
  } else {
    const host = req.headers.host || '';
    const protocol = req.secure ? 'https' : 'http';
    res.setHeader('Access-Control-Allow-Origin', `${protocol}://${host}`);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  // Strict origin/referer check for API routes in production to prevent script abuse
  if (req.path.startsWith('/api/') && process.env.NODE_ENV === 'production') {
    const referer = req.headers.referer || '';
    const originHeader = req.headers.origin || '';
    const host = req.headers.host || '';
    
    let matchesWhitelist = false;
    
    if (originHeader) {
      matchesWhitelist = whitelistedOrigins.some(domain => originHeader.includes(domain));
    } else if (referer) {
      matchesWhitelist = whitelistedOrigins.some(domain => referer.includes(domain));
    } else {
      // Fallback to Host header if both Referer and Origin are omitted (common in same-origin GET requests)
      matchesWhitelist = whitelistedOrigins.some(domain => host.includes(domain));
    }
    
    if (!matchesWhitelist) {
      console.warn(`Blocked request from untrusted origin: Origin=${originHeader}, Referer=${referer}, Host=${host}`);
      return res.status(403).json({ error: 'Access denied: Untrusted request origin.' });
    }
  }

  next();
});

app.use('/api/', apiLimiter);
app.use(globalLimiter);

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

// --- Resend HTTP API Helper (Bypasses Render Outbound SMTP block) ---
async function sendViaResend(ticket, apiKey, emailTo) {
  try {
    const adminText = `Hello,\n\nA new ticket/request has been registered on the SN Global Group portal.\n\n` +
          `--- TICKET DETAILS ---\n` +
          `Ticket ID: ${ticket.id}\n` +
          `Date: ${ticket.date}\n` +
          `Client: ${ticket.name} (${ticket.email})\n` +
          `Department: ${ticket.service}\n` +
          `Subject: ${ticket.subject}\n` +
          `Message: ${ticket.message}\n` +
          `Status: ${ticket.status}\n` +
          `${formatDetails(ticket.details)}\n` +
          `This ticket is securely saved in the server database (tickets.json).\n` +
          `Best regards,\nSN Global Group IT System`;

    const clientText = `Dear Client / Cher Client(e),\n\n` +
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
          `www.snglobalgroup.online`;

    // 1. Send Admin Alert Email
    const adminRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: '"SN Global Group Portal" <contact@snglobalgroup.online>',
        to: emailTo,
        subject: `[${ticket.service.toUpperCase()} - NEW TICKET] ${ticket.subject} (Ref: ${ticket.id})`,
        text: adminText
      })
    });

    // 2. Send Client Confirmation Email
    const clientRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: '"SN Global Group" <contact@snglobalgroup.online>',
        to: ticket.email.trim(),
        subject: `[SN Global Group] Request Registered / Demande Enregistrée - ${ticket.id}`,
        text: clientText
      })
    });

    if (adminRes.ok && clientRes.ok) {
      console.log(`[Resend API] Emails sent successfully for ticket ${ticket.id}`);
      return true;
    } else {
      const adminErr = await adminRes.text();
      const clientErr = await clientRes.text();
      console.error(`[Resend API] Failed to send. Admin status: ${adminRes.status} (${adminErr}), Client status: ${clientRes.status} (${clientErr})`);
      return false;
    }
  } catch (err) {
    console.error(`[Resend API] Error sending emails:`, err.message);
    return false;
  }
}

// --- Nodemailer E-mail Helper ---
async function sendEmailNotification(ticket) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO, RESEND_API_KEY } = process.env;

  // 1. Try sending via Resend API if API key is present (HTTP Port 443 - Bypasses Render Free firewall)
  if (RESEND_API_KEY && EMAIL_TO) {
    console.log(`[Email] Found RESEND_API_KEY. Attempting to send via Resend HTTP API...`);
    const success = await sendViaResend(ticket, RESEND_API_KEY.trim(), EMAIL_TO.trim());
    if (success) return;
    console.log(`[Email] Resend API failed. Falling back to SMTP...`);
  }

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
    console.log(`[SMTP Notification skipped] Ticket ${ticket.id} stored in database. SMTP parameters missing in env.`);
    return;
  }
  const resolvedIp = await resolveIPv4(SMTP_HOST.trim());
  console.log(`[SMTP] Resolved ${SMTP_HOST} to IPv4: ${resolvedIp}`);

  const primaryPort = parseInt(String(SMTP_PORT).trim() || '587');
  
  // 1. Try with the primary port configured in Render
  console.log(`Attempting to send emails via primary port ${primaryPort}...`);
  let success = await attemptSend(primaryPort);
  
  // 2. If it fails, try the fallback port automatically (firewall bypass)
  if (!success) {
    const fallbackPort = primaryPort === 465 ? 587 : 465;
    console.log(`Primary port ${primaryPort} failed or timed out. Trying fallback port ${fallbackPort}...`);
    await attemptSend(fallbackPort);
  }

  async function attemptSend(port) {
    const isSecure = port === 465;
    const transporter = nodemailer.createTransport({
      host: resolvedIp,
      port: port,
      secure: isSecure,
      auth: {
        user: SMTP_USER.trim(),
        pass: SMTP_PASS.trim()
      },
      tls: {
        rejectUnauthorized: false,
        servername: SMTP_HOST.trim()
      },
      connectionTimeout: 8000 // 8 seconds timeout to fail-fast if Render blocks the port
    });

    try {
      // Admin Alert Email
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
              `Status: ${ticket.status}\n` +
              `${formatDetails(ticket.details)}\n` +
              `This ticket is securely saved in the server database (tickets.json).\n` +
              `Best regards,\nSN Global Group IT System`
      };

      // Client Confirmation Email
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

      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(clientMailOptions);
      console.log(`Emails sent successfully via port ${port} for ticket ${ticket.id}`);
      return true;
    } catch (err) {
      console.error(`Failed to send emails via port ${port}:`, err.message);
      return false;
    }
  }
}

// --- API Endpoint Routes ---

// Create ticket (Contact, Travel Quote, Insurance Quote)
// HTML Sanitization helper to prevent XSS injection
function sanitizeHTML(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

app.post('/api/tickets', async (req, res) => {
  const { name, email, service, subject, message, details } = req.body;

  if (!name || !email || !service || !subject || !message) {
    return res.status(400).json({ error: 'Missing required ticket parameters' });
  }

  // Server-side strict service whitelist validation
  const allowedServices = ['travel', 'insurance', 'corporate', 'careers'];
  if (!allowedServices.includes(String(service).trim().toLowerCase())) {
    return res.status(400).json({ error: 'Invalid concerned service/department value' });
  }

  // Server-side strict RFC-compliant email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(String(email).trim()) || String(email).length > 150) {
    return res.status(400).json({ error: 'Invalid email address format' });
  }

  // Text length validations
  const cleanName = String(name).trim();
  const cleanSubject = String(subject).trim();
  const cleanMessage = String(message).trim();

  if (cleanName.length < 2 || cleanName.length > 100) {
    return res.status(400).json({ error: 'Name must be between 2 and 100 characters' });
  }

  if (cleanSubject.length < 4 || cleanSubject.length > 150) {
    return res.status(400).json({ error: 'Subject must be between 4 and 150 characters' });
  }

  if (cleanMessage.length < 10 || cleanMessage.length > 3000) {
    return res.status(400).json({ error: 'Message must be between 10 and 3000 characters' });
  }

  // Sanitize all inputs to make XSS injection completely inert
  const sanitizedName = sanitizeHTML(cleanName);
  const sanitizedEmail = sanitizeHTML(String(email).trim().toLowerCase());
  const sanitizedService = sanitizeHTML(String(service).trim().toLowerCase());
  const sanitizedSubject = sanitizeHTML(cleanSubject);
  const sanitizedMessage = sanitizeHTML(cleanMessage);

  // Generate a secure, cryptographically random 6-character suffix (IDOR protection)
  const secureSuffix = crypto.randomBytes(3).toString('hex').toUpperCase();
  let prefix = 'SN-SUPP';
  if (sanitizedService === 'travel') prefix = 'SN-TRVL';
  else if (sanitizedService === 'insurance') prefix = 'SN-INS';

  const ticketId = `${prefix}-${secureSuffix}`;

  // Sanitize any extra fields in details object
  const sanitizedDetails = {};
  if (details && typeof details === 'object') {
    for (const [key, value] of Object.entries(details)) {
      const safeKey = sanitizeHTML(key);
      if (typeof value === 'string') {
        sanitizedDetails[safeKey] = sanitizeHTML(value);
      } else if (typeof value === 'object' && value !== null) {
        sanitizedDetails[safeKey] = {};
        for (const [subKey, subVal] of Object.entries(value)) {
          sanitizedDetails[safeKey][sanitizeHTML(subKey)] = typeof subVal === 'string' ? sanitizeHTML(subVal) : subVal;
        }
      } else {
        sanitizedDetails[safeKey] = value;
      }
    }
  }

  const newTicket = {
    id: ticketId,
    name: sanitizedName,
    email: sanitizedEmail,
    service: sanitizedService,
    subject: sanitizedSubject,
    message: sanitizedMessage,
    status: 'Nouveau', // Always force server-side initialization
    date: new Date().toLocaleString(), // Always force server-side timestamp
    details: sanitizedDetails
  };

  const tickets = readTickets();
  tickets.push(newTicket);

  // Cap database size at 500 entries to prevent server resource exhaustion and storage space DoS
  if (tickets.length > 500) {
    tickets.shift(); // Evict oldest ticket to maintain safety
  }
  
  writeTickets(tickets);

  // Send email notification asynchronously
  sendEmailNotification(newTicket);

  res.status(201).json(newTicket);
});

// PII Data Masking helper functions for GDPR & CCPA compliance
function maskEmail(email) {
  if (!email || !email.includes('@')) return email;
  const [local, domain] = email.split('@');
  if (local.length <= 2) {
    return `${local.substring(0, 1)}***@${domain}`;
  }
  return `${local.substring(0, 2)}***${local.substring(local.length - 1)}@${domain}`;
}

function maskName(name) {
  if (!name) return name;
  return name.split(' ').map(part => {
    if (part.length <= 2) return `${part.substring(0, 1)}*`;
    return `${part.substring(0, 1)}***${part.substring(part.length - 1)}`;
  }).join(' ');
}

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

  // Return masked ticket to protect private customer data from unauthorized lookup
  const maskedTicket = {
    ...ticket,
    name: maskName(ticket.name),
    email: maskEmail(ticket.email)
  };

  res.json(maskedTicket);
});

// SMTP Diagnostic Debug Endpoint (Protected with secure token in production)
app.get('/api/debug-smtp', async (req, res) => {
  const token = req.query.token;
  const debugToken = process.env.DEBUG_TOKEN;
  
  if (!debugToken || token !== debugToken) {
    return res.status(403).json({ error: 'Access denied: invalid debug token parameter.' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO, RESEND_API_KEY } = process.env;
  
  const debugLogs = [];
  debugLogs.push(`Host: ${SMTP_HOST}`);
  debugLogs.push(`Port: ${SMTP_PORT}`);
  debugLogs.push(`User: ${SMTP_USER}`);
  debugLogs.push(`Pass Length: ${SMTP_PASS ? SMTP_PASS.length : 0}`);
  debugLogs.push(`To: ${EMAIL_TO}`);
  debugLogs.push(`Resend API Key Length: ${RESEND_API_KEY ? RESEND_API_KEY.length : 0}`);

  // Test Resend API if key is present
  if (RESEND_API_KEY && EMAIL_TO) {
    debugLogs.push(`Found RESEND_API_KEY. Testing Resend HTTP API (Port 443)...`);
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY.trim()}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: '"Render Debug Resend" <contact@snglobalgroup.online>',
          to: EMAIL_TO.trim(),
          subject: 'Render Resend HTTP API Diagnostic Test',
          text: 'If you receive this email, Resend API works on Render!'
        })
      });
      
      if (resendRes.ok) {
        debugLogs.push(`[Resend Success] Resend HTTP API test email sent successfully!`);
        return res.json({
          success: true,
          method: 'resend-api',
          logs: debugLogs
        });
      } else {
        const errText = await resendRes.text();
        debugLogs.push(`[Resend Error] Resend HTTP API failed with status ${resendRes.status}: ${errText}`);
      }
    } catch (err) {
      debugLogs.push(`[Resend Connection Error] Failed to connect to Resend API: ${err.message}`);
    }
  }

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
    return res.json({ error: "Missing env variables on server", logs: debugLogs });
  }

  const portVal = parseInt(String(SMTP_PORT).trim() || '587');
  
  // Try primary
  const primaryResult = await attemptSend(portVal);
  debugLogs.push(...primaryResult.attempts);

  let success = primaryResult.success;
  let finalError = primaryResult.error;

  if (!success) {
    const fallbackPort = portVal === 465 ? 587 : 465;
    debugLogs.push(`Primary port ${portVal} failed. Retrying fallback ${fallbackPort}...`);
    const fallbackResult = await attemptSend(fallbackPort);
    debugLogs.push(...fallbackResult.attempts);
    success = fallbackResult.success;
    finalError = fallbackResult.error;
  }

  return res.json({
    success: success,
    error: finalError,
    logs: debugLogs
  });

  async function attemptSend(port) {
    const attempts = [];
    const isSecure = port === 465;
    
    attempts.push(`Resolving ${SMTP_HOST.trim()} to IPv4...`);
    const resolvedIp = await resolveIPv4(SMTP_HOST.trim());
    attempts.push(`Resolved to IPv4: ${resolvedIp}`);

    const transporter = nodemailer.createTransport({
      host: resolvedIp,
      port: port,
      secure: isSecure,
      auth: {
        user: SMTP_USER.trim(),
        pass: SMTP_PASS.trim()
      },
      tls: {
        rejectUnauthorized: false,
        servername: SMTP_HOST.trim()
      },
      connectionTimeout: 8000
    });

    try {
      attempts.push(`Verifying transporter for port ${port}...`);
      await transporter.verify();
      attempts.push(`Transporter verified on port ${port}!`);

      attempts.push(`Sending test email via port ${port}...`);
      const info = await transporter.sendMail({
        from: `"Render Debug SMTP" <${SMTP_USER.trim()}>`,
        to: EMAIL_TO.trim(),
        subject: `Render SMTP Debug Test Email (Port ${port})`,
        text: `If you receive this email, your Hostinger SMTP works on Render via port ${port}!`
      });
      attempts.push(`Email sent successfully! MessageId: ${info.messageId}`);
      return { success: true, attempts };
    } catch (err) {
      attempts.push(`Failed on port ${port}: ${err.message}`);
      return { success: false, error: err.message, attempts };
    }
  }
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


