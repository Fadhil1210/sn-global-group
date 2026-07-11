import { getHoldingLogo, getTravelLogo, getInsuranceLogo } from './logos.js';
import { currentLang, t } from '../utils/i18n.js';

export function renderGateway(container) {
  const isEn = currentLang === 'en';

  const text = {
    heroSubtitle: {
      en: "The exclusive alliance of exceptional travel and financial security.",
      fr: "L'alliance exclusive de l'évasion d'exception et de la sécurité financière."
    },
    btnExpertise: {
      en: "Discover our expertise",
      fr: "Découvrir nos expertises"
    },
    btnWho: {
      en: "Who are we?",
      fr: "Qui sommes-nous ?"
    },
    badgeHolding: {
      en: "Trusted Holding",
      fr: "Holding de Confiance"
    },
    introTitle: {
      en: "SN Global Group LLC",
      fr: "SN Global Group LLC"
    },
    introP1: {
      en: "Based in Baltimore, Maryland, <strong>SN Global Group LLC</strong> is an American holding company directing two subsidiaries specialized in service excellence:",
      fr: "Basée à Baltimore, Maryland, <strong>SN Global Group LLC</strong> est une holding américaine qui pilote deux filiales spécialisées dans l'excellence de service :"
    },
    introP2: {
      en: "With <strong>SN Global Travel</strong>, we design exceptional bespoke travel itineraries for an exacting clientele. With <strong>SN Global Insurance</strong>, we offer health, pension, and life insurance solutions tailored to the requirements of relocating or traveling to the United States.",
      fr: "Avec <strong>SN Global Travel</strong>, nous créons des itinéraires de voyages d'exception entièrement sur mesure pour une clientèle exigeante. Avec <strong>SN Global Insurance</strong>, nous offrons des solutions d'assurances de santé, prévoyance et vie adaptées aux exigences de l'expatriation ou du séjour aux États-Unis."
    },
    introP3: {
      en: "Our unified structure guarantees management rigor, full compliance with international laws, and first-class customer support.",
      fr: "Notre structure unifiée garantit une rigueur de gestion, une conformité totale aux législations internationales et un accompagnement client de premier ordre."
    },
    statHq: {
      en: "Baltimore HQ",
      fr: "Siège à Baltimore"
    },
    statSupport: {
      en: "24/7 Support",
      fr: "Assistance Client"
    },
    statBespoke: {
      en: "100% Custom",
      fr: "Services sur Mesure"
    },
    badgeSecurity: {
      en: "Security & Prestige",
      fr: "Sécurité & Prestige"
    },
    badgeSecurityText: {
      en: "Our strength lies in a double approach: exploring the world with peace of mind while securing your financial future.",
      fr: "Notre force repose sur une double approche : explorer le monde en toute sérénité tout en sécurisant votre futur financier."
    },
    filialesBadge: {
      en: "Our Subsidiaries",
      fr: "Nos Filiales"
    },
    filialesTitle: {
      en: "Two Dedicated Hubs of Excellence",
      fr: "Deux Pôles d'Excellence Dédiés"
    },
    filialesDesc: {
      en: "Explore our specialized subsidiaries to access rate simulators and personalized configurations.",
      fr: "Explorez nos filiales spécialisées pour accéder aux simulateurs de tarifs et configurations personnalisées."
    },
    travelDesc: {
      en: "The world of travel reinvented. We organize exceptional customized stays worldwide: prestigious safaris in Kenya, zen escapes in Japan, relaxation in the Maldives, and cultural tours.",
      fr: "L'univers du voyage réinventé. Nous organisons des séjours d'exception personnalisés à travers le monde : safaris de prestige au Kenya, échappées zen au Japon, détentes aux Maldives et séjours culturels."
    },
    travelBullet1: {
      en: "Hand-drawn itineraries",
      fr: "Itinéraires dessinés à la main"
    },
    travelBullet2: {
      en: "Partner 5-star hotels & resorts",
      fr: "Hôtels & Resorts 5 étoiles partenaires"
    },
    travelBullet3: {
      en: "24/7 VIP Concierge available",
      fr: "Conciergerie VIP disponible 24/7"
    },
    travelBtn: {
      en: "Access SN Global Travel",
      fr: "Accéder à SN Global Travel"
    },
    insDesc: {
      en: "Your health and financial shield in the United States. We cover your emergency medical expenses and secure your family's estate with flexible and clear life insurance policies.",
      fr: "Votre bouclier de santé et de prévoyance aux États-Unis. Nous couvrons vos frais médicaux à l'étranger et sécurisons le patrimoine de votre famille avec des contrats d'assurance vie flexibles et clairs."
    },
    insBullet1: {
      en: "Emergency medical expenses coverage",
      fr: "Prise en charge frais médicaux urgences"
    },
    insBullet2: {
      en: "Instant online premium simulator",
      fr: "Simulateur de prime instantané en ligne"
    },
    insBullet3: {
      en: "Full legal compliance (GDPR/CCPA)",
      fr: "Conformité légale complète RGPD/CCPA"
    },
    insBtn: {
      en: "Access SN Global Insurance",
      fr: "Accéder à SN Global Insurance"
    },
    trustTitle: {
      en: "A Group Rooted in the American East Coast",
      fr: "Un Groupe Ancré dans l'Est Américain"
    },
    trustDesc: {
      en: "From our operational center in Baltimore, we manage international logistics and provide customer support in French and English.",
      fr: "Depuis notre centre opérationnel de Baltimore, nous pilotons la logistique internationale et gérons le support client en français et anglais."
    },
    featCredTitle: {
      en: "Institutional Credibility",
      fr: "Crédibilité Institutionnelle"
    },
    featCredDesc: {
      en: "Holding registered and governed under the corporate laws of Maryland, USA.",
      fr: "Holding enregistrée et régie selon les lois corporatives du Maryland aux États-Unis."
    },
    featReachTitle: {
      en: "International Reach",
      fr: "Portée Internationale"
    },
    featReachDesc: {
      en: "Global presence with exclusive partners in over 45 countries for travel and medical assistance.",
      fr: "Présence globale avec des partenaires exclusifs dans plus de 45 pays pour le voyage et l'assistance médicale."
    },
    featSupportTitle: {
      en: "Integrated Ticketing & Support",
      fr: "Ticketing & Support Intégrés"
    },
    featSupportDesc: {
      en: "Real-time tracking of your insurance or quote requests through our online support system.",
      fr: "Suivi en temps réel de vos demandes d'assurances ou de devis via notre système de support en ligne."
    }
  };

  container.innerHTML = `
    <!-- Holding Hero with dynamic Ken Burns background carousel of world destinations -->
    <section class="holding-hero">
      <div class="holding-hero-carousel">
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80');" aria-hidden="true"></div> <!-- Paris -->
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1920&q=80');" aria-hidden="true"></div> <!-- New York -->
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1920&q=80');" aria-hidden="true"></div> <!-- Tokyo -->
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&q=80');" aria-hidden="true"></div> <!-- Sydney -->
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1522083165195-342750297f4e?auto=format&fit=crop&w=1920&q=80');" aria-hidden="true"></div> <!-- Rome / Venice -->
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80');" aria-hidden="true"></div> <!-- Dubai -->
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1920&q=80');" aria-hidden="true"></div> <!-- Pyramids of Egypt -->
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1463133644170-c8f9fa4b8405?auto=format&fit=crop&w=1920&q=80');" aria-hidden="true"></div> <!-- Niagara Falls -->
      </div>
      <div class="holding-hero-overlay"></div>
      <div class="container holding-hero-content text-center">
        <div class="holding-hero-logo animate-fade-in">
          ${getHoldingLogo('light', '380px')}
        </div>
        <p class="subtitle font-montserrat animate-slide-in">${t(text.heroSubtitle)}</p>
        <div class="hero-actions animate-fade-in">
          <a href="#sectors-anchor" class="btn btn-gold btn-lg">${t(text.btnExpertise)}</a>
          <a href="#about-group-anchor" class="btn btn-outline-white btn-lg">${t(text.btnWho)}</a>
        </div>
      </div>
    </section>

    <!-- Group Presentation Section -->
    <section id="about-group-anchor" class="group-intro-section section-padding">
      <div class="container grid grid-2 align-center">
        <div class="group-intro-text text-left">
          <span class="badge">${t(text.badgeHolding)}</span>
          <h2>${t(text.introTitle)}</h2>
          <p>${t(text.introP1)}</p>
          <p>${t(text.introP2)}</p>
          <p>${t(text.introP3)}</p>
          <div class="holding-quick-stats">
            <div class="q-stat">
              <span class="num">USA</span>
              <span class="lbl">${t(text.statHq)}</span>
            </div>
            <div class="q-stat">
              <span class="num">24/7</span>
              <span class="lbl">${t(text.statSupport)}</span>
            </div>
            <div class="q-stat">
              <span class="num">100%</span>
              <span class="lbl">${t(text.statBespoke)}</span>
            </div>
          </div>
        </div>
        <div class="group-intro-visual">
          <div class="corporate-badge-card">
            <i class="fa-solid fa-building-columns gold-text"></i>
            <h3>${t(text.badgeSecurity)}</h3>
            <p>${t(text.badgeSecurityText)}</p>
          </div>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="SN Global Baltimore Headquarters" class="img-responsive rounded shadow">
        </div>
      </div>
    </section>

    <!-- business sectors stacked banners -->
    <section id="sectors-anchor" class="sectors-section section-padding bg-navy-light text-white">
      <div class="container text-center">
        <span class="badge badge-gold">${t(text.filialesBadge)}</span>
        <h2>${t(text.filialesTitle)}</h2>
        <p class="section-desc text-muted">${t(text.filialesDesc)}</p>
        
        <div class="sectors-stack">
          
          <!-- Banner 1: Travel -->
          <div class="sector-banner travel-banner rounded shadow animate-fade-in">
            <div class="sector-banner-visual" style="background-image: url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80');"></div>
            <div class="sector-banner-text">
              <div class="sector-logo-wrapper">
                ${getTravelLogo('light', '300px')}
              </div>
              <p>${t(text.travelDesc)}</p>
              <ul class="sector-bullet-points">
                <li><i class="fa-solid fa-compass gold-text"></i> ${t(text.travelBullet1)}</li>
                <li><i class="fa-solid fa-hotel gold-text"></i> ${t(text.travelBullet2)}</li>
                <li><i class="fa-solid fa-headset gold-text"></i> ${t(text.travelBullet3)}</li>
              </ul>
              <a href="#/travel" class="btn btn-gold">${t(text.travelBtn)} <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          
          <!-- Banner 2: Insurance -->
          <div class="sector-banner insurance-banner rounded shadow animate-fade-in">
            <div class="sector-banner-text">
              <div class="sector-logo-wrapper">
                ${getInsuranceLogo('light', '300px')}
              </div>
              <p>${t(text.insDesc)}</p>
              <ul class="sector-bullet-points">
                <li><i class="fa-solid fa-shield-heart gold-text"></i> ${t(text.insBullet1)}</li>
                <li><i class="fa-solid fa-calculator gold-text"></i> ${t(text.insBullet2)}</li>
                <li><i class="fa-solid fa-scale-balanced gold-text"></i> ${t(text.insBullet3)}</li>
              </ul>
              <a href="#/insurance" class="btn btn-outline-white">${t(text.insBtn)} <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="sector-banner-visual" style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80');"></div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Trust indicators / location section -->
    <section class="trust-banner section-padding">
      <div class="container text-center">
        <h2>${t(text.trustTitle)}</h2>
        <p class="section-desc">${t(text.trustDesc)}</p>
        <div class="grid grid-3 holding-features">
          <div class="feature-item">
            <i class="fa-solid fa-landmark"></i>
            <h3>${t(text.featCredTitle)}</h3>
            <p>${t(text.featCredDesc)}</p>
          </div>
          <div class="feature-item">
            <i class="fa-solid fa-globe"></i>
            <h3>${t(text.featReachTitle)}</h3>
            <p>${t(text.featReachDesc)}</p>
          </div>
          <div class="feature-item">
            <i class="fa-solid fa-ticket-simple"></i>
            <h3>${t(text.featSupportTitle)}</h3>
            <p>${t(text.featSupportDesc)}</p>
          </div>
        </div>
      </div>
    </section>
  `;

  // Ensure header layout matches normal opaque styling
  const header = document.getElementById('main-header');
  if (header) {
    header.className = 'header-solid';
    header.style.opacity = '1';
    header.style.pointerEvents = 'auto';
  }

  window.scrollTo(0, 0);
}
