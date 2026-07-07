import { getHoldingLogo, getTravelLogo, getInsuranceLogo } from './logos.js';

export function renderGateway(container) {
  // We completely replace the old split-screen with the new corporate landing page structure
  container.innerHTML = `
    <!-- Holding Hero -->
    <section class="holding-hero">
      <div class="holding-hero-bg"></div>
      <div class="holding-hero-overlay"></div>
      <div class="container holding-hero-content text-center">
        <div class="holding-hero-logo animate-fade-in">
          ${getHoldingLogo('light', '380px')}
        </div>
        <p class="subtitle font-montserrat animate-slide-in">L'alliance exclusive de l'évasion d'exception et de la sécurité financière.</p>
        <div class="hero-actions animate-fade-in">
          <a href="#sectors-anchor" class="btn btn-gold btn-lg">Découvrir nos expertises</a>
          <a href="#about-group-anchor" class="btn btn-outline-white btn-lg">Qui sommes-nous ?</a>
        </div>
      </div>
    </section>

    <!-- Group Presentation Section -->
    <section id="about-group-anchor" class="group-intro-section section-padding">
      <div class="container grid grid-2 align-center">
        <div class="group-intro-text text-left">
          <span class="badge">Holding de Confiance</span>
          <h2>SN Global Group LLC</h2>
          <p>Basée à Baltimore, Maryland, <strong>SN Global Group LLC</strong> est une holding américaine qui pilote deux filiales spécialisées dans l'excellence de service :</p>
          <p>Avec <strong>SN Global Travel</strong>, nous créons des itinéraires de voyages d'exception entièrement sur mesure pour une clientèle exigeante. 
          Avec <strong>SN Global Insurance</strong>, nous offrons des solutions d'assurances de santé, prévoyance et vie adaptées aux exigences de l'expatriation ou du séjour aux États-Unis.</p>
          <p>Notre structure unifiée garantit une rigueur de gestion, une conformité totale aux législations internationales et un accompagnement client de premier ordre.</p>
          <div class="holding-quick-stats">
            <div class="q-stat">
              <span class="num">USA</span>
              <span class="lbl">Siège à Baltimore</span>
            </div>
            <div class="q-stat">
              <span class="num">24/7</span>
              <span class="lbl">Assistance Client</span>
            </div>
            <div class="q-stat">
              <span class="num">100%</span>
              <span class="lbl">Services sur Mesure</span>
            </div>
          </div>
        </div>
        <div class="group-intro-visual">
          <div class="corporate-badge-card">
            <i class="fa-solid fa-building-columns gold-text"></i>
            <h3>Sécurité & Prestige</h3>
            <p>Notre force repose sur une double approche : explorer le monde en toute sérénité tout en sécurisant votre futur financier.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="SN Global Baltimore Headquarters" class="img-responsive rounded shadow">
        </div>
      </div>
    </section>

    <!-- business sectors stacked banners -->
    <section id="sectors-anchor" class="sectors-section section-padding bg-navy-light text-white">
      <div class="container text-center">
        <span class="badge badge-gold">Nos Filiales</span>
        <h2>Deux Pôles d'Excellence Dédiés</h2>
        <p class="section-desc text-muted">Explorez nos filiales spécialisées pour accéder aux simulateurs de tarifs et configurations personnalisées.</p>
        
        <div class="sectors-stack">
          
          <!-- Banner 1: Travel -->
          <div class="sector-banner travel-banner rounded shadow animate-fade-in">
            <div class="sector-banner-visual" style="background-image: url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80');"></div>
            <div class="sector-banner-text">
              <div class="sector-logo-wrapper">
                ${getTravelLogo('light', '300px')}
              </div>
              <p>L'univers du voyage réinventé. Nous organisons des séjours d'exception personnalisés à travers le monde : safaris de prestige au Kenya, échappées zen au Japon, détentes aux Maldives et séjours culturels.</p>
              <ul class="sector-bullet-points">
                <li><i class="fa-solid fa-compass gold-text"></i> Itinéraires dessinés à la main</li>
                <li><i class="fa-solid fa-hotel gold-text"></i> Hôtels & Resorts 5 étoiles partenaires</li>
                <li><i class="fa-solid fa-headset gold-text"></i> Conciergerie VIP disponible 24/7</li>
              </ul>
              <a href="#/travel" class="btn btn-gold">Accéder à SN Global Travel <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          
          <!-- Banner 2: Insurance -->
          <div class="sector-banner insurance-banner rounded shadow animate-fade-in">
            <div class="sector-banner-text">
              <div class="sector-logo-wrapper">
                ${getInsuranceLogo('light', '300px')}
              </div>
              <p>Votre bouclier de santé et de prévoyance aux États-Unis. Nous couvrons vos frais médicaux à l'étranger et sécurisons le patrimoine de votre famille avec des contrats d'assurance vie flexibles et clairs.</p>
              <ul class="sector-bullet-points">
                <li><i class="fa-solid fa-shield-heart gold-text"></i> Prise en charge frais médicaux urgences</li>
                <li><i class="fa-solid fa-calculator gold-text"></i> Simulateur de prime instantané en ligne</li>
                <li><i class="fa-solid fa-scale-balanced gold-text"></i> Conformité légale complète RGPD/CCPA</li>
              </ul>
              <a href="#/insurance" class="btn btn-outline-white">Accéder à SN Global Insurance <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="sector-banner-visual" style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80');"></div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Trust indicators / location section -->
    <section class="trust-banner section-padding">
      <div class="container text-center">
        <h2>Un Groupe Ancré dans l'Est Américain</h2>
        <p class="section-desc">Depuis notre centre opérationnel de Baltimore, nous pilotons la logistique internationale et gérons le support client en français et anglais.</p>
        <div class="grid grid-3 holding-features">
          <div class="feature-item">
            <i class="fa-solid fa-landmark gold-text"></i>
            <h3>Crédibilité Institutionnelle</h3>
            <p>Holding enregistrée et régie selon les lois corporatives du Maryland aux États-Unis.</p>
          </div>
          <div class="feature-item">
            <i class="fa-solid fa-globe gold-text"></i>
            <h3>Portée Internationale</h3>
            <p>Présence globale avec des partenaires exclusifs dans plus de 45 pays pour le voyage et l'assistance médicale.</p>
          </div>
          <div class="feature-item">
            <i class="fa-solid fa-ticket-simple gold-text"></i>
            <h3>Ticketing & Support Intégrés</h3>
            <p>Suivi en temps réel de vos demandes d'assurances ou de devis via notre système de support en ligne.</p>
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
