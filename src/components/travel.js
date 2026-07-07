import { destinations } from '../data/destinations.js';
import { currentLang, t } from '../utils/i18n.js';

export function renderTravel(container) {
  const isEn = currentLang === 'en';

  const text = {
    badgeHero: { en: "Bespoke Experiences", fr: "Bespoke Experiences" },
    titleHero: { en: "Bespoke Travel Creator", fr: "Créateur de Voyages sur Mesure" },
    subHero: { en: "Design the exceptional with our hand-crafted prestige itineraries.", fr: "Concevez l'exceptionnel avec nos itinéraires de prestige cousus main." },
    btnPlan: { en: "Plan a project", fr: "Planifier un projet" },
    btnDiscover: { en: "Discover destinations", fr: "Découvrir les destinations" },
    titleCatalog: { en: "Explore our Inspirations", fr: "Explorez nos Inspirations" },
    descCatalog: { en: "Filter our suggestions by region, experience type, or budget to initiate your custom project.", fr: "Filtrez nos suggestions par région, type d'expérience ou budget pour initier votre projet personnalisé." },
    
    filterRegion: { en: "Region", fr: "Région" },
    allRegions: { en: "All regions", fr: "Toutes les régions" },
    regionEurope: { en: "Europe", fr: "Europe" },
    regionAsia: { en: "Asia", fr: "Asie" },
    regionAmericas: { en: "Americas", fr: "Amériques" },
    regionAfrica: { en: "Africa", fr: "Afrique" },

    filterExperience: { en: "Experience", fr: "Expérience" },
    allExperiences: { en: "All experience types", fr: "Tous types d'expériences" },
    expAdventure: { en: "Adventure & Nature", fr: "Aventure & Nature" },
    expRelax: { en: "Relaxation & Wellness", fr: "Détente & Bien-être" },
    expCulture: { en: "Culture & History", fr: "Culture & Histoire" },
    expLuxury: { en: "Luxury & Gastronomy", fr: "Luxe & Gastronomie" },

    filterBudget: { en: "Budget Category", fr: "Catégorie de Budget" },
    allBudgets: { en: "All budgets", fr: "Tous budgets" },
    budEco: { en: "Discovery (< $3,000)", fr: "Découverte (< 3 000 $)" },
    budStd: { en: "Selection ($3,000 - $6,000)", fr: "Sélection (3 000 $ - 6 000 $)" },
    budPrem: { en: "Prestige (> $6,000)", fr: "Prestige (> 6 000 $)" },

    btnMore: { en: "Learn more", fr: "En savoir plus" },
    perkTitle: { en: "Included Prestigious Benefits", fr: "Prestations de Prestige Incluses" },
    priceLabel: { en: "Estimated Rate:", fr: "Tarif estimatif :" },
    btnReserve: { en: "Plan this bespoke stay", fr: "Planifier ce séjour sur mesure" },

    badgeQuote: { en: "Free quote in 48h", fr: "Devis gratuit en 48h" },
    titlePlanner: { en: "Bring your travel dreams to life", fr: "Donnez vie à vos envies d'évasion" },
    descPlanner: { en: "Fill out our travel planner in 3 simple steps. A dedicated SN Global Travel designer will study your request from our offices and design a unique itinerary tailored to your desires.", fr: "Remplissez notre configurateur de voyage en 3 étapes simples. Un concepteur SN Global Travel dédié étudiera votre demande depuis nos bureaux et concevra un itinéraire unique adapté à vos envies." },
    perk1: { en: "100% customizable personalized itinerary", fr: "Itinéraire personnalisé 100% modifiable" },
    perk2: { en: "Exclusive selection of hotels and activities", fr: "Sélection d'hôtels et d'activités exclusive" },
    perk3: { en: "24/7 bilingual assistance included", fr: "Assistance francophone 24h/7j incluse" },

    formHeader: { en: "Travel Planner", fr: "Créateur de Voyage" },
    step1Title: { en: "Step 1: Destination & Duration", fr: "Étape 1 : Destination & Durée" },
    where: { en: "Where do you want to go?", fr: "Où souhaitez-vous aller ?" },
    placeholderWhere: { en: "e.g., Tokyo, Kenya, American West...", fr: "Ex: Tokyo, Kenya, Ouest Américain..." },
    duration: { en: "Estimated duration of stay", fr: "Durée estimée du séjour" },
    dur1w: { en: "1 week", fr: "1 semaine" },
    dur10d: { en: "10 days", fr: "10 jours" },
    dur2w: { en: "2 weeks", fr: "2 semaines" },
    durMore: { en: "More than 2 weeks", fr: "Plus de 2 semaines" },
    btnContinue: { en: "Continue", fr: "Continuer" },

    step2Title: { en: "Step 2: Travelers & Budget", fr: "Étape 2 : Voyageurs & Budget" },
    participants: { en: "Number of participants", fr: "Nombre de participants" },
    budgetLabel: { en: "Travel style & Budget per person", fr: "Style de voyage & Budget par personne" },
    btnBack: { en: "Back", fr: "Retour" },

    step3Title: { en: "Step 3: Your Information", fr: "Étape 3 : Vos Informations" },
    fullName: { en: "Full Name", fr: "Nom complet" },
    fullNamePlaceholder: { en: "e.g., John Doe", fr: "Ex: Jean Dupont" },
    email: { en: "Email Address", fr: "Adresse e-mail" },
    emailPlaceholder: { en: "e.g., john.doe@email.com", fr: "Ex: jean.dupont@email.com" },
    notes: { en: "Additional notes / Special requests", fr: "Notes complémentaires / Demandes spécifiques" },
    notesPlaceholder: { en: "e.g., 5-star hotels only, honeymoon, direct flights...", fr: "Ex: Hôtels 5 étoiles uniquement, voyage de noces, vols directs..." },
    btnSubmit: { en: "Request my Quote", fr: "Demander mon Devis" },

    successTitle: { en: "Request Registered!", fr: "Demande Enregistrée !" },
    successDesc: { en: "Your custom travel project has been successfully transmitted to our designers based in Baltimore.", fr: "Votre projet de voyage sur mesure a bien été transmis à nos concepteurs basés à Baltimore." },
    refTicket: { en: "YOUR TICKET REFERENCE:", fr: "VOTRE RÉFÉRENCE DE TICKET :" },
    successFollow: { en: "Keep this code safe. You can use it in the 'Support' section at the top of the page to track your quote's progress.", fr: "Conservez précieusement ce code. Vous pouvez l'utiliser dans la section \"Support\" en haut de la page pour suivre l'avancée de votre devis." },
    btnReset: { en: "Plan another project", fr: "Faire un autre projet" },
    
    emptyResultsTitle: { en: "No matching destinations", fr: "Aucune destination correspondante" },
    emptyResultsDesc: { en: "Adjust your filters to discover other exceptional travel suggestions.", fr: "Ajustez vos filtres pour découvrir d'autres suggestions de séjours d'exception." }
  };

  container.innerHTML = `
    <!-- Travel Hero -->
    <section class="travel-hero">
      <div class="travel-hero-bg"></div>
      <div class="travel-hero-overlay"></div>
      <div class="container travel-hero-content text-center">
        <span class="badge badge-gold">${t(text.badgeHero)}</span>
        <h1>${t(text.titleHero)}</h1>
        <p class="subtitle">${t(text.subHero)}</p>
        <div class="hero-actions">
          <a href="#planner-anchor" class="btn btn-gold btn-lg">${t(text.btnPlan)}</a>
          <a href="#catalog-anchor" class="btn btn-outline-white btn-lg">${t(text.btnDiscover)}</a>
        </div>
      </div>
    </section>

    <!-- Search Engine & Catalog Section -->
    <section id="catalog-anchor" class="catalog-section section-padding">
      <div class="container text-center">
        <h2>${t(text.titleCatalog)}</h2>
        <p class="section-desc">${t(text.descCatalog)}</p>
        
        <!-- Filter Controls -->
        <div class="filter-wrapper">
          <div class="filter-group">
            <label for="filter-region"><i class="fa-solid fa-earth-americas gold-text"></i> ${t(text.filterRegion)}</label>
            <select id="filter-region" class="filter-select">
              <option value="all">${t(text.allRegions)}</option>
              <option value="Europe">${t(text.regionEurope)}</option>
              <option value="Asie">${t(text.regionAsia)}</option>
              <option value="Amériques">${t(text.regionAmericas)}</option>
              <option value="Afrique">${t(text.regionAfrica)}</option>
            </select>
          </div>
          
          <div class="filter-group">
            <label for="filter-experience"><i class="fa-solid fa-compass gold-text"></i> ${t(text.filterExperience)}</label>
            <select id="filter-experience" class="filter-select">
              <option value="all">${t(text.allExperiences)}</option>
              <option value="aventure">${t(text.expAdventure)}</option>
              <option value="detente">${t(text.expRelax)}</option>
              <option value="culture">${t(text.expCulture)}</option>
              <option value="luxe">${t(text.expLuxury)}</option>
            </select>
          </div>
          
          <div class="filter-group">
            <label for="filter-budget"><i class="fa-solid fa-coins gold-text"></i> ${t(text.filterBudget)}</label>
            <select id="filter-budget" class="filter-select">
              <option value="all">${t(text.allBudgets)}</option>
              <option value="economique">${t(text.budEco)}</option>
              <option value="standard">${t(text.budStd)}</option>
              <option value="premium">${t(text.budPrem)}</option>
            </select>
          </div>
        </div>
        
        <div class="results-info text-left">
          <p id="catalog-counter"><strong class="gold-text">${destinations.length}</strong> ${isEn ? 'destinations found' : 'destinations trouvées'}</p>
        </div>

        <!-- Destinations Grid -->
        <div class="destinations-grid" id="destinations-grid-container">
          <!-- Dynamically filled -->
        </div>
      </div>
    </section>

    <!-- Custom Trip Planner Form (Lead Conversion) -->
    <section id="planner-anchor" class="planner-section section-padding bg-navy-light text-white">
      <div class="container grid grid-2 align-center">
        <div class="planner-info">
          <span class="badge badge-gold">${t(text.badgeQuote)}</span>
          <h2>${t(text.titlePlanner)}</h2>
          <p>${t(text.descPlanner)}</p>
          <div class="planner-perks">
            <div class="perk-item">
              <i class="fa-solid fa-circle-check gold-text"></i>
              <span>${t(text.perk1)}</span>
            </div>
            <div class="perk-item">
              <i class="fa-solid fa-circle-check gold-text"></i>
              <span>${t(text.perk2)}</span>
            </div>
            <div class="perk-item">
              <i class="fa-solid fa-circle-check gold-text"></i>
              <span>${t(text.perk3)}</span>
            </div>
          </div>
        </div>
        
        <div class="planner-form-card">
          <div class="planner-form-header">
            <h3>${t(text.formHeader)}</h3>
            <div class="form-steps-indicator">
              <span class="step-dot active" data-step="1">1</span>
              <span class="step-dot" data-step="2">2</span>
              <span class="step-dot" data-step="3">3</span>
            </div>
          </div>
          
          <form id="travel-planner-form">
            <!-- Step 1: Destination -->
            <div class="planner-step-panel active" id="step-panel-1">
              <h4>${t(text.step1Title)}</h4>
              <div class="form-group">
                <label for="plan-destination">${t(text.where)}</label>
                <input type="text" id="plan-destination" placeholder="${t(text.placeholderWhere)}" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="plan-duration">${t(text.duration)}</label>
                <select id="plan-duration" class="form-control">
                  <option value="7">${t(text.dur1w)}</option>
                  <option value="10" selected>${t(text.dur10d)}</option>
                  <option value="14">${t(text.dur2w)}</option>
                  <option value="21">${t(text.durMore)}</option>
                </select>
              </div>
              <button type="button" class="btn btn-gold btn-block btn-next-step" data-next="2">${t(text.btnContinue)} <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <!-- Step 2: Travellers & Budget -->
            <div class="planner-step-panel" id="step-panel-2">
              <h4>${t(text.step2Title)}</h4>
              <div class="form-group">
                <label for="plan-travellers">${t(text.participants)}</label>
                <input type="number" id="plan-travellers" min="1" max="50" value="2" class="form-control" required>
              </div>
              <div class="form-group">
                <label>${t(text.budgetLabel)}</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input type="radio" name="plan-budget" value="economique" checked>
                    <span>${t(text.budEco)}</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="plan-budget" value="standard">
                    <span>${t(text.budStd)}</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="plan-budget" value="premium">
                    <span>${t(text.budPrem)}</span>
                  </label>
                </div>
              </div>
              <div class="form-navigation-buttons">
                <button type="button" class="btn btn-outline-white btn-prev-step" data-prev="1"><i class="fa-solid fa-arrow-left"></i> ${t(text.btnBack)}</button>
                <button type="button" class="btn btn-gold btn-next-step" data-next="3">${t(text.btnContinue)} <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
            
            <!-- Step 3: Contact details -->
            <div class="planner-step-panel" id="step-panel-3">
              <h4>${t(text.step3Title)}</h4>
              <div class="form-group">
                <label for="plan-name">${t(text.fullName)}</label>
                <input type="text" id="plan-name" placeholder="${t(text.fullNamePlaceholder)}" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="plan-email">${t(text.email)}</label>
                <input type="email" id="plan-email" placeholder="${t(text.emailPlaceholder)}" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="plan-notes">${t(text.notes)}</label>
                <textarea id="plan-notes" placeholder="${t(text.notesPlaceholder)}" class="form-control" rows="3"></textarea>
              </div>
              <div class="form-navigation-buttons">
                <button type="button" class="btn btn-outline-white btn-prev-step" data-prev="2"><i class="fa-solid fa-arrow-left"></i> ${t(text.btnBack)}</button>
                <button type="submit" class="btn btn-gold">${t(text.btnSubmit)} <i class="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </form>
          
          <!-- Success message -->
          <div id="planner-success-msg" class="planner-success-container hidden">
            <i class="fa-solid fa-circle-check success-icon"></i>
            <h3>${t(text.successTitle)}</h3>
            <p>${t(text.successDesc)}</p>
            <div class="ticket-info-box">
              <span class="lbl">${t(text.refTicket)}</span>
              <span class="val" id="planner-ticket-id">SN-TRVL-XXXX</span>
            </div>
            <p class="info-followup">${t(text.successFollow)}</p>
            <button id="btn-reset-planner" class="btn btn-gold btn-sm">${t(text.btnReset)}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Detail Modal Dialog for Destinations -->
    <div id="destination-modal" class="modal">
      <div class="modal-content destination-modal-content">
        <span class="modal-close" id="close-dest-modal">&times;</span>
        <div id="modal-dest-details">
          <!-- Dynamically filled on click -->
        </div>
      </div>
    </div>
  `;

  // Render destinations cards
  renderDestinations(destinations);

  // Setup Catalog Filter Event Listeners
  const selectRegion = document.getElementById('filter-region');
  const selectExperience = document.getElementById('filter-experience');
  const selectBudget = document.getElementById('filter-budget');

  function applyFilters() {
    const regionVal = selectRegion.value;
    const expVal = selectExperience.value;
    const budgetVal = selectBudget.value;

    const filtered = destinations.filter(dest => {
      // Keep internal tags comparison, but display translates
      const matchRegion = regionVal === 'all' || dest.region === regionVal;
      const matchExp = expVal === 'all' || dest.experienceType === expVal;
      const matchBudget = budgetVal === 'all' || dest.priceRange === budgetVal;
      return matchRegion && matchExp && matchBudget;
    });

    renderDestinations(filtered);
    
    // Update counter
    const counter = document.getElementById('catalog-counter');
    const cLabel = isEn ? 'destination(s) found' : `destination${filtered.length > 1 ? 's' : ''} trouvée${filtered.length > 1 ? 's' : ''}`;
    counter.innerHTML = `<strong class="gold-text">${filtered.length}</strong> ${cLabel}`;
  }

  selectRegion.addEventListener('change', applyFilters);
  selectExperience.addEventListener('change', applyFilters);
  selectBudget.addEventListener('change', applyFilters);

  // Modal Dialog handling
  const destModal = document.getElementById('destination-modal');
  const closeDestBtn = document.getElementById('close-dest-modal');

  closeDestBtn.addEventListener('click', () => {
    destModal.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target === destModal) {
      destModal.classList.remove('active');
    }
  });

  // Trip Planner multi-step form handling
  setupPlannerForm();
  
  // Function to render destinations list
  function renderDestinations(items) {
    const gridContainer = document.getElementById('destinations-grid-container');
    if (items.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-results-box">
          <i class="fa-solid fa-hourglass-empty"></i>
          <h3>${t(text.emptyResultsTitle)}</h3>
          <p>${t(text.emptyResultsDesc)}</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = items.map(dest => `
      <div class="destination-card animate-fade-in" data-id="${dest.id}">
        <div class="card-img-wrapper">
          <img src="${dest.image}" alt="${t(dest.name)}" loading="lazy">
          <span class="card-tag card-tag-region">${t(dest.region === 'Afrique' ? {en: 'Africa', fr: 'Afrique'} : dest.region === 'Asie' ? {en: 'Asia', fr: 'Asie'} : dest.region === 'Europe' ? {en: 'Europe', fr: 'Europe'} : {en: 'Americas', fr: 'Amériques'})}</span>
          <span class="card-tag card-tag-duration"><i class="fa-regular fa-clock"></i> ${t(dest.duration)}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${t(dest.name)}</h3>
          <p class="card-desc">${t(dest.shortDesc)}</p>
          <div class="card-footer">
            <span class="card-price">${t(dest.priceText)}</span>
            <button class="btn btn-gold btn-sm btn-view-dest" data-id="${dest.id}">${t(text.btnMore)}</button>
          </div>
        </div>
      </div>
    `).join('');

    // Hook details button clicks
    document.querySelectorAll('.btn-view-dest, .destination-card').forEach(elem => {
      elem.addEventListener('click', function(e) {
        if (this.classList.contains('destination-card') && e.target.classList.contains('btn-view-dest')) {
          return;
        }
        
        const id = this.getAttribute('data-id');
        const dest = items.find(d => d.id === id) || destinations.find(d => d.id === id);
        if (dest) {
          openDestinationDetails(dest);
        }
      });
    });
  }

  function openDestinationDetails(dest) {
    const modal = document.getElementById('destination-modal');
    const detailsContainer = document.getElementById('modal-dest-details');
    
    detailsContainer.innerHTML = `
      <div class="dest-modal-layout">
        <div class="dest-modal-img" style="background-image: url('${dest.image}');">
          <div class="modal-badge-group">
            <span class="badge badge-gold">${t(dest.region === 'Afrique' ? {en: 'Africa', fr: 'Afrique'} : dest.region === 'Asie' ? {en: 'Asia', fr: 'Asie'} : dest.region === 'Europe' ? {en: 'Europe', fr: 'Europe'} : {en: 'Americas', fr: 'Amériques'})}</span>
            <span class="badge badge-white">${t(dest.duration)}</span>
          </div>
        </div>
        <div class="dest-modal-text">
          <h2>${t(dest.name)}</h2>
          <h4 class="dest-country-subtitle"><i class="fa-solid fa-map-pin gold-text"></i> ${t(dest.country)}</h4>
          <p class="dest-long-desc">${t(dest.longDesc)}</p>
          
          <h3>${t(text.perkTitle)}</h3>
          <ul class="dest-perk-list">
            ${dest.highlights.map(h => `<li><i class="fa-solid fa-circle-check gold-text"></i> <span>${t(h)}</span></li>`).join('')}
          </ul>
          
          <div class="dest-modal-footer">
            <div class="price-box">
              <span class="price-lbl">${t(text.priceLabel)}</span>
              <span class="price-val">${t(dest.priceText)}</span>
            </div>
            <button class="btn btn-gold" id="btn-modal-reserve">${t(text.btnReserve)}</button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');

    // Link reserve button to planner form
    document.getElementById('btn-modal-reserve').addEventListener('click', () => {
      modal.classList.remove('active');
      
      const destInput = document.getElementById('plan-destination');
      if (destInput) {
        destInput.value = `${t(dest.name)} (${t(dest.country)})`;
        const plannerSection = document.getElementById('planner-anchor');
        plannerSection.scrollIntoView({ behavior: 'smooth' });
        destInput.focus();
      }
    });
  }

  // Handler for the Multi-Step form
  function setupPlannerForm() {
    const form = document.getElementById('travel-planner-form');
    const successMsg = document.getElementById('planner-success-msg');
    const nextBtns = document.querySelectorAll('.btn-next-step');
    const prevBtns = document.querySelectorAll('.btn-prev-step');
    const resetBtn = document.getElementById('btn-reset-planner');

    nextBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const nextStep = btn.getAttribute('data-next');
        
        if (nextStep === '2') {
          const destField = document.getElementById('plan-destination');
          if (!destField.value.trim()) {
            destField.reportValidity();
            return;
          }
        }
        
        if (nextStep === '3') {
          const travellers = document.getElementById('plan-travellers');
          if (!travellers.value || travellers.value < 1) {
            travellers.reportValidity();
            return;
          }
        }

        showPlannerStep(nextStep);
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const prevStep = btn.getAttribute('data-prev');
        showPlannerStep(prevStep);
      });
    });

    function showPlannerStep(stepNum) {
      document.querySelectorAll('.planner-step-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(`step-panel-${stepNum}`).classList.add('active');
      
      document.querySelectorAll('.step-dot').forEach(dot => {
        const dotStep = dot.getAttribute('data-step');
        if (dotStep === stepNum) {
          dot.classList.add('active');
        } else if (dotStep < stepNum) {
          dot.classList.add('completed');
          dot.classList.remove('active');
        } else {
          dot.classList.remove('active', 'completed');
        }
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const destination = document.getElementById('plan-destination').value.trim();
      const durationVal = document.getElementById('plan-duration').value;
      const travellers = document.getElementById('plan-travellers').value;
      const budget = form.elements['plan-budget'].value;
      const name = document.getElementById('plan-name').value.trim();
      const emailVal = document.getElementById('plan-email').value.trim();
      const notes = document.getElementById('plan-notes').value.trim();
      
      const ticketRand = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `SN-TRVL-${ticketRand}`;
      
      const newTicket = {
        id: ticketId,
        name: name,
        email: emailVal,
        service: 'travel',
        subject: `Bespoke Trip Quote - ${destination}`,
        message: `Bespoke travel project for ${travellers} participant(s) to ${destination}. Duration: ${durationVal} days. Budget style: ${budget}. Notes: ${notes}`,
        status: 'Nouveau',
        date: new Date().toLocaleString(isEn ? 'en-US' : 'fr-FR'),
        details: {
          destination,
          duration: durationVal,
          travellers,
          budget,
          notes
        }
      };
      
      const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
      tickets.push(newTicket);
      localStorage.setItem('sn_global_tickets', JSON.stringify(tickets));
      
      form.classList.add('hidden');
      document.getElementById('planner-ticket-id').innerText = ticketId;
      successMsg.classList.remove('hidden');
      document.querySelector('.form-steps-indicator').style.display = 'none';
    });

    resetBtn.addEventListener('click', () => {
      form.reset();
      form.classList.remove('hidden');
      successMsg.classList.add('hidden');
      document.querySelector('.form-steps-indicator').style.display = 'flex';
      showPlannerStep('1');
    });
  }

  window.scrollTo(0, 0);
}
