import { getHoldingLogo, getTravelLogo, getInsuranceLogo } from './components/logos.js';
import { escapeHTML } from './utils/security.js';

// Component imports (will be implemented next)
import { renderGateway } from './components/gateway.js';
import { renderTravel } from './components/travel.js';
import { renderInsurance } from './components/insurance.js';
import { renderBlog } from './components/blog.js';
import { renderContact, initContactForm } from './components/contact.js';

// Simple "About" view directly in main.js to keep project organized
function renderAbout(container) {
  container.innerHTML = `
    <section class="about-hero">
      <div class="container text-center">
        <span class="badge badge-gold">Holding Corporate</span>
        <h1>SN Global Group LLC</h1>
        <p class="subtitle">Votre monde, sécurisé & exploré depuis Baltimore, Maryland.</p>
      </div>
    </section>
    
    <section class="about-content section-padding">
      <div class="container grid grid-2">
        <div class="about-text animate-fade-in">
          <h2>Fondations solides & Vision globale</h2>
          <p>Établie au cœur financier de <strong>Baltimore</strong>, Maryland, la holding <strong>SN Global Group LLC</strong> coordonne des filiales d'exception à travers deux pôles d'activités majeurs : les voyages de prestige sur mesure et la protection d'assurance internationale.</p>
          <p>Notre engagement repose sur deux piliers : vous faire découvrir la beauté du monde en toute liberté avec <strong>SN Global Travel</strong>, et protéger ce qui compte le plus pour vous avec <strong>SN Global Insurance</strong>, notamment face aux exigences particulières de la vie ou des séjours aux États-Unis.</p>
          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-num">2018</span>
              <span class="stat-lbl">Création à Baltimore</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">98%</span>
              <span class="stat-lbl">Clients satisfaits</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">120+</span>
              <span class="stat-lbl">Destinations couvertes</span>
            </div>
          </div>
        </div>
        <div class="about-visual animate-slide-in">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="SN Global Group Office" class="img-responsive rounded shadow">
        </div>
      </div>
    </section>
    
    <section class="values-section section-padding bg-navy-light text-white">
      <div class="container text-center">
        <h2>Nos Valeurs Fondatrices</h2>
        <div class="grid grid-3 value-cards">
          <div class="value-card">
            <i class="fa-solid fa-shield-halved gold-text"></i>
            <h3>Confiance & Sécurité</h3>
            <p>De Baltimore à Tokyo, nous garantissons une sécurité financière et logistique totale à nos assurés et voyageurs.</p>
          </div>
          <div class="value-card">
            <i class="fa-solid fa-crown gold-text"></i>
            <h3>Prestige & Excellence</h3>
            <p>Nous ne transigeons pas sur la qualité. Chaque itinéraire est dessiné à la main, chaque contrat d'assurance est pédagogique et sur mesure.</p>
          </div>
          <div class="value-card">
            <i class="fa-solid fa-handshake gold-text"></i>
            <h3>Proximité Client</h3>
            <p>Un conseiller dédié vous accompagne et reste disponible 24/7 en cas d'urgence, avec un traitement rapide via notre centre de support.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="baltimore-section section-padding">
      <div class="container grid grid-2 align-center">
        <div class="baltimore-visual">
          <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80" alt="Inner Harbor Baltimore" class="img-responsive rounded shadow">
        </div>
        <div class="baltimore-text">
          <span class="badge">Siège Social</span>
          <h2>Ancré à Baltimore, MD</h2>
          <p>Le choix de Baltimore comme centre névralgique de SN Global Group n'est pas un hasard. Ville historique tournée vers la mer et l'innovation, Baltimore offre un écosystème dynamique parfait pour administrer nos services de courtage et d'organisation de voyages internationaux.</p>
          <p>Nos bureaux situés au centre-ville accueillent nos équipes juridiques, de support technique et nos conseillers en gestion de patrimoine, prêts à vous orienter.</p>
          <a href="#/contact" class="btn btn-gold">Prendre rendez-vous aux bureaux</a>
        </div>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
}

// Scroll-reveal: fades key content blocks in as they enter the viewport.
// Respects prefers-reduced-motion (users who opt out simply see content immediately).
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let revealObserver;

function initScrollReveal(container) {
  if (prefersReducedMotion) return;

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  }

  const revealSelectors = [
    '.feature-item', '.value-card', '.destination-card', '.plan-card',
    '.blog-card', '.sector-banner', '.channel-card', '.stat-card',
    '.q-stat', '.group-intro-visual', '.group-intro-text', '.corporate-badge-card'
  ];

  const targets = container.querySelectorAll(revealSelectors.join(','));
  targets.forEach((el, i) => {
    el.classList.add('reveal-init');
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
    revealObserver.observe(el);
  });
}

// Router configuration
const routes = {
  '/': renderGateway,
  '/travel': renderTravel,
  '/insurance': renderInsurance,
  '/about': renderAbout,
  '/blog': renderBlog,
  '/contact': renderContact
};

// Router function
function router() {
  const container = document.getElementById('app');
  let hash = window.location.hash || '#/';
  
  // Clean hash to match routes keys
  let path = hash.replace(/^#/, '');
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  
  // Strip query params or secondary slashes if any
  path = path.split('?')[0];

  // Dynamic SEO Metadata updates
  const seoData = {
    '/': {
      title: "SN Global Group | Voyage sur Mesure & Assurance USA",
      description: "Double expertise exclusive : voyages d'exception personnalisés et solutions d'assurances complètes aux USA par la holding de confiance basée à Baltimore."
    },
    '/travel': {
      title: "Voyage sur Mesure de Luxe | SN Global Travel",
      description: "Concevez votre voyage sur mesure avec nos experts. Découvrez des destinations d'exception (Kenya, Japon, Maldives, Italie) avec assistance VIP 24h/7j."
    },
    '/insurance': {
      title: "Assurance USA : Santé, Prévoyance & Expatriation | SN Global Insurance",
      description: "Solutions d'assurance USA sur mesure. Simulez votre prime en temps réel pour l'assurance santé voyage ou prévoyance vie expatrié."
    },
    '/about': {
      title: "À Propos de la Holding | SN Global Group",
      description: "Découvrez la holding SN Global Group basée à Baltimore, Maryland. Nos valeurs fondatrices de confiance, prestige et accompagnement client."
    },
    '/blog': {
      title: "Blog & Conseils : Expatriation USA et Voyage sur Mesure",
      description: "Découvrez nos guides d'experts sur l'assurance USA, les conseils pour s'installer aux États-Unis (Baltimore) et comment organiser un voyage sur mesure."
    },
    '/contact': {
      title: "Contact & Support Client | SN Global Group Baltimore",
      description: "Contactez nos bureaux de Baltimore, Maryland. Soumettez vos demandes de devis et suivez l'avancement de votre ticket d'assistance en ligne."
    }
  };

  const currentSeo = seoData[path] || seoData['/'];
  document.title = currentSeo.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', currentSeo.description);
  }

  const renderFn = routes[path] || renderGateway;
  
  // Clean active states on navigation menu
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  
  // Header look adjustment (transparent on gateway, solid navy on others)
  const header = document.getElementById('main-header');
  const logoContainer = document.getElementById('header-logo-container');
  
  if (path === '/') {
    header.className = 'header-transparent';
    logoContainer.innerHTML = getHoldingLogo('light', '230px');
    const navHome = document.getElementById('nav-home');
    if (navHome) navHome.classList.add('active');
  } else if (path === '/travel') {
    header.className = 'header-solid header-travel-theme';
    logoContainer.innerHTML = getTravelLogo('light', '230px');
    const navTravel = document.getElementById('nav-travel');
    if (navTravel) navTravel.classList.add('active');
  } else if (path === '/insurance') {
    header.className = 'header-solid header-insurance-theme';
    logoContainer.innerHTML = getInsuranceLogo('light', '230px');
    const navInsurance = document.getElementById('nav-insurance');
    if (navInsurance) navInsurance.classList.add('active');
  } else {
    header.className = 'header-solid';
    logoContainer.innerHTML = getHoldingLogo('light', '230px');
    
    // Highlight correct navigation tab
    const matchedNavItem = document.getElementById(`nav-${path.substring(1)}`);
    if (matchedNavItem) matchedNavItem.classList.add('active');
  }

  // Close mobile menu if open
  document.getElementById('mobile-sidebar').classList.remove('open');
  
  // Render views
  renderFn(container);
  
  // Additional component initialization
  if (path === '/contact') {
    initContactForm();
  }

  // Fade cards/sections in as the user scrolls
  initScrollReveal(container);
}

// Support Ticketing Local System
function initTicketingSystem() {
  const ticketModal = document.getElementById('ticket-modal');
  const closeBtn = document.getElementById('close-ticket-modal');
  const searchBtn = document.getElementById('modal-btn-search-ticket');
  const ticketInput = document.getElementById('modal-ticket-id-input');
  const resultContainer = document.getElementById('ticket-result-container');
  
  // Hook navigation header/footer buttons to open modal
  document.querySelectorAll('.btn-ticket-nav, #btn-track-ticket-footer').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      ticketModal.classList.add('active');
      ticketInput.focus();
    });
  });
  
  // Close modal click
  closeBtn.addEventListener('click', () => {
    ticketModal.classList.remove('active');
  });
  
  // Close modal click outside
  window.addEventListener('click', (e) => {
    if (e.target === ticketModal) {
      ticketModal.classList.remove('active');
    }
  });
  
  // Search ticket function
  searchBtn.addEventListener('click', performTicketSearch);
  ticketInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performTicketSearch();
    }
  });
  
  function performTicketSearch() {
    const id = ticketInput.value.trim().toUpperCase();
    if (!id) {
      resultContainer.innerHTML = `<p class="text-error"><i class="fa-solid fa-circle-exclamation"></i> Veuillez entrer un numéro de ticket valide (Ex: SN-XXXX).</p>`;
      return;
    }
    
    // Load tickets from local storage
    const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
    const ticket = tickets.find(t => t.id === id);
    
    if (!ticket) {
      resultContainer.innerHTML = `
        <div class="ticket-error-state">
          <i class="fa-solid fa-magnifying-glass-minus text-error"></i>
          <h4>Ticket Introuvable</h4>
          <p>Aucun dossier correspondant à la référence <strong>${escapeHTML(id)}</strong> n'a été trouvé. Vérifiez la saisie ou contactez-nous directement.</p>
        </div>
      `;
      return;
    }
    
    // Build status classes
    let statusClass = 'status-badge-info';
    let step = 1;
    if (ticket.status === 'Nouveau') {
      statusClass = 'status-badge-warning';
      step = 1;
    } else if (ticket.status === 'En cours') {
      statusClass = 'status-badge-info';
      step = 2;
    } else if (ticket.status === 'Traité') {
      statusClass = 'status-badge-success';
      step = 3;
    }
    
    resultContainer.className = "ticket-result-found";
    resultContainer.innerHTML = `
      <div class="ticket-card-header">
        <span class="ticket-id">${escapeHTML(ticket.id)}</span>
        <span class="status-badge ${statusClass}">${escapeHTML(ticket.status)}</span>
      </div>
      <div class="ticket-card-body">
        <p><strong>Destinataire :</strong> ${ticket.service === 'travel' ? 'SN Global Travel' : ticket.service === 'insurance' ? 'SN Global Insurance' : 'Holding Corporate'}</p>
        <p><strong>Sujet :</strong> ${escapeHTML(ticket.subject)}</p>
        <p><strong>Date de création :</strong> ${escapeHTML(ticket.date)}</p>
        <p><strong>Message transmis :</strong> <span class="ticket-msg-preview">"${escapeHTML(ticket.message)}"</span></p>
      </div>
      
      <!-- Progress timeline -->
      <div class="ticket-timeline">
        <div class="timeline-step ${step >= 1 ? 'completed' : ''}">
          <div class="step-icon"><i class="fa-solid fa-file-signature"></i></div>
          <div class="step-label">Reçu</div>
          <div class="step-desc">Enregistré à Baltimore</div>
        </div>
        <div class="timeline-step ${step >= 2 ? 'completed' : ''}">
          <div class="step-icon"><i class="fa-solid fa-user-tie"></i></div>
          <div class="step-label">Analyse</div>
          <div class="step-desc">Étude par un conseiller</div>
        </div>
        <div class="timeline-step ${step >= 3 ? 'completed' : ''}">
          <div class="step-icon"><i class="fa-solid fa-circle-check"></i></div>
          <div class="step-label">Résolu</div>
          <div class="step-desc">Proposition transmise</div>
        </div>
      </div>
    `;
  }
}

// Initialize on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  // Setup router listeners
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  
  // Set holding logo in footer initially
  const footerLogo = document.getElementById('footer-logo-container');
  if (footerLogo) {
    footerLogo.innerHTML = getHoldingLogo('light', '280px');
  }

  // Mobile menu setup
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileClose = document.getElementById('mobile-menu-close');
  const sidebar = document.getElementById('mobile-sidebar');
  
  mobileToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
  });
  
  mobileClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
  
  // Close menu when clicking sidebar links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  });

  // Init ticket system
  initTicketingSystem();
  
  // Initial router execution
  router();
});
