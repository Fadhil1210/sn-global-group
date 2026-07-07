import { escapeHTML } from '../utils/security.js';

export function renderContact(container) {
  container.innerHTML = `
    <!-- Contact Hero -->
    <section class="contact-hero">
      <div class="container text-center">
        <span class="badge badge-gold">Support Client</span>
        <h1>Contactez SN Global Group</h1>
        <p class="subtitle">Des conseillers à votre écoute à Baltimore pour répondre à vos projets.</p>
      </div>
    </section>

    <!-- Contact details & Form Section -->
    <section class="contact-section section-padding">
      <div class="container grid grid-2">
        
        <!-- Baltimore Headquarters & Info -->
        <div class="contact-info-col">
          <span class="badge">Siège International</span>
          <h2>SN Global Group LLC</h2>
          <p>Nos bureaux corporatifs et notre centre opérationnel de support client sont stratégiquement installés dans le Maryland.</p>
          
          <div class="contact-channels">
            <div class="channel-card">
              <i class="fa-solid fa-map-location-dot gold-text"></i>
              <div>
                <h4>Adresse postale</h4>
                <p>100 N Charles St, Baltimore, MD 21201, USA</p>
              </div>
            </div>
            
            <div class="channel-card">
              <i class="fa-solid fa-phone-volume gold-text"></i>
              <div>
                <h4>Téléphone Corporate</h4>
                <p>+1 (410) 555-0190 <span class="text-muted">(Baltimore HQ)</span></p>
              </div>
            </div>
            
            <div class="channel-card">
              <i class="fa-solid fa-envelope-open-text gold-text"></i>
              <div>
                <h4>Courriels dédiés</h4>
                <p><strong>Voyage :</strong> travel@snglobalgroup.com</p>
                <p><strong>Assurance :</strong> insurance@snglobalgroup.com</p>
                <p><strong>Holding :</strong> corporate@snglobalgroup.com</p>
              </div>
            </div>
          </div>
          
          <!-- Opening hours / trust card -->
          <div class="office-hours-card">
            <h4><i class="fa-regular fa-clock"></i> Heures d'ouverture (Eastern Time)</h4>
            <p>Lundi au Vendredi : 9h00 - 18h00</p>
            <p>Notre support d'assistance d'urgence (voyageurs et assurés) reste accessible <strong>24h/24 et 7j/7</strong> via la hotline dédiée fournie dans vos contrats.</p>
          </div>
        </div>
        
        <!-- Interactive Form Card -->
        <div class="contact-form-col">
          <div class="contact-form-card" id="contact-form-wrapper">
            <h3>Envoyer un Message</h3>
            <p class="form-card-subtitle">Sélectionnez le service approprié pour un traitement ultra-rapide de votre demande.</p>
            
            <form id="sn-contact-form">
              <div class="form-group">
                <label for="contact-name">Nom complet</label>
                <input type="text" id="contact-name" placeholder="Ex: Jean Dupont" class="form-control" required>
              </div>
              
              <div class="form-group">
                <label for="contact-email">Adresse e-mail</label>
                <input type="email" id="contact-email" placeholder="Ex: jean.dupont@email.com" class="form-control" required>
              </div>
              
              <div class="form-group">
                <label for="contact-service">Service concerné</label>
                <select id="contact-service" class="form-control" required>
                  <option value="" disabled selected>Choisissez le service...</option>
                  <option value="travel">SN Global Travel (Voyage sur mesure)</option>
                  <option value="insurance">SN Global Insurance (Assurance USA)</option>
                  <option value="corporate">Holding Corporate (Baltimore HQ)</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="contact-subject">Sujet de votre demande</label>
                <input type="text" id="contact-subject" placeholder="Ex: Renseignements assurance visa, Devis safari..." class="form-control" required>
              </div>
              
              <div class="form-group">
                <label for="contact-message">Message</label>
                <textarea id="contact-message" placeholder="Détaillez votre projet ou votre question..." class="form-control" rows="4" required></textarea>
              </div>
              
              <button type="submit" class="btn btn-gold btn-block">
                Envoyer ma Demande <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
            
            <!-- Success Panel -->
            <div id="contact-success-panel" class="contact-success-container hidden">
              <i class="fa-solid fa-circle-check text-success success-icon animate-bounce"></i>
              <h3>Demande envoyée avec succès !</h3>
              <p>Votre demande a été enregistrée par nos serveurs de Baltimore.</p>
              
              <div class="ticket-info-box">
                <span class="lbl">VOTRE RÉFÉRENCE DE TICKET :</span>
                <span class="val" id="contact-ticket-id">SN-SUPP-XXXX</span>
              </div>
              
              <p class="info-followup">Ce ticket unique vous permet de suivre l'état d'avancement de votre dossier à tout moment en utilisant le bouton "Support" de la barre de navigation supérieure.</p>
              <button id="btn-reset-contact" class="btn btn-gold btn-sm">Envoyer un autre message</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Tickets Area (Client Space) -->
    <section class="my-tickets-section section-padding bg-light">
      <div class="container">
        <div class="text-center">
          <span class="badge">Espace Client</span>
          <h2>Vos Demandes Actives sur ce Navigateur</h2>
          <p class="section-desc">Historique local de vos tickets de support créés lors de vos simulations ou demandes de contact.</p>
        </div>
        
        <div class="my-tickets-card max-width-800" id="my-tickets-list-container">
          <!-- Filled dynamically by JS -->
        </div>
      </div>
    </section>
  `;

  // Initialize display of local tickets
  renderMyTickets();

  // Scroll to top
  window.scrollTo(0, 0);
}

export function initContactForm() {
  const form = document.getElementById('sn-contact-form');
  const successPanel = document.getElementById('contact-success-panel');
  const resetBtn = document.getElementById('btn-reset-contact');
  
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const service = document.getElementById('contact-service').value;
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    // Generate unique ticket number
    const rand = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `SN-SUPP-${rand}`;
    
    // Create new ticket object
    const newTicket = {
      id: ticketId,
      name: name,
      email: email,
      service: service,
      subject: subject,
      message: message,
      status: 'Nouveau',
      date: new Date().toLocaleString('fr-FR'),
      details: {}
    };
    
    // Save ticket in local storage
    const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
    tickets.push(newTicket);
    localStorage.setItem('sn_global_tickets', JSON.stringify(tickets));
    
    // Hide form & Show success panel
    form.classList.add('hidden');
    document.getElementById('contact-ticket-id').innerText = ticketId;
    successPanel.classList.remove('hidden');
    
    // Re-render my tickets list
    renderMyTickets();
  });
  
  resetBtn.addEventListener('click', () => {
    form.reset();
    form.classList.remove('hidden');
    successPanel.classList.add('hidden');
  });
}

function renderMyTickets() {
  const container = document.getElementById('my-tickets-list-container');
  if (!container) return;

  const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
  
  if (tickets.length === 0) {
    container.innerHTML = `
      <div class="empty-tickets-state text-center">
        <i class="fa-solid fa-receipt text-muted" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
        <h4>Aucun ticket actif</h4>
        <p class="text-muted">Vous n'avez soumis aucune demande de devis ou de contact depuis ce navigateur pour le moment.</p>
      </div>
    `;
    return;
  }

  // Render tickets list in descending order (newest first)
  const sortedTickets = [...tickets].reverse();
  
  container.innerHTML = `
    <div class="tickets-table-wrapper">
      <table class="tickets-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Référence</th>
            <th>Service</th>
            <th>Sujet</th>
            <th>Statut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${sortedTickets.map(t => {
            let statusClass = 'status-badge-info';
            if (t.status === 'Nouveau') statusClass = 'status-badge-warning';
            else if (t.status === 'Traité') statusClass = 'status-badge-success';
            
            let serviceLabel = 'Corporate';
            if (t.service === 'travel') serviceLabel = 'Travel';
            else if (t.service === 'insurance') serviceLabel = 'Insurance';

            return `
              <tr>
                <td>${escapeHTML(t.date.split(' ')[0])}</td>
                <td><strong class="gold-text">${escapeHTML(t.id)}</strong></td>
                <td><span class="service-tag service-tag-${escapeHTML(t.service)}">${serviceLabel}</span></td>
                <td class="text-truncate" style="max-width: 250px;">${escapeHTML(t.subject)}</td>
                <td><span class="status-badge ${statusClass}">${escapeHTML(t.status)}</span></td>
                <td>
                  <button class="btn btn-outline-navy btn-xs btn-track-ticket-local" data-id="${escapeHTML(t.id)}">
                    <i class="fa-solid fa-eye"></i> Suivre
                  </button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Hook tracking buttons in local list to open global tracker modal
  document.querySelectorAll('.btn-track-ticket-local').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const ticketModal = document.getElementById('ticket-modal');
      const ticketInput = document.getElementById('modal-ticket-id-input');
      const searchBtn = document.getElementById('modal-btn-search-ticket');
      
      if (ticketModal && ticketInput && searchBtn) {
        ticketInput.value = id;
        ticketModal.classList.add('active');
        // Trigger click programmatically to load ticket in modal
        searchBtn.click();
      }
    });
  });
}
