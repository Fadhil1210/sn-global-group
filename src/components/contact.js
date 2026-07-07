import { escapeHTML } from '../utils/security.js';
import { currentLang, t } from '../utils/i18n.js';

export function renderContact(container) {
  const isEn = currentLang === 'en';

  const hashVal = window.location.hash || '#/';
  const urlParams = new URLSearchParams(hashVal.split('?')[1] || '');
  const inquiry = urlParams.get('inquiry');

  const initialSubject = inquiry ? (isEn ? `Inquiry: ${inquiry}` : `Demande d'information : ${inquiry}`) : '';
  const initialService = inquiry ? 'insurance' : '';

  const text = {
    badgeHero: { en: "Customer Support", fr: "Support Client" },
    titleHero: { en: "Contact SN Global Group", fr: "Contactez SN Global Group" },
    subHero: { en: "Advisors at your service in Baltimore to answer your project needs.", fr: "Des conseillers à votre écoute à Baltimore pour répondre à vos projets." },
    
    badgeHq: { en: "International Headquarters", fr: "Siège International" },
    titleHq: { en: "SN Global Group LLC", fr: "SN Global Group LLC" },
    descHq: { en: "Our corporate offices and customer support operations are strategically located in Maryland.", fr: "Nos bureaux corporatifs et notre centre opérationnel de support client sont stratégiquement installés dans le Maryland." },
    
    mailingAddress: { en: "Mailing Address", fr: "Adresse postale" },
    corpPhone: { en: "Corporate Phone", fr: "Téléphone Corporate" },
    dedicatedEmails: { en: "Email Address", fr: "Adresse E-mail" },
    travelLabel: { en: "Travel:", fr: "Voyage :" },
    insLabel: { en: "Insurance:", fr: "Assurance :" },
    corpLabel: { en: "Corporate:", fr: "Holding :" },
    
    hoursTitle: { en: "Opening Hours (Eastern Time)", fr: "Heures d'ouverture (Eastern Time)" },
    hoursWeek: { en: "Monday to Friday: 9:00 AM - 6:00 PM", fr: "Lundi au Vendredi : 9h00 - 18h00" },
    hoursDesc: { en: "Our emergency assistance support (for travelers and policyholders) remains accessible 24/7 via the dedicated hotline provided in your contracts.", fr: "Notre support d'assistance d'urgence (voyageurs et assurés) reste accessible 24/7 via la hotline dédiée fournie dans vos contrats." },
    
    formTitle: { en: "Send a Message", fr: "Envoyer un Message" },
    formSub: { en: "Select the appropriate service for ultra-fast processing of your request.", fr: "Sélectionnez le service approprié pour un traitement ultra-rapide de votre demande." },
    labelName: { en: "Full Name", fr: "Nom complet" },
    labelEmail: { en: "Email Address", fr: "Adresse e-mail" },
    labelService: { en: "Concerned Department", fr: "Service concerné" },
    chooseService: { en: "Choose the department...", fr: "Choisissez le service..." },
    optTravel: { en: "SN Global Travel (Bespoke Travel)", fr: "SN Global Travel (Voyage sur mesure)" },
    optInsurance: { en: "SN Global Insurance (USA Insurance)", fr: "SN Global Insurance (Assurance USA)" },
    optCorp: { en: "Corporate Holding (Baltimore HQ)", fr: "Holding Corporate (Baltimore HQ)" },
    labelSubject: { en: "Subject of your request", fr: "Sujet de votre demande" },
    placeholderSubject: { en: "e.g., Insurance info, custom safari quote...", fr: "Ex: Renseignements assurance visa, Devis safari..." },
    labelMsg: { en: "Message", fr: "Message" },
    placeholderMsg: { en: "Detail your project or question...", fr: "Détaillez votre projet ou votre question..." },
    btnSubmit: { en: "Send my Request", fr: "Envoyer ma Demande" },
    
    successTitle: { en: "Request sent successfully!", fr: "Demande envoyée avec succès !" },
    successDesc: { en: "Your request has been registered by our Baltimore servers.", fr: "Votre demande a été enregistrée par nos serveurs de Baltimore." },
    refTicket: { en: "YOUR TICKET REFERENCE:", fr: "VOTRE RÉFÉRENCE DE TICKET :" },
    successFollow: { en: "This unique ticket allows you to track your file progress at any time using the 'Support' button in the top navigation bar.", fr: "Ce ticket unique vous permet de suivre l'état d'avancement de votre dossier à tout moment en utilisant le bouton \"Support\" de la barre de navigation supérieure." },
    btnReset: { en: "Send another message", fr: "Envoyer un autre message" },
    
    badgeClient: { en: "Client Space", fr: "Espace Client" },
    titleClient: { en: "Your Active Requests on this Browser", fr: "Vos Demandes Actives sur ce Navigateur" },
    descClient: { en: "Local history of support tickets created during your simulations or contact requests.", fr: "Historique local de vos tickets de support créés lors de vos simulations ou demandes de contact." },
    emptyTitle: { en: "No active tickets", fr: "Aucun ticket actif" },
    emptyDesc: { en: "You have not submitted any quote or contact request from this browser yet.", fr: "Vous n'avez soumis aucune demande de devis ou de contact depuis ce navigateur pour le moment." },
    
    thDate: { en: "Date", fr: "Date" },
    thRef: { en: "Reference", fr: "Référence" },
    thService: { en: "Department", fr: "Service" },
    thSubject: { en: "Subject", fr: "Sujet" },
    thStatus: { en: "Status", fr: "Statut" },
    thAction: { en: "Action", fr: "Action" },
    btnTrack: { en: "Track", fr: "Suivre" }
  };

  container.innerHTML = `
    <!-- Contact Hero -->
    <section class="contact-hero">
      <div class="container text-center">
        <span class="badge badge-gold">${t(text.badgeHero)}</span>
        <h1>${t(text.titleHero)}</h1>
        <p class="subtitle">${t(text.subHero)}</p>
      </div>
    </section>

    <!-- Contact details & Form Section -->
    <section class="contact-section section-padding">
      <div class="container grid grid-2">
        
        <!-- Baltimore Headquarters & Info -->
        <div class="contact-info-col">
          <span class="badge">${t(text.badgeHq)}</span>
          <h2>${t(text.titleHq)}</h2>
          <p>${t(text.descHq)}</p>
          
          <div class="contact-channels">
            <div class="channel-card">
              <i class="fa-solid fa-map-location-dot gold-text"></i>
              <div>
                <h4>${t(text.mailingAddress)}</h4>
                <p>100 N Charles St, Baltimore, MD 21201, USA</p>
              </div>
            </div>
            
            <div class="channel-card">
              <i class="fa-solid fa-phone-volume gold-text"></i>
              <div>
                <h4>${t(text.corpPhone)}</h4>
                <p>+1 (202) 386-2273 <span class="text-muted">(Baltimore HQ)</span></p>
              </div>
            </div>
            
            <div class="channel-card">
              <i class="fa-solid fa-envelope-open-text gold-text"></i>
              <div>
                <h4>${t(text.dedicatedEmails)}</h4>
                <p><a href="mailto:contact@snglobalgroup.online" class="gold-text-hover" style="color: inherit; text-decoration: none;">contact@snglobalgroup.online</a></p>
              </div>
            </div>
          </div>
          
          <!-- Opening hours / trust card -->
          <div class="office-hours-card">
            <h4><i class="fa-regular fa-clock"></i> ${t(text.hoursTitle)}</h4>
            <p>${t(text.hoursWeek)}</p>
            <p>${t(text.hoursDesc)}</p>
          </div>
        </div>
        
        <!-- Interactive Form Card -->
        <div class="contact-form-col">
          <div class="contact-form-card" id="contact-form-wrapper">
            <h3>${t(text.formTitle)}</h3>
            <p class="form-card-subtitle">${t(text.formSub)}</p>
            
            <form id="sn-contact-form">
              <div class="form-group">
                <label for="contact-name">${t(text.labelName)}</label>
                <input type="text" id="contact-name" placeholder="Ex: Jean Dupont" class="form-control" required>
              </div>
              
              <div class="form-group">
                <label for="contact-email">${t(text.labelEmail)}</label>
                <input type="email" id="contact-email" placeholder="Ex: jean.dupont@email.com" class="form-control" required>
              </div>
              
              <div class="form-group">
                <label for="contact-service">${t(text.labelService)}</label>
                <select id="contact-service" class="form-control" required>
                  <option value="" disabled ${!initialService ? 'selected' : ''}>${t(text.chooseService)}</option>
                  <option value="travel" ${initialService === 'travel' ? 'selected' : ''}>${t(text.optTravel)}</option>
                  <option value="insurance" ${initialService === 'insurance' ? 'selected' : ''}>${t(text.optInsurance)}</option>
                  <option value="corporate" ${initialService === 'corporate' ? 'selected' : ''}>${t(text.optCorp)}</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="contact-subject">${t(text.labelSubject)}</label>
                <input type="text" id="contact-subject" placeholder="${t(text.placeholderSubject)}" class="form-control" value="${escapeHTML(initialSubject)}" required>
              </div>
              
              <div class="form-group">
                <label for="contact-message">${t(text.labelMsg)}</label>
                <textarea id="contact-message" placeholder="${t(text.placeholderMsg)}" class="form-control" rows="4" required></textarea>
              </div>
              
              <button type="submit" class="btn btn-gold btn-block">
                ${t(text.btnSubmit)} <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
            
            <!-- Success Panel -->
            <div id="contact-success-panel" class="contact-success-container hidden">
              <i class="fa-solid fa-circle-check text-success success-icon animate-bounce"></i>
              <h3>${t(text.successTitle)}</h3>
              <p>${t(text.successDesc)}</p>
              
              <div class="ticket-info-box">
                <span class="lbl">${t(text.refTicket)}</span>
                <span class="val" id="contact-ticket-id">SN-SUPP-XXXX</span>
              </div>
              
              <p class="info-followup">${t(text.successFollow)}</p>
              <button id="btn-reset-contact" class="btn btn-gold btn-sm">${t(text.btnReset)}</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Tickets Area (Client Space) -->
    <section class="my-tickets-section section-padding bg-light">
      <div class="container">
        <div class="text-center">
          <span class="badge">${t(text.badgeClient)}</span>
          <h2>${t(text.titleClient)}</h2>
          <p class="section-desc">${t(text.descClient)}</p>
        </div>
        
        <div class="my-tickets-card max-width-800" id="my-tickets-list-container">
          <!-- Filled dynamically by JS -->
        </div>
      </div>
    </section>
  `;

  renderMyTickets();

  window.scrollTo(0, 0);

  function renderMyTickets() {
    const listContainer = document.getElementById('my-tickets-list-container');
    if (!listContainer) return;

    const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
    
    if (tickets.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-tickets-state text-center">
          <i class="fa-solid fa-receipt text-muted" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
          <h4>${t(text.emptyTitle)}</h4>
          <p class="text-muted">${t(text.emptyDesc)}</p>
        </div>
      `;
      return;
    }

    const sortedTickets = [...tickets].reverse();
    
    listContainer.innerHTML = `
      <div class="tickets-table-wrapper">
        <table class="tickets-table">
          <thead>
            <tr>
              <th>${t(text.thDate)}</th>
              <th>${t(text.thRef)}</th>
              <th>${t(text.thService)}</th>
              <th>${t(text.thSubject)}</th>
              <th>${t(text.thStatus)}</th>
              <th>${t(text.thAction)}</th>
            </tr>
          </thead>
          <tbody>
            ${sortedTickets.map(tkt => {
              let statusClass = 'status-badge-info';
              if (tkt.status === 'Nouveau') statusClass = 'status-badge-warning';
              else if (tkt.status === 'Traité') statusClass = 'status-badge-success';
              
              let serviceLabel = 'Corporate';
              if (tkt.service === 'travel') serviceLabel = 'Travel';
              else if (tkt.service === 'insurance') serviceLabel = 'Insurance';

              return `
                <tr>
                  <td>${escapeHTML(tkt.date.split(' ')[0])}</td>
                  <td><strong class="gold-text">${escapeHTML(tkt.id)}</strong></td>
                  <td><span class="service-tag service-tag-${escapeHTML(tkt.service)}">${serviceLabel}</span></td>
                  <td class="text-truncate" style="max-width: 250px;">${escapeHTML(tkt.subject)}</td>
                  <td><span class="status-badge ${statusClass}">${escapeHTML(tkt.status)}</span></td>
                  <td>
                    <button class="btn btn-outline-navy btn-xs btn-track-ticket-local" data-id="${escapeHTML(tkt.id)}">
                      <i class="fa-solid fa-eye"></i> ${t(text.btnTrack)}
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;

    document.querySelectorAll('.btn-track-ticket-local').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const ticketModal = document.getElementById('ticket-modal');
        const ticketInput = document.getElementById('modal-ticket-id-input');
        const searchBtn = document.getElementById('modal-btn-search-ticket');
        
        if (ticketModal && ticketInput && searchBtn) {
          ticketInput.value = id;
          ticketModal.classList.add('active');
          searchBtn.click();
        }
      });
    });
  }
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
    
    const rand = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `SN-SUPP-${rand}`;
    
    const newTicket = {
      id: ticketId,
      name: name,
      email: email,
      service: service,
      subject: subject,
      message: message,
      status: 'Nouveau',
      date: new Date().toLocaleString(currentLang === 'en' ? 'en-US' : 'fr-FR'),
      details: {}
    };
    
    const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
    tickets.push(newTicket);
    localStorage.setItem('sn_global_tickets', JSON.stringify(tickets));
    
    form.classList.add('hidden');
    document.getElementById('contact-ticket-id').innerText = ticketId;
    successPanel.classList.remove('hidden');
    
    // Re-render my tickets list if the contact view is currently active
    const listContainer = document.getElementById('my-tickets-list-container');
    if (listContainer) {
      renderContact(document.getElementById('app'));
      // Keep success panel open
      document.getElementById('sn-contact-form').classList.add('hidden');
      document.getElementById('contact-success-panel').classList.remove('hidden');
      document.getElementById('contact-ticket-id').innerText = ticketId;
    }
  });
  
  resetBtn.addEventListener('click', () => {
    form.reset();
    form.classList.remove('hidden');
    successPanel.classList.add('hidden');
  });
}
