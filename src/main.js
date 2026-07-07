import { getHoldingLogo, getTravelLogo, getInsuranceLogo } from './components/logos.js';
import { escapeHTML } from './utils/security.js';
import { currentLang, toggleLang, t } from './utils/i18n.js';

// Component imports
import { renderGateway } from './components/gateway.js';
import { renderTravel } from './components/travel.js';
import { renderInsurance } from './components/insurance.js';
import { renderBlog } from './components/blog.js';
import { renderContact, initContactForm } from './components/contact.js';

// Simple "About" view directly in main.js to keep project organized
function renderAbout(container) {
  const isEn = currentLang === 'en';
  
  const text = {
    badge: { en: "Corporate Holding", fr: "Holding Corporate" },
    title: { en: "SN Global Group LLC", fr: "SN Global Group LLC" },
    subtitle: { en: "Your world, secured & explored from Baltimore, Maryland.", fr: "Votre monde, sécurisé & exploré depuis Baltimore, Maryland." },
    h2Vision: { en: "Solid foundations & Global vision", fr: "Fondations solides & Vision globale" },
    p1Vision: { en: "Established at the financial heart of <strong>Baltimore</strong>, Maryland, the holding company <strong>SN Global Group LLC</strong> coordinates exceptional subsidiaries through two major hubs: prestigious bespoke travel and international insurance protection.", fr: "Établie au cœur financier de <strong>Baltimore</strong>, Maryland, la holding <strong>SN Global Group LLC</strong> coordonne des filiales d'exception à travers deux pôles d'activités majeurs : les voyages de prestige sur mesure et la protection d'assurance internationale." },
    p2Vision: { en: "Our commitment rests on two pillars: making you discover the beauty of the world in complete freedom with <strong>SN Global Travel</strong>, and protecting what matters most to you with <strong>SN Global Insurance</strong>, especially facing the specific demands of life or travel in the United States.", fr: "Notre engagement repose sur deux piliers : vous faire découvrir la beauté du monde en toute liberté avec <strong>SN Global Travel</strong>, et protéger ce qui compte le plus pour vous avec <strong>SN Global Insurance</strong>, notamment face aux exigences particulières de la vie ou des séjours aux États-Unis." },
    stat1Num: { en: "2018", fr: "2018" },
    stat1Lbl: { en: "Created in Baltimore", fr: "Création à Baltimore" },
    stat2Num: { en: "98%", fr: "98%" },
    stat2Lbl: { en: "Satisfied Clients", fr: "Clients satisfaits" },
    stat3Num: { en: "120+", fr: "120+" },
    stat3Lbl: { en: "Destinations Covered", fr: "Destinations couvertes" },
    h2Values: { en: "Our Founding Values", fr: "Nos Valeurs Fondatrices" },
    val1Title: { en: "Trust & Security", fr: "Confiance & Sécurité" },
    val1Desc: { en: "From Baltimore to Tokyo, we guarantee total financial and logistical security to our policyholders and travelers.", fr: "De Baltimore à Tokyo, nous garantissons une sécurité financière et logistique totale à nos assurés et voyageurs." },
    val2Title: { en: "Prestige & Excellence", fr: "Prestige & Excellence" },
    val2Desc: { en: "We do not compromise on quality. Each itinerary is hand-drawn, each insurance policy is educational and tailored.", fr: "Nous ne transigeons pas sur la qualité. Chaque itinéraire est dessiné à la main, chaque contrat d'assurance est pédagogique et sur mesure." },
    val3Title: { en: "Customer Proximity", fr: "Proximité Client" },
    val3Desc: { en: "A dedicated advisor supports you and remains available 24/7 in case of emergency, with fast processing through our support center.", fr: "Un conseiller dédié vous accompagne et reste disponible 24/7 en cas d'urgence, avec un traitement rapide via notre centre de support." },
    badgeHq: { en: "Headquarters", fr: "Siège Social" },
    h2Hq: { en: "Anchored in Baltimore, MD", fr: "Ancré à Baltimore, MD" },
    p1Hq: { en: "The choice of Baltimore as the nerve center of SN Global Group is not accidental. A historic city turned toward the sea and innovation, Baltimore offers a dynamic ecosystem perfect for administering our international brokerage and travel organization services.", fr: "Le choix de Baltimore comme centre névralgique de SN Global Group n'est pas un hasard. Ville historique tournée vers la mer et l'innovation, Baltimore offre un écosystème dynamique parfait pour administrer nos services de courtage et d'organisation de voyages internationaux." },
    p2Hq: { en: "Our downtown offices house our legal, technical support, and wealth management advisory teams, ready to guide you.", fr: "Nos bureaux situés au centre-ville accueillent nos équipes juridiques, de support technique et nos conseillers en gestion de patrimoine, prêts à vous orienter." },
    btnHq: { en: "Book a meeting at our offices", fr: "Prendre rendez-vous aux bureaux" }
  };

  container.innerHTML = `
    <section class="about-hero">
      <div class="container text-center">
        <span class="badge badge-gold">${t(text.badge)}</span>
        <h1>${t(text.title)}</h1>
        <p class="subtitle">${t(text.subtitle)}</p>
      </div>
    </section>
    
    <section class="about-content section-padding">
      <div class="container grid grid-2">
        <div class="about-text animate-fade-in">
          <h2>${t(text.h2Vision)}</h2>
          <p>${t(text.p1Vision)}</p>
          <p>${t(text.p2Vision)}</p>
          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-num">${t(text.stat1Num)}</span>
              <span class="stat-lbl">${t(text.stat1Lbl)}</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">${t(text.stat2Num)}</span>
              <span class="stat-lbl">${t(text.stat2Lbl)}</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">${t(text.stat3Num)}</span>
              <span class="stat-lbl">${t(text.stat3Lbl)}</span>
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
        <h2>${t(text.h2Values)}</h2>
        <div class="grid grid-3 value-cards">
          <div class="value-card">
            <i class="fa-solid fa-shield-halved gold-text"></i>
            <h3>${t(text.val1Title)}</h3>
            <p>${t(text.val1Desc)}</p>
          </div>
          <div class="value-card">
            <i class="fa-solid fa-crown gold-text"></i>
            <h3>${t(text.val2Title)}</h3>
            <p>${t(text.val2Desc)}</p>
          </div>
          <div class="value-card">
            <i class="fa-solid fa-handshake gold-text"></i>
            <h3>${t(text.val3Title)}</h3>
            <p>${t(text.val3Desc)}</p>
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
          <span class="badge">${t(text.badgeHq)}</span>
          <h2>${t(text.h2Hq)}</h2>
          <p>${t(text.p1Hq)}</p>
          <p>${t(text.p2Hq)}</p>
          <a href="#/contact" class="btn btn-gold">${t(text.btnHq)}</a>
        </div>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
}

// Scroll-reveal: fades key content blocks in as they enter the viewport.
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

// Static Translation Sync function
function updateStaticTranslations() {
  const isEn = currentLang === 'en';
  document.documentElement.lang = currentLang;

  // Language switchers
  document.querySelectorAll('.lang-text, .mobile-lang-text').forEach(el => {
    el.innerText = isEn ? 'FR' : 'EN';
  });

  // Nav menus
  const navHome = document.getElementById('nav-home');
  const navTravel = document.getElementById('nav-travel');
  const navInsurance = document.getElementById('nav-insurance');
  const navAbout = document.getElementById('nav-about');
  const navBlog = document.getElementById('nav-blog');
  const navContact = document.getElementById('nav-contact');

  if (navHome) navHome.innerText = isEn ? 'Home' : 'Accueil';
  if (navTravel) navTravel.innerText = isEn ? 'Travel' : 'Voyages';
  if (navInsurance) navInsurance.innerText = isEn ? 'Insurance' : 'Assurances';
  if (navAbout) navAbout.innerText = isEn ? 'About' : 'À Propos';
  if (navBlog) navBlog.innerText = isEn ? 'Blog' : 'Blog';
  if (navContact) navContact.innerText = isEn ? 'Contact' : 'Contact';

  // Support links
  document.querySelectorAll('.btn-ticket-nav').forEach(btn => {
    if (btn.classList.contains('sidebar-link')) {
      btn.innerHTML = `<i class="fa-solid fa-ticket gold-text"></i> ${isEn ? 'Track my Ticket' : 'Suivre mon Ticket'}`;
    } else {
      btn.innerHTML = `<i class="fa-solid fa-ticket"></i> ${isEn ? 'Support / Ticket' : 'Support / Ticket'}`;
    }
  });

  // Sidebar mobile link labels
  const sidebarLinks = document.querySelectorAll('.sidebar-links li a');
  if (sidebarLinks.length >= 6) {
    sidebarLinks[0].innerText = isEn ? 'Home' : 'Accueil';
    sidebarLinks[1].innerText = isEn ? 'SN Global Travel' : 'SN Global Travel';
    sidebarLinks[2].innerText = isEn ? 'SN Global Insurance' : 'SN Global Insurance';
    sidebarLinks[3].innerText = isEn ? 'About SN Global' : 'À Propos de SN Global';
    sidebarLinks[4].innerText = isEn ? 'Blog & Advice' : 'Blog & Conseils';
    sidebarLinks[5].innerText = isEn ? 'Contact & Support' : 'Contact & Support';
    
    const mobileLangLabel = document.querySelector('.btn-lang-toggle-mobile');
    if (mobileLangLabel) {
      mobileLangLabel.innerHTML = `<i class="fa-solid fa-globe gold-text"></i> Language: <strong class="mobile-lang-text">${isEn ? 'FR' : 'EN'}</strong>`;
    }
  }

  // Footer
  const footerHeaders = document.querySelectorAll('#main-footer h3');
  if (footerHeaders.length >= 3) {
    footerHeaders[0].innerText = isEn ? 'SN Global Travel' : 'SN Global Travel';
    footerHeaders[1].innerText = isEn ? 'SN Global Insurance' : 'SN Global Insurance';
    footerHeaders[2].innerText = isEn ? 'Holding & Support' : 'Holding & Support';
  }

  document.querySelectorAll('#main-footer a').forEach(link => {
    const text = link.innerText.trim();
    if (text === 'Destinations de Rêve' || text === 'Dream Destinations') {
      link.innerText = isEn ? 'Dream Destinations' : 'Destinations de Rêve';
    } else if (text === 'Voyages Thématiques' || text === 'Thematic Trips') {
      link.innerText = isEn ? 'Thematic Trips' : 'Voyages Thématiques';
    } else if (text === 'Expériences sur Mesure' || text === 'Bespoke Experiences') {
      link.innerText = isEn ? 'Bespoke Experiences' : 'Expériences sur Mesure';
    } else if (text === 'Conseils de Voyage' || text === 'Travel Advice') {
      link.innerText = isEn ? 'Travel Advice' : 'Conseils de Voyage';
    } else if (text === 'Demande de Devis Voyage' || text === 'Request Travel Quote') {
      link.innerText = isEn ? 'Request Travel Quote' : 'Demande de Devis Voyage';
    } else if (text === 'Assurance Voyage USA' || text === 'USA Travel Insurance') {
      link.innerText = isEn ? 'USA Travel Insurance' : 'Assurance Voyage USA';
    } else if (text === 'Assurance Vie expatrié' || text === 'Expat Life Insurance') {
      link.innerText = isEn ? 'Expat Life Insurance' : 'Assurance Vie expatrié';
    } else if (text === 'Simulateur de Devis' || text === 'Quote Simulator') {
      link.innerText = isEn ? 'Quote Simulator' : 'Simulateur de Devis';
    } else if (text === 'Guide d\'Installation aux USA' || text === 'USA Relocation Guide') {
      link.innerText = isEn ? 'USA Relocation Guide' : 'Guide d\'Installation aux USA';
    } else if (text === 'Garanties & Prévoyance' || text === 'Coverage & Benefits') {
      link.innerText = isEn ? 'Coverage & Benefits' : 'Garanties & Prévoyance';
    } else if (text === 'À Propos du Groupe' || text === 'About the Group') {
      link.innerText = isEn ? 'About the Group' : 'À Propos du Groupe';
    } else if (text === 'Nos Valeurs' || text === 'Our Values') {
      link.innerText = isEn ? 'Our Values' : 'Nos Valeurs';
    } else if (text === 'Nous Recrutons' || text === 'We Are Hiring') {
      link.innerText = isEn ? 'We Are Hiring' : 'Nous Recrutons';
    } else if (text === 'Centre de Support' || text === 'Support Center') {
      link.innerText = isEn ? 'Support Center' : 'Centre de Support';
    } else if (text === 'Suivre mon Ticket' || text === 'Track my Ticket') {
      link.innerText = isEn ? 'Track my Ticket' : 'Suivre mon Ticket';
    } else if (text === 'Mentions Légales' || text === 'Legal Notice') {
      link.innerText = isEn ? 'Legal Notice' : 'Mentions Légales';
    } else if (text === 'Politique de Confidentialité (RGPD/CCPA)' || text === 'Privacy Policy (GDPR/CCPA)') {
      link.innerText = isEn ? 'Privacy Policy (GDPR/CCPA)' : 'Politique de Confidentialité (RGPD/CCPA)';
    } else if (text === 'Gestion des Cookies' || text === 'Cookie Management') {
      link.innerText = isEn ? 'Cookie Management' : 'Gestion des Cookies';
    }
  });

  const footerDesc = document.querySelector('#main-footer .brand-desc');
  if (footerDesc) {
    footerDesc.innerText = isEn 
      ? "International holding company based in Baltimore, MD, uniting the art of exceptional travel and the security of exclusive insurance solutions."
      : "Holding internationale basée à Baltimore, MD, unissant l'art du voyage d'exception et la sécurité de solutions d'assurances exclusives.";
  }

  const footerCopyright = document.querySelector('#main-footer .copyright');
  if (footerCopyright) {
    footerCopyright.innerText = isEn
      ? "© 2026 SN Global Group LLC. All rights reserved."
      : "© 2026 SN Global Group LLC. Tous droits réservés.";
  }

  // Support Modal
  const modalHeader = document.querySelector('#ticket-modal h2');
  if (modalHeader) {
    modalHeader.innerHTML = `<i class="fa-solid fa-ticket gold-text"></i> ${isEn ? 'Track your Request (Ticket)' : "Suivi de votre Demande (Ticket)"}`;
  }
  const modalSub = document.querySelector('#ticket-modal .modal-subtitle');
  if (modalSub) {
    modalSub.innerText = isEn
      ? "Enter your ticket number to track the processing status by our Baltimore teams."
      : "Entrez votre numéro de ticket pour suivre l'état de traitement par nos équipes de Baltimore.";
  }
  const modalInput = document.getElementById('modal-ticket-id-input');
  if (modalInput) {
    modalInput.placeholder = isEn ? "e.g., SN-A8B9" : "Ex: SN-A8B9";
  }
  const modalSearchBtn = document.getElementById('modal-btn-search-ticket');
  if (modalSearchBtn) {
    modalSearchBtn.innerText = isEn ? "Search" : "Rechercher";
  }
}

// Router function
function router() {
  const container = document.getElementById('app');
  
  // Trigger page transition fade-in
  container.classList.remove('page-enter-active');
  
  let hash = window.location.hash || '#/';
  
  let path = hash.replace(/^#/, '');
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  
  path = path.split('?')[0];

  // Dynamic SEO Metadata updates
  const seoData = {
    '/': {
      title: {
        en: "SN Global Group | Bespoke Travel & USA Insurance",
        fr: "SN Global Group | Voyage sur Mesure & Assurance USA"
      },
      description: {
        en: "Double exclusive expertise: luxury custom travel and complete health/life insurance solutions in the USA by the trusted holding based in Baltimore.",
        fr: "Double expertise exclusive : voyages d'exception personnalisés et solutions d'assurances complètes aux USA par la holding de confiance basée à Baltimore."
      }
    },
    '/travel': {
      title: {
        en: "Bespoke Luxury Travel | SN Global Travel",
        fr: "Voyage sur Mesure de Luxe | SN Global Travel"
      },
      description: {
        en: "Design your custom trip with our experts. Discover exceptional destinations (Kenya, Japan, Maldives, Italy) with 24/7 VIP assistance.",
        fr: "Concevez votre voyage sur mesure avec nos experts. Découvrez des destinations d'exception (Kenya, Japon, Maldives, Italie) avec assistance VIP 24h/7j."
      }
    },
    '/insurance': {
      title: {
        en: "USA Insurance: Health, Pension & Relocation | SN Global Insurance",
        fr: "Assurance USA : Santé, Prévoyance & Expatriation | SN Global Insurance"
      },
      description: {
        en: "Bespoke USA insurance solutions. Simulate your premium in real time for travel health insurance or expat life insurance.",
        fr: "Solutions d'assurance USA sur mesure. Simulez votre prime en temps réel pour l'assurance santé voyage ou prévoyance vie expatrié."
      }
    },
    '/about': {
      title: {
        en: "About the Holding | SN Global Group",
        fr: "À Propos de la Holding | SN Global Group"
      },
      description: {
        en: "Discover the holding SN Global Group based in Baltimore, Maryland. Our founding values of trust, prestige, and customer support.",
        fr: "Découvrez la holding SN Global Group basée à Baltimore, Maryland. Nos valeurs fondatrices de confiance, prestige et accompagnement client."
      }
    },
    '/blog': {
      title: {
        en: "Blog & Advice: USA Relocation and Bespoke Travel",
        fr: "Blog & Conseils : Expatriation USA et Voyage sur Mesure"
      },
      description: {
        en: "Discover our expert guides on USA insurance, tips for settling in the US (Baltimore), and how to plan a custom trip.",
        fr: "Découvrez nos guides d'experts sur l'assurance USA, les conseils pour s'installer aux États-Unis (Baltimore) et comment organiser un voyage sur mesure."
      }
    },
    '/contact': {
      title: {
        en: "Contact & Customer Support | SN Global Group Baltimore",
        fr: "Contact & Support Client | SN Global Group Baltimore"
      },
      description: {
        en: "Contact our offices in Baltimore, Maryland. Submit your quote requests and track your support ticket status online.",
        fr: "Contactez nos bureaux de Baltimore, Maryland. Soumettez vos demandes de devis et suivez l'avancement de votre ticket d'assistance en ligne."
      }
    }
  };

  const currentSeo = seoData[path] || seoData['/'];
  document.title = t(currentSeo.title);
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', t(currentSeo.description));
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

  // Finalize page transition
  setTimeout(() => {
    container.classList.add('page-enter-active');
  }, 40);
}

// Support Ticketing Local System
function initTicketingSystem() {
  const ticketModal = document.getElementById('ticket-modal');
  const closeBtn = document.getElementById('close-ticket-modal');
  const searchBtn = document.getElementById('modal-btn-search-ticket');
  const ticketInput = document.getElementById('modal-ticket-id-input');
  const resultContainer = document.getElementById('ticket-result-container');
  
  document.querySelectorAll('.btn-ticket-nav, #btn-track-ticket-footer').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      ticketModal.classList.add('active');
      ticketInput.focus();
    });
  });
  
  closeBtn.addEventListener('click', () => {
    ticketModal.classList.remove('active');
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === ticketModal) {
      ticketModal.classList.remove('active');
    }
  });
  
  searchBtn.addEventListener('click', performTicketSearch);
  ticketInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performTicketSearch();
    }
  });
  
  function performTicketSearch() {
    const isEn = currentLang === 'en';
    const id = ticketInput.value.trim().toUpperCase();
    if (!id) {
      resultContainer.innerHTML = `<p class="text-error"><i class="fa-solid fa-circle-exclamation"></i> ${isEn ? 'Please enter a valid ticket number (e.g., SN-XXXX).' : 'Veuillez entrer un numéro de ticket valide (Ex: SN-XXXX).'}</p>`;
      return;
    }
    
    const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
    const ticket = tickets.find(tkt => tkt.id === id);
    
    if (!ticket) {
      resultContainer.innerHTML = `
        <div class="ticket-error-state">
          <i class="fa-solid fa-magnifying-glass-minus text-error"></i>
          <h4>${isEn ? 'Ticket Not Found' : 'Ticket Introuvable'}</h4>
          <p>${isEn ? `No file matching reference <strong>${escapeHTML(id)}</strong> was found. Verify input or contact us.` : `Aucun dossier correspondant à la référence <strong>${escapeHTML(id)}</strong> n'a été trouvé. Vérifiez la saisie ou contactez-nous.`}</p>
        </div>
      `;
      return;
    }
    
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
    
    let statusLabel = ticket.status;
    if (isEn) {
      if (ticket.status === 'Nouveau') statusLabel = 'New';
      else if (ticket.status === 'En cours') statusLabel = 'In progress';
      else if (ticket.status === 'Traité') statusLabel = 'Processed';
    }
    
    resultContainer.className = "ticket-result-found";
    resultContainer.innerHTML = `
      <div class="ticket-card-header">
        <span class="ticket-id">${escapeHTML(ticket.id)}</span>
        <span class="status-badge ${statusClass}">${escapeHTML(statusLabel)}</span>
      </div>
      <div class="ticket-card-body">
        <p><strong>${isEn ? 'Recipient:' : 'Destinataire :'}</strong> ${ticket.service === 'travel' ? 'SN Global Travel' : ticket.service === 'insurance' ? 'SN Global Insurance' : 'Holding Corporate'}</p>
        <p><strong>${isEn ? 'Subject:' : 'Sujet :'}</strong> ${escapeHTML(ticket.subject)}</p>
        <p><strong>${isEn ? 'Creation Date:' : 'Date de création :'}</strong> ${escapeHTML(ticket.date)}</p>
        <p><strong>${isEn ? 'Message Sent:' : 'Message transmis :'}</strong> <span class="ticket-msg-preview">"${escapeHTML(ticket.message)}"</span></p>
      </div>
      
      <!-- Progress timeline -->
      <div class="ticket-timeline">
        <div class="timeline-step ${step >= 1 ? 'completed' : ''}">
          <div class="step-icon"><i class="fa-solid fa-file-signature"></i></div>
          <div class="step-label">${isEn ? 'Received' : 'Reçu'}</div>
          <div class="step-desc">${isEn ? 'Registered in Baltimore' : 'Enregistré à Baltimore'}</div>
        </div>
        <div class="timeline-step ${step >= 2 ? 'completed' : ''}">
          <div class="step-icon"><i class="fa-solid fa-user-tie"></i></div>
          <div class="step-label">${isEn ? 'Analysis' : 'Analyse'}</div>
          <div class="step-desc">${isEn ? 'Study by an advisor' : 'Étude par un conseiller'}</div>
        </div>
        <div class="timeline-step ${step >= 3 ? 'completed' : ''}">
          <div class="step-icon"><i class="fa-solid fa-circle-check"></i></div>
          <div class="step-label">${isEn ? 'Resolved' : 'Résolu'}</div>
          <div class="step-desc">${isEn ? 'Proposal sent' : 'Proposition transmise'}</div>
        </div>
      </div>
    `;
  }
}

// Initialize on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  
  const footerLogo = document.getElementById('footer-logo-container');
  if (footerLogo) {
    footerLogo.innerHTML = getHoldingLogo('light', '280px');
  }

  // Mobile menu
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileClose = document.getElementById('mobile-menu-close');
  const sidebar = document.getElementById('mobile-sidebar');
  
  mobileToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
  });
  
  mobileClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
  
  document.querySelectorAll('.sidebar-link').forEach(link => {
    if (!link.classList.contains('btn-lang-toggle-mobile')) {
      link.addEventListener('click', () => {
        sidebar.classList.remove('open');
      });
    }
  });

  // Language switcher event listeners
  document.querySelectorAll('.btn-lang-toggle, .btn-lang-toggle-mobile').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLang();
    });
  });

  // Listen to custom languagechange event
  window.addEventListener('languagechange', () => {
    updateStaticTranslations();
    router();
  });

  // Init ticket system
  initTicketingSystem();
  
  // Set initial translations and run router
  updateStaticTranslations();
  router();
});
