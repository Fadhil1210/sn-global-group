import { lifeInsurance, travelInsurance } from '../data/insurancePolicies.js';
import { currentLang, t } from '../utils/i18n.js';

export function renderInsurance(container) {
  const isEn = currentLang === 'en';

  const text = {
    badgeHero: { en: "Prestige & Security in the USA", fr: "Prestige & Sécurité aux USA" },
    titleHero: { en: "Protect your Life & Travels in the USA", fr: "Protégez votre Vie & Vos Voyages aux USA" },
    subHero: { en: "Solid coverage adapted to the realities of the American system, backed by Baltimore's excellence.", fr: "Des garanties solides adaptées aux réalités du système américain, portées par l'excellence de Baltimore." },
    btnSimulate: { en: "Simulate an instant quote", fr: "Simuler un devis immédiat" },
    btnDiscover: { en: "Discover our policies", fr: "Découvrir nos polices" },
    
    badgeOffers: { en: "Educational Offers", fr: "Offres Pédagogiques" },
    titleOffers: { en: "Bespoke Coverages Tailored to the USA", fr: "Des Garanties sur Mesure adaptées aux USA" },
    descOffers: { en: "Select the appropriate protection according to your relocation project or temporary trip.", fr: "Sélectionnez la protection adéquate selon votre projet d'expatriation ou votre voyage temporaire." },
    
    tabTravel: { en: "Temporary Travel Insurance", fr: "Assurance Voyage Temporaire" },
    tabLife: { en: "Expatriate USA Life Insurance", fr: "Assurance Vie Expatrié USA" },
    
    ribbonRecommended: { en: "Recommended", fr: "Recommandé" },
    ribbonPopular: { en: "Popular", fr: "Populaire" },
    rateDay: { en: "/ day (base)", fr: "/ jour (base)" },
    rateMonth: { en: "/ month (base)", fr: "/ mois (base)" },
    limitMedical: { en: "Medical expenses limit:", fr: "Limite frais médicaux :" },
    limitLife: { en: "Guaranteed Death Benefit:", fr: "Capital Décès Garanti :" },
    btnSelect: { en: "Select this plan", fr: "Sélectionner ce plan" },

    badgeCalc: { en: "Premium Calculator", fr: "Calculateur de Prime" },
    titleCalc: { en: "Simulate your Premium in Real Time", fr: "Simulez votre Prime en Temps Réel" },
    descCalc: { en: "Configure your criteria below and get an instant estimate of your insurance coverage.", fr: "Configurez vos critères ci-dessous et obtenez une estimation instantanée de votre couverture d'assurance." },
    
    colCriteria: { en: "1. Your Criteria", fr: "1. Vos Critères" },
    insType: { en: "Insurance Type", fr: "Type d'Assurance" },
    ageLabel: { en: "Insured's Age", fr: "Âge de l'assuré" },
    durationLabel: { en: "Duration of stay (days)", fr: "Durée du séjour (jours)" },
    
    colBenefits: { en: "2. Plan & Benefits", fr: "2. Plan & Garanties" },
    planLabel: { en: "Plan Option", fr: "Formule" },
    optionsLabel: { en: "Optional Benefits", fr: "Garanties Optionnelles" },
    
    colEstimate: { en: "3. Your Estimate", fr: "3. Votre Estimation" },
    summaryPlan: { en: "Plan Option:", fr: "Formule :" },
    summaryMedLimit: { en: "Medical Ceiling:", fr: "Plafond Médical :" },
    summaryDeductible: { en: "Deductible:", fr: "Franchise :" },
    
    fullName: { en: "Full Name", fr: "Nom complet" },
    email: { en: "Email Address", fr: "Adresse e-mail" },
    btnSubmit: { en: "Subscribe / Get Official Quote", fr: "Souscrire / Obtenir Devis Officiel" },
    
    successTitle: { en: "Request Registered!", fr: "Demande Enregistrée !" },
    successRef: { en: "Ticket reference:", fr: "Référence ticket :" },
    successDesc: { en: "A Baltimore advisor will contact you within 24 hours.", fr: "Un conseiller de Baltimore prendra contact sous 24h." },
    successReset: { en: "Get another quote", fr: "Faire un autre devis" },
    
    noDeductible: { en: "No deductible", fr: "Sans franchise" },
    noLifeDeductible: { en: "No death deductible", fr: "Aucune franchise décès" },
    guaranteedCapital: { en: "Guaranteed capital", fr: "Capital garanti" }
  };

  container.innerHTML = `
    <!-- Insurance Hero -->
    <section class="insurance-hero">
      <div class="insurance-hero-bg"></div>
      <div class="insurance-hero-overlay"></div>
      <div class="container insurance-hero-content text-center">
        <span class="badge badge-gold">${t(text.badgeHero)}</span>
        <h1>${t(text.titleHero)}</h1>
        <p class="subtitle font-montserrat">${t(text.subHero)}</p>
        <div class="hero-actions">
          <a href="#simulator-anchor" class="btn btn-gold btn-lg">${t(text.btnSimulate)}</a>
          <a href="#policies-anchor" class="btn btn-outline-white btn-lg">${t(text.btnDiscover)}</a>
        </div>
      </div>
    </section>

    <!-- Policies Presentation Section -->
    <section id="policies-anchor" class="policies-section section-padding">
      <div class="container text-center">
        <span class="badge">${t(text.badgeOffers)}</span>
        <h2>${t(text.titleOffers)}</h2>
        <p class="section-desc">${t(text.descOffers)}</p>
        
        <!-- Toggle Tabs -->
        <div class="tabs-container">
          <button class="tab-btn active" id="tab-btn-travel" data-target="panel-travel">
            <i class="fa-solid fa-plane-departure"></i> ${t(text.tabTravel)}
          </button>
          <button class="tab-btn" id="tab-btn-life" data-target="panel-life">
            <i class="fa-solid fa-users-viewfinder"></i> ${t(text.tabLife)}
          </button>
        </div>
        
        <!-- Travel Insurance Panel -->
        <div class="tab-panel active animate-fade-in" id="panel-travel">
          <p class="tab-panel-desc">${t(travelInsurance.description)}</p>
          <div class="plans-grid">
            ${travelInsurance.plans.map(plan => `
              <div class="plan-card ${plan.id === 'travel-comfort' ? 'featured' : ''}">
                ${plan.id === 'travel-comfort' ? `<span class="featured-ribbon">${t(text.ribbonRecommended)}</span>` : ''}
                <div class="plan-header">
                  <h3>${t(plan.name)}</h3>
                  <p class="plan-desc">${t(plan.description)}</p>
                  <div class="plan-price">
                    <span class="price-num">${plan.baseDailyRate.toFixed(2)}$</span>
                    <span class="price-unit">${t(text.rateDay)}</span>
                  </div>
                </div>
                <div class="plan-divider"></div>
                <div class="plan-body">
                  <div class="coverage-badge"><i class="fa-solid fa-hand-holding-dollar"></i> ${t(text.limitMedical)} <strong>${plan.medicalLimit.toLocaleString()}$</strong></div>
                  <ul>
                    ${plan.benefits.map(b => `<li><i class="fa-solid fa-check text-success"></i> <span>${t(b)}</span></li>`).join('')}
                  </ul>
                </div>
                <div class="plan-footer">
                  <button class="btn ${plan.id === 'travel-comfort' ? 'btn-gold' : 'btn-outline-navy'} btn-select-plan-quote" data-type="travel" data-plan="${plan.id}">${t(text.btnSelect)}</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Life Insurance Panel -->
        <div class="tab-panel animate-fade-in" id="panel-life">
          <p class="tab-panel-desc">${t(lifeInsurance.description)}</p>
          <div class="plans-grid">
            ${lifeInsurance.plans.map(plan => `
              <div class="plan-card ${plan.id === 'life-prem' ? 'featured' : ''}">
                ${plan.id === 'life-prem' ? `<span class="featured-ribbon">${t(text.ribbonPopular)}</span>` : ''}
                <div class="plan-header">
                  <h3>${t(plan.name)}</h3>
                  <p class="plan-desc">${t(plan.description)}</p>
                  <div class="plan-price">
                    <span class="price-num">${plan.baseMonthlyPremium.toFixed(2)}$</span>
                    <span class="price-unit">${t(text.rateMonth)}</span>
                  </div>
                </div>
                <div class="plan-divider"></div>
                <div class="plan-body">
                  <div class="coverage-badge"><i class="fa-solid fa-shield-heart"></i> ${t(text.limitLife)} <strong>${plan.coverageAmount.toLocaleString()}$</strong></div>
                  <ul>
                    ${plan.benefits.map(b => `<li><i class="fa-solid fa-check text-success"></i> <span>${t(b)}</span></li>`).join('')}
                  </ul>
                </div>
                <div class="plan-footer">
                  <button class="btn ${plan.id === 'life-prem' ? 'btn-gold' : 'btn-outline-navy'} btn-select-plan-quote" data-type="life" data-plan="${plan.id}">${t(text.btnSelect)}</button>
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
          <span class="badge badge-gold">${t(text.badgeCalc)}</span>
          <h2>${t(text.titleCalc)}</h2>
          <p>${t(text.descCalc)}</p>
        </div>
        
        <div class="simulator-card grid grid-3">
          <!-- Column 1: Config inputs -->
          <div class="sim-config-col">
            <h3>${t(text.colCriteria)}</h3>
            
            <div class="form-group">
              <label for="sim-ins-type">${t(text.insType)}</label>
              <select id="sim-ins-type" class="form-control-light">
                <option value="travel" selected>${t(text.tabTravel)}</option>
                <option value="life">${t(text.tabLife)}</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="sim-age">${t(text.ageLabel)}</label>
              <div class="range-input-container">
                <input type="range" id="sim-age" min="1" max="90" value="32" class="range-slider">
                <span id="sim-age-display" class="range-value-display">32 ${isEn ? 'years old' : 'ans'}</span>
              </div>
            </div>
            
            <!-- Dynamic duration container (Only shown for Travel) -->
            <div class="form-group" id="sim-duration-group">
              <label for="sim-duration">${t(text.durationLabel)}</label>
              <div class="range-input-container">
                <input type="range" id="sim-duration" min="5" max="180" value="30" class="range-slider">
                <span id="sim-duration-display" class="range-value-display">30 ${isEn ? 'days' : 'jours'}</span>
              </div>
            </div>
          </div>
          
          <!-- Column 2: Plan & Options -->
          <div class="sim-options-col">
            <h3>${t(text.colBenefits)}</h3>
            
            <div class="form-group">
              <label for="sim-plan-select">${t(text.planLabel)}</label>
              <select id="sim-plan-select" class="form-control-light">
                <!-- Filled dynamically by script -->
              </select>
            </div>
            
            <div class="form-group">
              <label>${t(text.optionsLabel)}</label>
              <div id="sim-options-checkboxes" class="checkbox-options-list">
                <!-- Filled dynamically by script -->
              </div>
            </div>
          </div>
          
          <!-- Column 3: Live Output -->
          <div class="sim-result-col">
            <div class="sim-result-card-inner">
              <h3>${t(text.colEstimate)}</h3>
              <div class="sim-final-price-box">
                <span class="price-val" id="sim-calculated-price">0.00$</span>
                <span class="price-lbl" id="sim-price-frequency">/ ${isEn ? 'stay' : 'séjour'}</span>
              </div>
              
              <div class="sim-coverage-summary">
                <p><strong>${t(text.summaryPlan)}</strong> <span id="sim-summary-plan-name">Essentiel</span></p>
                <p><strong>${t(text.summaryMedLimit)}</strong> <span id="sim-summary-coverage-limit">150 000 $</span></p>
                <p><strong>${t(text.summaryDeductible)}</strong> <span id="sim-summary-deductible">50 $</span></p>
              </div>
              
              <div class="sim-divider"></div>
              
              <!-- Quick lead form inside result card -->
              <form id="insurance-quote-lead-form">
                <div class="form-group">
                  <input type="text" id="quote-lead-name" placeholder="${t(text.fullName)}" class="form-control-light form-control-sm" required>
                </div>
                <div class="form-group">
                  <input type="email" id="quote-lead-email" placeholder="${t(text.email)}" class="form-control-light form-control-sm" required>
                </div>
                <button type="submit" class="btn btn-gold btn-block btn-sm">${t(text.btnSubmit)}</button>
              </form>
              
              <div id="quote-lead-success" class="quote-lead-success-msg hidden">
                <i class="fa-solid fa-circle-check text-success"></i>
                <h4>${t(text.successTitle)}</h4>
                <p>${t(text.successRef)} <strong id="quote-success-ticket-id">SN-INS-1234</strong></p>
                <p>${t(text.successDesc)}</p>
                <button type="button" id="btn-reset-quote-form" class="btn btn-outline-white btn-xs">${t(text.successReset)}</button>
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
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      
      const targetId = tab.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
      
      const simTypeSelect = document.getElementById('sim-ins-type');
      if (simTypeSelect) {
        if (targetId === 'panel-travel') {
          simTypeSelect.value = 'travel';
        } else {
          simTypeSelect.value = 'life';
        }
        simTypeSelect.dispatchEvent(new Event('change'));
      }
    });
  });

  document.querySelectorAll('.btn-select-plan-quote').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const planId = btn.getAttribute('data-plan');
      
      const simTypeSelect = document.getElementById('sim-ins-type');
      if (simTypeSelect) {
        simTypeSelect.value = type;
        updateSimulatorInputs(type, planId);
        
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
  
  simAge.addEventListener('input', () => {
    simAgeDisplay.innerText = `${simAge.value} ${currentLang === 'en' ? 'years old' : 'ans'}`;
    calculatePremium();
  });
  
  simDuration.addEventListener('input', () => {
    simDurationDisplay.innerText = `${simDuration.value} ${currentLang === 'en' ? 'days' : 'jours'}`;
    calculatePremium();
  });

  simType.addEventListener('change', () => {
    updateSimulatorInputs(simType.value);
  });

  updateSimulatorInputs('travel');

  const leadForm = document.getElementById('insurance-quote-lead-form');
  const leadSuccess = document.getElementById('quote-lead-success');
  const resetLeadBtn = document.getElementById('btn-reset-quote-form');

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('quote-lead-name').value.trim();
    const email = document.getElementById('quote-lead-email').value.trim();
    const insType = simType.value;
    const planSelectedId = document.getElementById('sim-plan-select').value;
    const finalPrice = document.getElementById('sim-calculated-price').innerText;
    
    let planName = '';
    if (insType === 'travel') {
      const p = travelInsurance.plans.find(x => x.id === planSelectedId);
      planName = p ? t(p.name) : '';
    } else {
      const p = lifeInsurance.plans.find(x => x.id === planSelectedId);
      planName = p ? t(p.name) : '';
    }

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
      subject: `Insurance Quote - ${insType === 'travel' ? 'Travel' : 'Life'} (${planName})`,
      message: `Insurance application for ${name}, Age: ${simAge.value} years old. Type: ${insType === 'travel' ? 'Travel USA' : 'Expatriate Life'}. Chosen Plan: ${planName}. Calculated Estimate: ${finalPrice}. Options: ${chosenOptions.join(', ') || 'None'}`,
      status: 'Nouveau',
      date: new Date().toLocaleString(currentLang === 'en' ? 'en-US' : 'fr-FR'),
      details: {
        insType,
        age: simAge.value,
        duration: insType === 'travel' ? simDuration.value : 'N/A',
        planName,
        finalPrice,
        chosenOptions
      }
    };

    const tickets = JSON.parse(localStorage.getItem('sn_global_tickets')) || [];
    tickets.push(newTicket);
    localStorage.setItem('sn_global_tickets', JSON.stringify(tickets));

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
  const isEn = currentLang === 'en';
  
  if (type === 'travel') {
    simDurationGroup.style.display = 'block';
    
    simPlanSelect.innerHTML = travelInsurance.plans.map(p => `
      <option value="${p.id}" ${preSelectedPlanId && preSelectedPlanId === p.id ? 'selected' : p.id === 'travel-comfort' && !preSelectedPlanId ? 'selected' : ''}>${t(p.name)} (${p.baseDailyRate.toFixed(2)}$/${isEn ? 'd' : 'j'})</option>
    `).join('');
    
    simOptionsContainer.innerHTML = travelInsurance.options.map(opt => `
      <label class="checkbox-label">
        <input type="checkbox" name="sim-opt" value="${opt.id}" data-cost="${opt.cost}">
        <span>${t(opt.name)} (+${opt.cost.toFixed(2)}$/${isEn ? 'day' : 'j'})</span>
      </label>
    `).join('');
  } else {
    simDurationGroup.style.display = 'none';
    
    simPlanSelect.innerHTML = lifeInsurance.plans.map(p => `
      <option value="${p.id}" ${preSelectedPlanId && preSelectedPlanId === p.id ? 'selected' : p.id === 'life-prem' && !preSelectedPlanId ? 'selected' : ''}>${t(p.name)} (${p.baseMonthlyPremium.toFixed(2)}$/${isEn ? 'm' : 'mois'})</option>
    `).join('');
    
    simOptionsContainer.innerHTML = lifeInsurance.options.map(opt => `
      <label class="checkbox-label">
        <input type="checkbox" name="sim-opt" value="${opt.id}" data-cost="${opt.cost}">
        <span>${t(opt.name)} (+${opt.cost.toFixed(2)}$/mois)</span>
      </label>
    `).join('');
  }

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
  const isEn = currentLang === 'en';
  
  const priceDisplay = document.getElementById('sim-calculated-price');
  const frequencyDisplay = document.getElementById('sim-price-frequency');
  const summaryName = document.getElementById('sim-summary-plan-name');
  const summaryLimit = document.getElementById('sim-summary-coverage-limit');
  const summaryDeductible = document.getElementById('sim-summary-deductible');
  
  let finalPrice = 0;
  
  if (type === 'travel') {
    const plan = travelInsurance.plans.find(p => p.id === planId) || travelInsurance.plans[0];
    const multiplierObj = travelInsurance.ageMultipliers.find(m => age >= m.minAge && age <= m.maxAge) || { multiplier: 1.0 };
    
    let optionsDailyCost = 0;
    document.querySelectorAll('#sim-options-checkboxes input:checked').forEach(cb => {
      optionsDailyCost += parseFloat(cb.getAttribute('data-cost'));
    });
    
    finalPrice = (plan.baseDailyRate * multiplierObj.multiplier + optionsDailyCost) * duration;
    
    priceDisplay.innerText = `${finalPrice.toFixed(2)}$`;
    frequencyDisplay.innerText = `/ ${isEn ? 'stay' : 'séjour'} (${duration} ${isEn ? 'days' : 'j'})`;
    summaryName.innerText = t(plan.name);
    summaryLimit.innerText = `${plan.medicalLimit.toLocaleString()} $`;
    summaryDeductible.innerText = plan.id === 'travel-basic' ? '50 $' : (isEn ? '0 $ (No deductible)' : '0 $ (Sans franchise)');
  } else {
    const plan = lifeInsurance.plans.find(p => p.id === planId) || lifeInsurance.plans[0];
    const multiplierObj = lifeInsurance.ageMultipliers.find(m => age >= m.minAge && age <= m.maxAge) || { multiplier: 1.0 };
    
    let optionsMonthlyCost = 0;
    document.querySelectorAll('#sim-options-checkboxes input:checked').forEach(cb => {
      optionsMonthlyCost += parseFloat(cb.getAttribute('data-cost'));
    });
    
    finalPrice = plan.baseMonthlyPremium * multiplierObj.multiplier + optionsMonthlyCost;
    
    priceDisplay.innerText = `${finalPrice.toFixed(2)}$`;
    frequencyDisplay.innerText = `/ ${isEn ? 'month' : 'mois'}`;
    summaryName.innerText = t(plan.name);
    summaryLimit.innerText = `${plan.coverageAmount.toLocaleString()} $ (${isEn ? 'Guaranteed capital' : 'Capital garanti'})`;
    summaryDeductible.innerText = isEn ? 'No death deductible' : 'Aucune franchise décès';
  }
}
