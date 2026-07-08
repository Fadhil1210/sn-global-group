import { currentLang, t } from '../utils/i18n.js';

export function renderLegal(container) {
  const isEn = currentLang === 'en';

  const text = {
    badge: { en: "Legal Compliance", fr: "Conformité Légale" },
    title: { en: "Legal Notice", fr: "Mentions Légales" },
    subtitle: { en: "Information about the publisher, host, and terms of service.", fr: "Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation." },
    
    secPubTitle: { en: "1. Website Publisher", fr: "1. Éditeur du Site" },
    secPubText: { 
      en: "This website is the property of <strong>SN Global Group LLC</strong>, an American limited liability company registered in Baltimore, Maryland, USA.<br><strong>Headquarters:</strong> 100 N Charles St, Baltimore, MD 21201, USA.<br><strong>Contact email:</strong> contact@snglobalgroup.online.<br><strong>Publishing Director:</strong> Corporate Board of Directors.", 
      fr: "Ce site internet est la propriété exclusive de <strong>SN Global Group LLC</strong>, société à responsabilité limitée américaine enregistrée à Baltimore, Maryland, États-Unis.<br><strong>Siège social :</strong> 100 N Charles St, Baltimore, MD 21201, USA.<br><strong>Contact e-mail :</strong> contact@snglobalgroup.online.<br><strong>Directeur de la publication :</strong> Conseil d'administration de la holding."
    },
    
    secHostTitle: { en: "2. Website Hosting", fr: "2. Hébergement du Site" },
    secHostText: { 
      en: "The website is hosted by <strong>Render</strong> (Render Services Inc.), located at 548 Market St, Suite 78373, San Francisco, CA 94104, USA. Website: https://render.com.", 
      fr: "Le site internet est hébergé par la société <strong>Render</strong> (Render Services Inc.), située à 548 Market St, Suite 78373, San Francisco, CA 94104, États-Unis. Site Internet : https://render.com."
    },
    
    secPropTitle: { en: "3. Intellectual Property", fr: "3. Propriété Intellectuelle" },
    secPropText: { 
      en: "All brands, logos, graphics, images, and text contained on this website are protected under international intellectual property laws. Any reproduction, distribution, or modifications without prior written authorization from SN Global Group LLC is strictly prohibited.", 
      fr: "L'ensemble des marques, logos, visuels, textes et structures présentés sur ce site est protégé par les lois internationales sur la propriété intellectuelle. Toute reproduction, distribution ou modification sans autorisation écrite préalable de SN Global Group LLC est strictement interdite."
    }
  };

  container.innerHTML = `
    <section class="about-hero">
      <div class="container text-center">
        <span class="badge badge-gold">${t(text.badge)}</span>
        <h1>${t(text.title)}</h1>
        <p class="subtitle">${t(text.subtitle)}</p>
      </div>
    </section>
    
    <section class="section-padding bg-light">
      <div class="container container-narrow typography text-left">
        <h2>${t(text.secPubTitle)}</h2>
        <p>${t(text.secPubText)}</p>
        
        <div class="sim-divider" style="margin: 30px 0;"></div>
        
        <h2>${t(text.secHostTitle)}</h2>
        <p>${t(text.secHostText)}</p>
        
        <div class="sim-divider" style="margin: 30px 0;"></div>
        
        <h2>${t(text.secPropTitle)}</h2>
        <p>${t(text.secPropText)}</p>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
}

export function renderPrivacy(container) {
  const isEn = currentLang === 'en';

  const text = {
    badge: { en: "Data Protection", fr: "Protection des Données" },
    title: { en: "Privacy Policy", fr: "Politique de Confidentialité" },
    subtitle: { en: "How we collect, store, and process your simulation and ticket data.", fr: "Comment nous collectons, stockons et traitons vos données de simulation et de tickets." },
    
    secDataTitle: { en: "1. Data Collection & Local Storage", fr: "1. Collecte des Données & Stockage Local" },
    secDataText: { 
      en: "In compliance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), we inform you that this website uses the browser's <strong>Local Storage</strong> (localStorage) to temporarily save your simulations (insurance quotes, travel projects) and support tickets history. This data is stored strictly in your browser and is not uploaded to third-party databases without your request.", 
      fr: "En conformité avec le Règlement Général sur la Protection des Données (RGPD) et le California Consumer Privacy Act (CCPA), nous vous informons que ce site utilise le <strong>stockage local</strong> (localStorage) de votre navigateur pour sauvegarder temporairement vos simulations (tarifs d'assurances, projets de voyages) et l'historique de vos tickets de support. Ces données restent sur votre appareil et ne sont pas transmises à des tiers sans votre consentement."
    },
    
    secPurpTitle: { en: "2. Purpose of Processing", fr: "2. Finalités du Traitement" },
    secPurpText: { 
      en: "The data entered in the simulators is processed solely to provide price estimations and allow you to track your support ticket request progress directly on this browser.", 
      fr: "Les données saisies dans les différents formulaires et simulateurs sont traitées uniquement pour générer des estimations tarifaires et vous permettre de suivre vos demandes d'informations sous forme de tickets de support."
    },
    
    secRightsTitle: { en: "3. Your Rights", fr: "3. Vos Droits" },
    secRightsText: { 
      en: "You hold the right to access, rectify, or delete your personal data. You can erase all data stored by this website at any time by clearing your browser cache/cookies or by deleting your tickets history locally.", 
      fr: "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Vous pouvez effacer toutes les données stockées par ce site à tout moment en vidant le cache et l'historique de votre navigateur, ou en supprimant vos tickets dans votre espace client."
    }
  };

  container.innerHTML = `
    <section class="about-hero">
      <div class="container text-center">
        <span class="badge badge-gold">${t(text.badge)}</span>
        <h1>${t(text.title)}</h1>
        <p class="subtitle">${t(text.subtitle)}</p>
      </div>
    </section>
    
    <section class="section-padding bg-light">
      <div class="container container-narrow typography text-left">
        <h2>${t(text.secDataTitle)}</h2>
        <p>${t(text.secDataText)}</p>
        
        <div class="sim-divider" style="margin: 30px 0;"></div>
        
        <h2>${t(text.secPurpTitle)}</h2>
        <p>${t(text.secPurpText)}</p>
        
        <div class="sim-divider" style="margin: 30px 0;"></div>
        
        <h2>${t(text.secRightsTitle)}</h2>
        <p>${t(text.secRightsText)}</p>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
}

export function renderCookies(container) {
  const isEn = currentLang === 'en';

  const text = {
    badge: { en: "Browser Storage", fr: "Stockage Navigateur" },
    title: { en: "Cookie Management", fr: "Gestion des Cookies" },
    subtitle: { en: "Detailed information about cookies and local storage used on our site.", fr: "Informations détaillées sur l'utilisation des cookies et du stockage local." },
    
    secUseTitle: { en: "1. Use of Cookies", fr: "1. Utilisation des Cookies" },
    secUseText: { 
      en: "Our website does not use tracking, advertising, or marketing cookies. We do not track your browsing history across other sites and do not monetize any user data.", 
      fr: "Notre site internet n'utilise aucun traceur ni cookie publicitaire ou de ciblage marketing. Nous ne suivons pas votre navigation en dehors de ce site et ne revendons aucune information."
    },
    
    secFuncTitle: { en: "2. Functional Local Storage", fr: "2. Stockage Technique Fonctionnel" },
    secFuncText: { 
      en: "We use browser local storage (localStorage) exclusively to store your preferred language setting (English or French) and your support tickets references so that you do not lose them upon refreshing the page.", 
      fr: "Nous utilisons uniquement les fonctionnalités de stockage de votre navigateur (localStorage) pour conserver vos préférences de langue (Anglais ou Français) et les références de vos demandes de support, afin de ne pas les perdre en actualisant la page."
    }
  };

  container.innerHTML = `
    <section class="about-hero">
      <div class="container text-center">
        <span class="badge badge-gold">${t(text.badge)}</span>
        <h1>${t(text.title)}</h1>
        <p class="subtitle">${t(text.subtitle)}</p>
      </div>
    </section>
    
    <section class="section-padding bg-light">
      <div class="container container-narrow typography text-left">
        <h2>${t(text.secUseTitle)}</h2>
        <p>${t(text.secUseText)}</p>
        
        <div class="sim-divider" style="margin: 30px 0;"></div>
        
        <h2>${t(text.secFuncTitle)}</h2>
        <p>${t(text.secFuncText)}</p>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
}
