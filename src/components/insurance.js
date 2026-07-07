import { lifeInsurance, travelInsurance } from '../data/insurancePolicies.js';

export function renderInsurance(container) {
  container.innerHTML = `
    <!-- Insurance Hero -->
    <section class="insurance-hero">
      <div class="insurance-hero-bg"></div>
      <div class="insurance-hero-overlay"></div>
      <div class="container insurance-hero-content text-center">
        <span class="badge badge-gold">Prestige & Sécurité aux USA</span>
        <h1>Protégez votre Vie & Vos Voyages aux USA</h1>
        <p class="subtitle font-montserrat">Des garanties solides adaptées aux réalités du système américain, portées par l'excellence de Baltimore.</p>
        <div class="hero-actions">
          <a href="#simulator-anchor" class="btn btn-gold btn-lg">Simuler un devis immédiat</a>
          <a href="#policies-anchor" class="btn btn-outline-white btn-lg">Découvrir nos polices</a>
        </div>
      </div>
    </section>

    <!-- Policies Presentation Section -->
    <section id="policies-anchor" class="policies-section section-padding">
      <div class="container text-center">
        <span class="badge">Offres Pédagogiques</span>
        <h2>Des Garanties sur Mesure adaptées aux USA</h2>
        <p class="section-desc">Sélectionnez la protection adéquate selon votre projet d'expatriation ou votre voyage temporaire.</p>
        
        <!-- Toggle Tabs -->
        <div class="tabs-container">
          <button class="tab-btn active" id="tab-btn-travel" data-target="panel-travel">
            <i class="fa-solid fa-plane-departure"></i> Assurance Voyage Temporaire
          </button>
          <button class="tab-btn" id="tab-btn-life" data-target="panel-life">
            <i class="fa-solid fa-users-viewfinder"></i> Assurance Vie Expatrié USA
          </button>
        </div>
        
        <!-- Travel Insurance Panel -->
        <div class="tab-panel active animate-fade-in" id="panel-travel">
          <p class="tab-panel-desc">${travelInsurance.description}</p>
          <div class="plans-grid">
            ${travelInsurance.plans.map(plan => `
              <div class="plan-card ${plan.id === 'travel-comfort' ? 'featured' : ''}">
                ${plan.id === 'travel-comfort' ? '<span class="featured-ribbon">Recommandé</span>' : ''}
                <div class="plan-header">
                  <h3>${plan.name}</h3>
                  <p class="plan-desc">${plan.description}</p>
                  <div class="plan-price">
                    <span class="price-num">${plan.baseDailyRate.toFixed(2)}$</span>
                    <span class="price-unit">/ jour (base)</span>
                  </div>
                </div>
                <div class="plan-divider"></div>
                <div class="plan-body">
                  <div class="coverage-badge"><i class="fa-solid fa-hand-holding-dollar"></i> Limite frais médicaux : <strong>${plan.medicalLimit.toLocaleString()}$</strong></div>
                  <ul>
                    ${plan.benefits.map(b => `<li><i class="fa-solid fa-check text-success"></i> <span>${b}</span></li>`).join('')}
                  </ul>
                </div>
                <div class="plan-footer">
                  <button class="btn ${plan.id === 'travel-comfort' ? 'btn-gold' : 'btn-outline-navy'} btn-select-plan-quote" data-type="travel" data-plan="${plan.id}">Sélectionner ce plan</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Life Insurance Panel -->
        <div class="tab-panel animate-fade-in" id="panel-life">
          <p class="tab-panel-desc">${lifeInsurance.description}</p>
          <div class="plans-grid">
            ${lifeInsurance.plans.map(plan => `
              <div class="plan-card ${plan.id === 'life-prem' ? 'featured' : ''}">
                ${plan.id === 'life-prem' ? '<span class="featured-ribbon">Populaire</span>' : ''}
                <div class="plan-header">
                  <h3>${plan.name}</h3>
                  <p class="plan-desc">${plan.description}</p>
                  <div class="plan-price">
                    <span class="price-num">${plan.baseMonthlyPremium.toFixed(2)}$</span>
                    <span class="price-unit">/ mois (base)</span>
                  </div>
                </div>
                <div class="plan-divider"></div>
                <div class="plan-body">
                  <div class="coverage-badge"><i class="fa-solid fa-shield-heart"></i> Capital Décès Garanti : <strong>${plan.coverageAmount.toLocaleString()}$</strong></div>
                  <ul>
                    ${plan.benefits.map(b => `<li><i class="fa-solid fa-check text-success"></i> <span>${b}</span></li>`).join('')}
                  </ul>
                </div>
                <div class="plan-footer">
                  <button class="btn ${plan.id === 'life-prem' ? 'btn-gold' : 'btn-outline-navy'} btn-select-plan-quote" data-type="life" data-plan="${plan.id}">Sélectionner ce plan</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>

    <!-- Interactive Quote Simulator (Interactive Widget) -->
    <section id="simulator-anchor" class="simulator-section section-padding bg-navy-light text-white">
      <div class="container">
        <div class="text-center simulator-title-box">
          <span class="badge badge-gold">Calculateur de Prime</span>
          <h2>Simulez votre Prime en Temps Réel</h2>
          <p>Configurez vos critères ci-dessous et obtenez une estimation instantanée de votre couverture d'assurance.</p>
        </div>
        
        <div class="simulator-card grid grid-3">
          <!-- Column 1: Config inputs -->
          <div class="sim-config-col">
            <h3>1. Vos Critères</h3>
            
            <div class="form-group">
              <label for="sim-ins-type">Type d'Assurance</label>
              <select id="sim-ins-type" class="form-control-light">
                <option value="travel" selected>Assurance Voyage Temporaire</option>
                <option value="life">Assurance Vie Expatrié USA</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="sim-age">Âge de l'assuré</label>
              <div class="range-input-container">
                <input type="range" id="sim-age" min="1" max="90" value="32" class="range-slider">
                <span id="sim-age-display" class="range-value-display">32 ans</span>
              </div>
            </div>
            
            <!-- Dynamic duration container (Only shown for Travel) -->
            <div class="form-group" id="sim-duration-group">
              <label for="sim-duration">Durée du séjour (jours)</label>
              <div class="range-input-container">
                <input type="range" id="sim-duration" min="5" max="180" value="30" class="range-slider">
                <span id="sim-duration-display" class="range-value-display">30 jours</span>
              </div>
            </div>
          </div>
          
          <!-- Column 2: Plan & Options -->
          <div class="sim-options-col">
            <h3>2. Plan & Garanties</h3>
            
            <div class="form-group">
              <label for="sim-plan-select">Formule</label>
              <select id="sim-plan-select" class="form-control-light">
                <!-- Filled dynamically by script -->
              </select>
            </div>
            
            <div class="form-group">
              <label>Garanties Optionnelles</label>
              <div id="sim-options-checkboxes" class="checkbox-options-list">
                <!-- Filled dynamically by script -->
              </div>
            </div>
          </div>
          
          <!-- Column 3: Live Output -->
          <div class="sim-result-col">
            <div class="sim-result-card-inner">
              <h3>Votre Estimation</h3>
              <div class="sim-final-price-box">
                <span class="price-val" id="sim-calculated-price">0.00$</span>
                <span class="price-lbl" id="sim-price-frequency">/ séjour</span>
              </div>
              
              <div class="sim-coverage-summary">
                <p><strong>Formule :</strong> <span id="sim-summary-plan-name">Essentiel</span></p>
                <p><strong>Plafond Médical :</strong> <span id="sim-summary-coverage-limit">150 000 $</span></p>
                <p><strong>Franchise :</strong> <span id="sim-summary-deductible">50 $</span></p>
              </div>
              
              <div class="sim-divider"></div>
              
              <!-- Quick lead form inside result card -->
              <form id="insurance-quote-lead-form">
                <div class="form-group">
                  <input type="text" id="quote-lead-name" placeholder="Nom complet" class="form-control-light form-control-sm" required>
                </div>
                <div class="form-group">
                  <input type="email" id="quote-lead-email" placeholder="Adresse e-mail" class="form-control-light form-control-sm" required>
                </div>
                <button type="submit" class="btn btn-gold btn-block btn-sm">Souscrire / Obtenir Devis Officiel</button>
              </form>
              
              <div id="quote-lead-success" class="quote-lead-success-msg hidden">
                <i class="fa-solid fa-circle-check text-success"></i>
                <h4>Demande Enregistrée !</h4>
                <p>Référence ticket : <strong id="quote-success-ticket-id">SN-INS-1234</strong></p>
                <p>Un conseiller de Baltimore prendra contact sous 24h.</p>
                <button type="button" id="btn-reset-quote-form" class="btn btn-outline-white btn-xs">Faire un autre devis</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Hook tab buttons
  setupTabs();
  
  // Setup Simulator logic
  setupSimulator();
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active states
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      // Add active state to clicked tab
      tab.classList.add('active');
      
      const targetId = tab.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
      
      // Update simulator select to match the tab clicked
      const simTypeSelect = document.getElementById('sim-ins-type');
      if (simTypeSelect) {
        if (targetId === 'panel-travel') {
          simTypeSelect.value = 'travel';
        } else {
          simTypeSelect.value = 'life';
        }
        // Trigger select change event manually
        simTypeSelect.dispatchEvent(new Event('change'));
      }
    });
  });

  // Link "Sélectionner ce plan" buttons directly to simulator configuration
  document.querySelectorAll('.btn-select-plan-quote').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const planId = btn.getAttribute('data-plan');
      
      const simTypeSelect = document.getElementById('sim-ins-type');
      if (simTypeSelect) {
        simTypeSelect.value = type;
        // Trigger change to update options list
        updateSimulatorInputs(type, planId);
        
        // Scroll to simulator section
        const simSection = document.getElementById('simulator-anchor');
        simSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function setupSimulator() {
  const simType = document.getElementById('sim-ins-type');
  const simAge = document.getElementById('sim-age');
  const simAgeDisplay = document.getElementById('sim-age-display');
  const simDuration = document.getElementById('sim-duration');
  const simDurationDisplay = document.getElementById('sim-duration-display');
  const simDurationGroup = document.getElementById('sim-duration-group');
  const simPlanSelect = document.getElementById('sim-plan-select');
  const simOptionsContainer = document.getElementById('sim-options-checkboxes');
  
  // Slider displays
  simAge.addEventListener('input', () => {
    simAgeDisplay.innerText = `${simAge.value} ans`;
    calculatePremium();
  });
  
  simDuration.addEventListener('input', () => {
    simDurationDisplay.innerText = `${simDuration.value} jours`;
    calculatePremium();
  });

  // Simulator Type select changes
  simType.addEventListener('change', () => {
    const type = simType.value;
    updateSimulatorInputs(type);
  });

  // Simulator plan change
  simPlanSelect.addEventListener('change', calculatePremium);

  // Initial update
  updateSimulatorInputs('travel');

  // Hook Lead conversion form inside simulator
  const leadForm = document.getElementById('insurance-quote-lead-form');
  const leadSuccess = document.getElementById('quote-lead-success');
  const resetLeadBtn = document.getElementById('btn-reset-quote-form');

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('quote-lead-name').value.trim();
    const email = document.getElementById('quote-lead-email').value.trim();
    const insType = simType.value;
    const planSelectedId = simPlanSelect.value;
    const finalPrice = document.getElementById('sim-calculated-price').innerText;
    
    // Find plan name
    let planName = '';
    if (insType === 'travel') {
      const p = travelInsurance.plans.find(x => x.id === planSelectedId);
      planName = p ? p.name : '';
    } else {
      const p = lifeInsurance.plans.find(x => x.id === planSelectedId);
      planName = p ? p.name : '';
    }

    // Collect options chosen
    const chosenOptions = [];
    document.querySelectorAll('#sim-options-checkboxes input:checked').forEach(cb => {
      chosenOptions.push(cb.value);
    });

    const ticketRand = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `SN-INS-${ticketRand}`;

    const newTicket = {
      id: ticketId,
      name: name,
      email: email,
      service: 'insurance',
      subject: `Devis Assurance - ${insType === 'travel' ? 'Voyage' : 'Vie'} (${planName})`,
      message: `Demande de souscription d'assurance. Assuré : ${name}, Âge : ${simAge.value} ans. Type : ${insType === 'travel' ? 'Voyage USA' : 'Vie Expatrié'}. Plan choisi : ${planName}. Estimation calculée : ${finalPrice}. Options : ${chosenOptions.join(', ') || 'Aucune'}`,
      status: 'Nouveau',
      date: new Date().toLocaleString('fr-FR'),
      details: {
        insType,
        age: simAge.value,
        duration: insType === 'travel' ? simDuration.value : 'N/A',
        planName,
        finalPrice,
        chosenOptions
      }
    };

    // Store in localStorage support tickets list
    const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
    tickets.push(newTicket);
    localStorage.setItem('sn_global_tickets', JSON.stringify(tickets));

    // Show success panel inside simulator card
    leadForm.classList.add('hidden');
    document.getElementById('quote-success-ticket-id').innerText = ticketId;
    leadSuccess.classList.remove('hidden');
  });

  resetLeadBtn.addEventListener('click', () => {
    leadForm.reset();
    leadForm.classList.remove('hidden');
    leadSuccess.classList.add('hidden');
  });
}

function updateSimulatorInputs(type, preSelectedPlanId = null) {
  const simDurationGroup = document.getElementById('sim-duration-group');
  const simPlanSelect = document.getElementById('sim-plan-select');
  const simOptionsContainer = document.getElementById('sim-options-checkboxes');
  
  if (type === 'travel') {
    simDurationGroup.style.display = 'block';
    
    // Fill formulas
    simPlanSelect.innerHTML = travelInsurance.plans.map(p => `
      <option value="${p.id}" ${preSelectedPlanId && preSelectedPlanId === p.id ? 'selected' : p.id === 'travel-comfort' && !preSelectedPlanId ? 'selected' : ''}>${p.name} (${p.baseDailyRate.toFixed(2)}$/j)</option>
    `).join('');
    
    // Fill options
    simOptionsContainer.innerHTML = travelInsurance.options.map(opt => `
      <label class="checkbox-label">
        <input type="checkbox" name="sim-opt" value="${opt.id}" data-cost="${opt.cost}">
        <span>${opt.name} (+${opt.cost.toFixed(2)}$/j)</span>
      </label>
    `).join('');
  } else {
    simDurationGroup.style.display = 'none';
    
    // Fill formulas
    simPlanSelect.innerHTML = lifeInsurance.plans.map(p => `
      <option value="${p.id}" ${preSelectedPlanId && preSelectedPlanId === p.id ? 'selected' : p.id === 'life-prem' && !preSelectedPlanId ? 'selected' : ''}>${p.name} (${p.baseMonthlyPremium.toFixed(2)}$/m)</option>
    `).join('');
    
    // Fill options
    simOptionsContainer.innerHTML = lifeInsurance.options.map(opt => `
      <label class="checkbox-label">
        <input type="checkbox" name="sim-opt" value="${opt.id}" data-cost="${opt.cost}">
        <span>${opt.name} (+${opt.cost.toFixed(2)}$/mois)</span>
      </label>
    `).join('');
  }

  // Hook checkbox changes to calculate immediately
  document.querySelectorAll('#sim-options-checkboxes input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', calculatePremium);
  });

  calculatePremium();
}

function calculatePremium() {
  const type = document.getElementById('sim-ins-type').value;
  const age = parseInt(document.getElementById('sim-age').value);
  const duration = parseInt(document.getElementById('sim-duration').value);
  const planId = document.getElementById('sim-plan-select').value;
  
  // Elements to update
  const priceDisplay = document.getElementById('sim-calculated-price');
  const frequencyDisplay = document.getElementById('sim-price-frequency');
  const summaryName = document.getElementById('sim-summary-plan-name');
  const summaryLimit = document.getElementById('sim-summary-coverage-limit');
  const summaryDeductible = document.getElementById('sim-summary-deductible');
  
  let finalPrice = 0;
  
  if (type === 'travel') {
    const plan = travelInsurance.plans.find(p => p.id === planId) || travelInsurance.plans[0];
    const multiplierObj = travelInsurance.ageMultipliers.find(m => age >= m.minAge && age <= m.maxAge) || { multiplier: 1.0 };
    
    // Sum options daily costs
    let optionsDailyCost = 0;
    document.querySelectorAll('#sim-options-checkboxes input:checked').forEach(cb => {
      optionsDailyCost += parseFloat(cb.getAttribute('data-cost'));
    });
    
    // Calculation: (BaseDailyRate * ageMultiplier + OptionsDailyCost) * duration
    finalPrice = (plan.baseDailyRate * multiplierObj.multiplier + optionsDailyCost) * duration;
    
    // Update displays
    priceDisplay.innerText = `${finalPrice.toFixed(2)}$`;
    frequencyDisplay.innerText = `/ séjour (${duration} j)`;
    summaryName.innerText = plan.name;
    summaryLimit.innerText = `${plan.medicalLimit.toLocaleString()} $`;
    summaryDeductible.innerText = plan.id === 'travel-basic' ? '50 $' : '0 $ (Sans franchise)';
  } else {
    const plan = lifeInsurance.plans.find(p => p.id === planId) || lifeInsurance.plans[0];
    const multiplierObj = lifeInsurance.ageMultipliers.find(m => age >= m.minAge && age <= m.maxAge) || { multiplier: 1.0 };
    
    // Sum options monthly costs
    let optionsMonthlyCost = 0;
    document.querySelectorAll('#sim-options-checkboxes input:checked').forEach(cb => {
      optionsMonthlyCost += parseFloat(cb.getAttribute('data-cost'));
    });
    
    // Calculation: BaseMonthlyPremium * ageMultiplier + OptionsMonthlyCost
    finalPrice = plan.baseMonthlyPremium * multiplierObj.multiplier + optionsMonthlyCost;
    
    // Update displays
    priceDisplay.innerText = `${finalPrice.toFixed(2)}$`;
    frequencyDisplay.innerText = `/ mois`;
    summaryName.innerText = plan.name;
    summaryLimit.innerText = `${plan.coverageAmount.toLocaleString()} $ (Capital garanti)`;
    summaryDeductible.innerText = 'Aucune franchise décès';
  }
}
