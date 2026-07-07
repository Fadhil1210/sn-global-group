export const lifeInsurance = {
  name: {
    en: "USA Expatriate Life Insurance",
    fr: "Assurance Vie Expatrié USA"
  },
  description: {
    en: "Secure your family's financial future in case of unexpected events during your expatriation to the United States.",
    fr: "Sécurisez l'avenir financier de votre famille en cas de coup dur durant votre expatriation aux États-Unis."
  },
  plans: [
    {
      id: "life-std",
      name: {
        en: "Standard Security",
        fr: "Sécurité Standard"
      },
      baseMonthlyPremium: 25.00,
      coverageAmount: 150000,
      description: {
        en: "Ideal for young couples or singles starting their expatriation in the USA.",
        fr: "Idéal pour les jeunes couples ou célibataires débutant leur expatriation aux USA."
      },
      benefits: [
        { en: "$150,000 guaranteed capital paid to beneficiaries", fr: "Capital garanti de 150 000 $ versé aux bénéficiaires" },
        { en: "Worldwide coverage (excluding conflict zones)", fr: "Couverture mondiale (hors pays en conflit)" },
        { en: "Death administrative assistance in French and English", fr: "Assistance administrative décès en français et anglais" },
        { en: "Repatriation of remains included", fr: "Rapatriement de corps inclus" }
      ]
    },
    {
      id: "life-prem",
      name: {
        en: "Family Prestige",
        fr: "Prestige Famille"
      },
      baseMonthlyPremium: 48.00,
      coverageAmount: 400000,
      description: {
        en: "The ideal protection for families with dependent children in the United States.",
        fr: "La protection idéale pour les familles avec enfants à charge aux États-Unis."
      },
      benefits: [
        { en: "$400,000 guaranteed capital paid to beneficiaries", fr: "Capital garanti de 400 000 $ versé aux bénéficiaires" },
        { en: "Optional education annuity for children", fr: "Rente éducation optionnelle pour les enfants" },
        { en: "Immediate funds advance for funeral costs (up to $15,000)", fr: "Avance de fonds immédiate pour frais de funérailles (jusqu'à 15 000 $)" },
        { en: "Complete legal assistance and repatriation of remains", fr: "Assistance juridique complète et rapatriement de corps" }
      ]
    },
    {
      id: "life-integ",
      name: {
        en: "Integral Estate",
        fr: "Patrimoine Intégral"
      },
      baseMonthlyPremium: 95.00,
      coverageAmount: 1000000,
      description: {
        en: "The ultimate in estate protection with exclusive inheritance tax benefits.",
        fr: "Le summum de la protection patrimoniale avec avantages successoraux exclusifs."
      },
      benefits: [
        { en: "$1,000,000 guaranteed capital paid to beneficiaries", fr: "Capital garanti de 1 000 000 $ versé aux bénéficiaires" },
        { en: "US tax exemption on transmitted capital (depending on situation)", fr: "Exonération fiscale américaine des capitaux transmis (selon situation)" },
        { en: "Doubling of capital in the event of accidental death", fr: "Doublement du capital en cas de décès accidentel" },
        { en: "Access to a dedicated wealth management advisor in Baltimore", fr: "Accès à un conseiller en gestion de patrimoine dédié à Baltimore" }
      ]
    }
  ],
  ageMultipliers: [
    { minAge: 0, maxAge: 29, multiplier: 1.0 },
    { minAge: 30, maxAge: 39, multiplier: 1.2 },
    { minAge: 40, maxAge: 49, multiplier: 1.6 },
    { minAge: 50, maxAge: 59, multiplier: 2.3 },
    { minAge: 60, maxAge: 69, multiplier: 3.5 },
    { minAge: 70, maxAge: 120, multiplier: 5.5 }
  ],
  options: [
    {
      id: "opt-rente",
      name: { en: "Education Annuity (children)", fr: "Rente Éducation (enfants)" },
      cost: 8.50,
      description: {
        en: "Payment of a monthly allowance of $500 per child up to 21 years old.",
        fr: "Versement d'une rente mensuelle de 500 $ par enfant jusqu'à 21 ans."
      }
    },
    {
      id: "opt-accid",
      name: { en: "Accidental Doubling", fr: "Doublement Accident" },
      cost: 5.00,
      description: {
        en: "Doubles the capital paid if death is caused by an accident.",
        fr: "Double le capital versé si le décès est causé par un accident."
      }
    },
    {
      id: "opt-invalid",
      name: { en: "Total Disability Guarantee", fr: "Garantie Invalidité Totale" },
      cost: 12.00,
      description: {
        en: "Advance payment of capital in case of permanent inability to work.",
        fr: "Versement anticipé du capital en cas d'incapacité permanente de travail."
      }
    }
  ]
};

export const travelInsurance = {
  name: {
    en: "USA Premium Travel Insurance",
    fr: "Assurance Voyage USA Premium"
  },
  description: {
    en: "Travel with peace of mind. Complete coverage for exorbitant medical expenses in the United States.",
    fr: "Partez l'esprit tranquille. Une couverture complète pour vos frais médicaux exorbitants aux États-Unis."
  },
  plans: [
    {
      id: "travel-basic",
      name: {
        en: "Horizon Essential",
        fr: "Essentiel Horizon"
      },
      baseDailyRate: 4.50,
      medicalLimit: 150000,
      description: {
        en: "Essential coverage for short leisure or business trips.",
        fr: "Couverture essentielle pour les séjours courts de loisirs ou d'affaires."
      },
      benefits: [
        { en: "Emergency medical expenses coverage up to $150,000", fr: "Prise en charge des frais médicaux d'urgence jusqu'à 150 000 $" },
        { en: "100% emergency medical evacuation (actual costs)", fr: "Rapatriement sanitaire pris en charge à 100% (frais réels)" },
        { en: "24/7 English/French-speaking medical teleconsultation", fr: "Téléconsultation médicale francophone 24h/7j" },
        { en: "Fixed deductible of $50 per medical act", fr: "Franchise fixe de 50 $ par acte médical" }
      ]
    },
    {
      id: "travel-comfort",
      name: {
        en: "Globe Serenity",
        fr: "Sérénité Globe"
      },
      baseDailyRate: 7.20,
      medicalLimit: 500000,
      description: {
        en: "The SN Global recommendation for traveling with peace of mind anywhere in the USA.",
        fr: "La recommandation SN Global pour voyager l'esprit serein partout aux USA."
      },
      benefits: [
        { en: "Emergency medical expenses coverage up to $500,000", fr: "Prise en charge des frais médicaux d'urgence jusqu'à 500 000 $" },
        { en: "Zero deductible (100% of costs reimbursed from the first dollar)", fr: "Zéro franchise (100% des frais remboursés dès le 1er dollar)" },
        { en: "Baggage insurance (loss/theft/damage) up to $2,000", fr: "Assurance bagages (perte/vol/détérioration) jusqu'à 2 000 $" },
        { en: "Legal assistance and bail bond abroad included", fr: "Assistance juridique et caution pénale à l'étranger" }
      ]
    },
    {
      id: "travel-elite",
      name: {
        en: "Integral Excellence",
        fr: "Excellence Intégrale"
      },
      baseDailyRate: 11.50,
      medicalLimit: 2000000,
      description: {
        en: "The absolute medical shield without capping for a completely stress-free holiday.",
        fr: "Le bouclier médical absolu sans plafond de fait pour des vacances sereines."
      },
      benefits: [
        { en: "Medical expenses covered up to $2,000,000 (single room)", fr: "Frais médicaux couverts jusqu'à 2 000 000 $ (chambre individuelle)" },
        { en: "Trip cancellation for any justified cause up to $10,000", fr: "Annulation de voyage toutes causes justifiées jusqu'à 10 000 $" },
        { en: "Personal liability abroad (up to $4M)", fr: "Responsabilité civile vie privée à l'étranger (jusqu'à 4M$)" },
        { en: "24/7 VIP assistance with bilingual conciergerie based in Baltimore", fr: "Assistance VIP 24h/7j avec conciergerie francophone basée à Baltimore" }
      ]
    }
  ],
  ageMultipliers: [
    { minAge: 0, maxAge: 17, multiplier: 0.9 },
    { minAge: 18, maxAge: 39, multiplier: 1.0 },
    { minAge: 40, maxAge: 59, multiplier: 1.3 },
    { minAge: 60, maxAge: 69, multiplier: 1.8 },
    { minAge: 70, maxAge: 79, multiplier: 2.5 },
    { minAge: 80, maxAge: 120, multiplier: 4.0 }
  ],
  options: [
    {
      id: "opt-annul",
      name: { en: "Cancellation Option", fr: "Option Annulation" },
      cost: 1.50,
      description: {
        en: "Reimbursement of non-refundable transport and accommodation costs.",
        fr: "Remboursement des frais de transport et d'hébergement non remboursables (tarifs journaliers)."
      }
    },
    {
      id: "opt-bagages",
      name: { en: "Tech Equipment Protection", fr: "Protection Équipement Tech" },
      cost: 1.00,
      description: {
        en: "Enhanced warranty for computers, phones and cameras up to an additional $1,500.",
        fr: "Garantie renforcée pour ordinateurs, téléphones et appareils photo jusqu'à 1 500 $ additionnels."
      }
    },
    {
      id: "opt-sport",
      name: { en: "Extreme & Winter Sports", fr: "Sports Extrêmes & Glisse" },
      cost: 2.20,
      description: {
        en: "Extended medical coverage for surfing, skiing, skydiving and outdoor sports.",
        fr: "Couverture médicale étendue pour la pratique du surf, ski, parachute et sports de plein air."
      }
    }
  ]
};
