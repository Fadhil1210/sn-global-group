import { destinations } from '../data/destinations.js';

export function renderTravel(container) {
  container.innerHTML = `
    <!-- Travel Hero -->
    <section class="travel-hero">
      <div class="travel-hero-bg"></div>
      <div class="travel-hero-overlay"></div>
      <div class="container travel-hero-content text-center">
        <span class="badge badge-gold">Bespoke Experiences</span>
        <h1>Créateur de Voyages sur Mesure</h1>
        <p class="subtitle">Concevez l'exceptionnel avec nos itinéraires de prestige cousus main.</p>
        <div class="hero-actions">
          <a href="#planner-anchor" class="btn btn-gold btn-lg">Planifier un projet</a>
          <a href="#catalog-anchor" class="btn btn-outline-white btn-lg">Découvrir les destinations</a>
        </div>
      </div>
    </section>

    <!-- Search Engine & Catalog Section -->
    <section id="catalog-anchor" class="catalog-section section-padding">
      <div class="container text-center">
        <h2>Explorez nos Inspirations</h2>
        <p class="section-desc">Filtrez nos suggestions par région, type d'expérience ou budget pour initier votre projet personnalisé.</p>
        
        <!-- Filter Controls -->
        <div class="filter-wrapper">
          <div class="filter-group">
            <label for="filter-region"><i class="fa-solid fa-earth-americas gold-text"></i> Région</label>
            <select id="filter-region" class="filter-select">
              <option value="all">Toutes les régions</option>
              <option value="Europe">Europe</option>
              <option value="Asie">Asie</option>
              <option value="Amériques">Amériques</option>
              <option value="Afrique">Afrique</option>
            </select>
          </div>
          
          <div class="filter-group">
            <label for="filter-experience"><i class="fa-solid fa-compass gold-text"></i> Expérience</label>
            <select id="filter-experience" class="filter-select">
              <option value="all">Tous types d'expériences</option>
              <option value="aventure">Aventure & Nature</option>
              <option value="detente">Détente & Bien-être</option>
              <option value="culture">Culture & Histoire</option>
              <option value="luxe">Luxe & Gastronomie</option>
            </select>
          </div>
          
          <div class="filter-group">
            <label for="filter-budget"><i class="fa-solid fa-coins gold-text"></i> Catégorie de Budget</label>
            <select id="filter-budget" class="filter-select">
              <option value="all">Tous budgets</option>
              <option value="economique">Découverte (Économique)</option>
              <option value="standard">Sélection (Standard)</option>
              <option value="premium">Prestige (Premium)</option>
            </select>
          </div>
        </div>
        
        <div class="results-info text-left">
          <p id="catalog-counter"><strong class="gold-text">${destinations.length}</strong> destinations trouvées</p>
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
          <span class="badge badge-gold">Devis gratuit en 48h</span>
          <h2>Donnez vie à vos envies d'évasion</h2>
          <p>Remplissez notre configurateur de voyage en 3 étapes simples. Un concepteur SN Global Travel dédié étudiera votre demande depuis nos bureaux et concevra un itinéraire unique adapté à vos envies.</p>
          <div class="planner-perks">
            <div class="perk-item">
              <i class="fa-solid fa-circle-check gold-text"></i>
              <span>Itinéraire personnalisé 100% modifiable</span>
            </div>
            <div class="perk-item">
              <i class="fa-solid fa-circle-check gold-text"></i>
              <span>Sélection d'hôtels et d'activités exclusive</span>
            </div>
            <div class="perk-item">
              <i class="fa-solid fa-circle-check gold-text"></i>
              <span>Assistance francophone 24h/7j incluse</span>
            </div>
          </div>
        </div>
        
        <div class="planner-form-card">
          <div class="planner-form-header">
            <h3>Créateur de Voyage</h3>
            <div class="form-steps-indicator">
              <span class="step-dot active" data-step="1">1</span>
              <span class="step-dot" data-step="2">2</span>
              <span class="step-dot" data-step="3">3</span>
            </div>
          </div>
          
          <form id="travel-planner-form">
            <!-- Step 1: Destination -->
            <div class="planner-step-panel active" id="step-panel-1">
              <h4>Étape 1 : Destination & Durée</h4>
              <div class="form-group">
                <label for="plan-destination">Où souhaitez-vous aller ?</label>
                <input type="text" id="plan-destination" placeholder="Ex: Tokyo, Kenya, Ouest Américain..." class="form-control" required>
              </div>
              <div class="form-group">
                <label for="plan-duration">Durée estimée du séjour</label>
                <select id="plan-duration" class="form-control">
                  <option value="7">1 semaine</option>
                  <option value="10" selected>10 jours</option>
                  <option value="14">2 semaines</option>
                  <option value="21">Plus de 2 semaines</option>
                </select>
              </div>
              <button type="button" class="btn btn-gold btn-block btn-next-step" data-next="2">Continuer <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <!-- Step 2: Travellers & Budget -->
            <div class="planner-step-panel" id="step-panel-2">
              <h4>Étape 2 : Voyageurs & Budget</h4>
              <div class="form-group">
                <label for="plan-travellers">Nombre de participants</label>
                <input type="number" id="plan-travellers" min="1" max="50" value="2" class="form-control" required>
              </div>
              <div class="form-group">
                <label>Style de voyage & Budget par personne</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input type="radio" name="plan-budget" value="economique" checked>
                    <span>Découverte (< 3000€)</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="plan-budget" value="standard">
                    <span>Sélection (3000€ - 6000€)</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="plan-budget" value="premium">
                    <span>Prestige (> 6000€)</span>
                  </label>
                </div>
              </div>
              <div class="form-navigation-buttons">
                <button type="button" class="btn btn-outline-white btn-prev-step" data-prev="1"><i class="fa-solid fa-arrow-left"></i> Retour</button>
                <button type="button" class="btn btn-gold btn-next-step" data-next="3">Continuer <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
            
            <!-- Step 3: Contact details -->
            <div class="planner-step-panel" id="step-panel-3">
              <h4>Étape 3 : Vos Informations</h4>
              <div class="form-group">
                <label for="plan-name">Nom complet</label>
                <input type="text" id="plan-name" placeholder="Ex: Jean Dupont" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="plan-email">Adresse e-mail</label>
                <input type="email" id="plan-email" placeholder="Ex: jean.dupont@email.com" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="plan-notes">Notes complémentaires / Demandes spécifiques</label>
                <textarea id="plan-notes" placeholder="Ex: Hôtels 5 étoiles uniquement, voyage de noces, vols directs..." class="form-control" rows="3"></textarea>
              </div>
              <div class="form-navigation-buttons">
                <button type="button" class="btn btn-outline-white btn-prev-step" data-prev="2"><i class="fa-solid fa-arrow-left"></i> Retour</button>
                <button type="submit" class="btn btn-gold">Demander mon Devis <i class="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </form>
          
          <!-- Success message -->
          <div id="planner-success-msg" class="planner-success-container hidden">
            <i class="fa-solid fa-circle-check success-icon"></i>
            <h3>Demande Enregistrée !</h3>
            <p>Votre projet de voyage sur mesure a bien été transmis à nos concepteurs basés à Baltimore.</p>
            <div class="ticket-info-box">
              <span class="lbl">VOTRE RÉFÉRENCE DE TICKET :</span>
              <span class="val" id="planner-ticket-id">SN-TRVL-XXXX</span>
            </div>
            <p class="info-followup">Conservez précieusement ce code. Vous pouvez l'utiliser dans la section "Support" en haut de la page pour suivre l'avancée de votre devis.</p>
            <button id="btn-reset-planner" class="btn btn-gold btn-sm">Faire un autre projet</button>
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
      const matchRegion = regionVal === 'all' || dest.region === regionVal;
      const matchExp = expVal === 'all' || dest.experienceType === expVal;
      const matchBudget = budgetVal === 'all' || dest.priceRange === budgetVal;
      return matchRegion && matchExp && matchBudget;
    });

    renderDestinations(filtered);
    
    // Update counter
    const counter = document.getElementById('catalog-counter');
    counter.innerHTML = `<strong class="gold-text">${filtered.length}</strong> destination${filtered.length > 1 ? 's' : ''} trouvée${filtered.length > 1 ? 's' : ''}`;
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
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Function to render destinations list
function renderDestinations(items) {
  const container = document.getElementById('destinations-grid-container');
  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-results-box">
        <i class="fa-solid fa-hourglass-empty"></i>
        <h3>Aucune destination correspondante</h3>
        <p>Ajustez vos filtres pour découvrir d'autres suggestions de séjours d'exception.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(dest => `
    <div class="destination-card animate-fade-in" data-id="${dest.id}">
      <div class="card-img-wrapper">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <span class="card-tag card-tag-region">${dest.region}</span>
        <span class="card-tag card-tag-duration"><i class="fa-regular fa-clock"></i> ${dest.duration}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${dest.name}</h3>
        <p class="card-desc">${dest.shortDesc}</p>
        <div class="card-footer">
          <span class="card-price">${dest.priceText}</span>
          <button class="btn btn-gold btn-sm btn-view-dest" data-id="${dest.id}">En savoir plus</button>
        </div>
      </div>
    </div>
  `).join('');

  // Hook details button clicks
  document.querySelectorAll('.btn-view-dest, .destination-card').forEach(elem => {
    elem.addEventListener('click', function(e) {
      // Prevent double triggers if clicking child button
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
          <span class="badge badge-gold">${dest.region}</span>
          <span class="badge badge-white">${dest.duration}</span>
        </div>
      </div>
      <div class="dest-modal-text">
        <h2>${dest.name}</h2>
        <h4 class="dest-country-subtitle"><i class="fa-solid fa-map-pin gold-text"></i> ${dest.country}</h4>
        <p class="dest-long-desc">${dest.longDesc}</p>
        
        <h3>Prestations de Prestige Incluses</h3>
        <ul class="dest-perk-list">
          ${dest.highlights.map(h => `<li><i class="fa-solid fa-circle-check gold-text"></i> <span>${h}</span></li>`).join('')}
        </ul>
        
        <div class="dest-modal-footer">
          <div class="price-box">
            <span class="price-lbl">Tarif estimatif :</span>
            <span class="price-val">${dest.priceText}</span>
          </div>
          <button class="btn btn-gold" id="btn-modal-reserve">Planifier ce séjour sur mesure</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');

  // Link reserve button to planner form
  document.getElementById('btn-modal-reserve').addEventListener('click', () => {
    modal.classList.remove('active');
    
    // Autofill planner destination field
    const destInput = document.getElementById('plan-destination');
    if (destInput) {
      destInput.value = `${dest.name} (${dest.country})`;
      
      // Focus planner and scroll to it
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

  // Next steps click
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextStep = btn.getAttribute('data-next');
      
      // Basic validation for step 1
      if (nextStep === '2') {
        const dest = document.getElementById('plan-destination');
        if (!dest.value.trim()) {
          dest.reportValidity();
          return;
        }
      }
      
      // Basic validation for step 2
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

  // Previous steps click
  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prevStep = btn.getAttribute('data-prev');
      showPlannerStep(prevStep);
    });
  });

  function showPlannerStep(stepNum) {
    // Hide all steps
    document.querySelectorAll('.planner-step-panel').forEach(panel => {
      panel.classList.remove('active');
    });
    // Show current step
    document.getElementById(`step-panel-${stepNum}`).classList.add('active');
    
    // Update dots indicator
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

  // Form submit handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const destination = document.getElementById('plan-destination').value.trim();
    const duration = document.getElementById('plan-duration').value;
    const travellers = document.getElementById('plan-travellers').value;
    const budget = form.elements['plan-budget'].value;
    const name = document.getElementById('plan-name').value.trim();
    const email = document.getElementById('plan-email').value.trim();
    const notes = document.getElementById('plan-notes').value.trim();
    
    // Generate unique support ticket number
    const ticketRand = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `SN-TRVL-${ticketRand}`;
    
    // Create new ticket object
    const newTicket = {
      id: ticketId,
      name: name,
      email: email,
      service: 'travel',
      subject: `Devis Voyage sur Mesure - ${destination}`,
      message: `Projet de voyage personnalisé pour ${travellers} participant(s) vers ${destination}. Durée estimée : ${duration} jours. Budget choisi : ${budget}. Notes : ${notes}`,
      status: 'Nouveau',
      date: new Date().toLocaleString('fr-FR'),
      details: {
        destination,
        duration,
        travellers,
        budget,
        notes
      }
    };
    
    // Retrieve existing tickets or initialize
    const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
    tickets.push(newTicket);
    localStorage.setItem('sn_global_tickets', JSON.stringify(tickets));
    
    // Show success view
    form.classList.add('hidden');
    document.getElementById('planner-ticket-id').innerText = ticketId;
    successMsg.classList.remove('hidden');
    
    // Update form indicator header
    document.querySelector('.form-steps-indicator').style.display = 'none';
  });

  // Reset planner to do another project
  resetBtn.addEventListener('click', () => {
    form.reset();
    form.classList.remove('hidden');
    successMsg.classList.add('hidden');
    document.querySelector('.form-steps-indicator').style.display = 'flex';
    showPlannerStep('1');
  });
}
