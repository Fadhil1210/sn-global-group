export const lifeInsurance = {
  name: "Assurance Vie Expatrié USA",
  description: "Sécurisez l'avenir financier de votre famille en cas de coup dur durant votre expatriation aux États-Unis.",
  plans: [
    {
      id: "life-std",
      name: "Sécurité Standard",
      baseMonthlyPremium: 25.00, // base price for age 20-30
      coverageAmount: 150000,
      description: "Idéal pour les jeunes couples ou célibataires débutant leur expatriation aux USA.",
      benefits: [
        "Capital garanti de 150 000 $ versé aux bénéficiaires",
        "Couverture mondiale (hors pays en conflit)",
        "Assistance administrative décès en français et anglais",
        "Rapatriement de corps inclus"
      ]
    },
    {
      id: "life-prem",
      name: "Prestige Famille",
      baseMonthlyPremium: 48.00,
      coverageAmount: 400000,
      description: "La protection idéale pour les familles avec enfants à charge aux États-Unis.",
      benefits: [
        "Capital garanti de 400 000 $ versé aux bénéficiaires",
        "Rente éducation optionnelle pour les enfants",
        "Avance de fonds immédiate pour frais de funérailles (jusqu'à 15 000 $)",
        "Assistance juridique complète et rapatriement de corps"
      ]
    },
    {
      id: "life-integ",
      name: "Patrimoine Intégral",
      baseMonthlyPremium: 95.00,
      coverageAmount: 1000000,
      description: "Le summum de la protection patrimoniale avec avantages successoraux exclusifs.",
      benefits: [
        "Capital garanti de 1 000 000 $ versé aux bénéficiaires",
        "Exonération fiscale américaine des capitaux transmis (selon situation)",
        "Doublement du capital en cas de décès accidentel",
        "Accès à un conseiller en gestion de patrimoine dédié à Baltimore"
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
    { id: "opt-rente", name: "Rente Éducation (enfants)", cost: 8.50, description: "Versement d'une rente mensuelle de 500 $ par enfant jusqu'à 21 ans." },
    { id: "opt-accid", name: "Doublement Accident", cost: 5.00, description: "Double le capital versé si le décès est causé par un accident." },
    { id: "opt-invalid", name: "Garantie Invalidité Totale", cost: 12.00, description: "Versement anticipé du capital en cas d'incapacité permanente de travail." }
  ]
};

export const travelInsurance = {
  name: "Assurance Voyage USA Premium",
  description: "Partez l'esprit tranquille. Une couverture complète pour vos frais médicaux exorbitants aux États-Unis.",
  plans: [
    {
      id: "travel-basic",
      name: "Essentiel Horizon",
      baseDailyRate: 4.50,
      medicalLimit: 150000, // USD
      description: "Couverture essentielle pour les séjours courts de loisirs ou d'affaires.",
      benefits: [
        "Prise en charge des frais médicaux d'urgence jusqu'à 150 000 $",
        "Rapatriement sanitaire pris en charge à 100% (frais réels)",
        "Téléconsultation médicale francophone 24h/7j",
        "Franchise fixe de 50 $ par acte médical"
      ]
    },
    {
      id: "travel-comfort",
      name: "Sérénité Globe",
      baseDailyRate: 7.20,
      medicalLimit: 500000,
      description: "La recommandation SN Global pour voyager l'esprit serein partout aux USA.",
      benefits: [
        "Prise en charge des frais médicaux d'urgence jusqu'à 500 000 $",
        "Zéro franchise (100% des frais remboursés dès le 1er dollar)",
        "Assurance bagages (perte/vol/détérioration) jusqu'à 2 000 $",
        "Assistance juridique et caution pénale à l'étranger"
      ]
    },
    {
      id: "travel-elite",
      name: "Excellence Intégrale",
      baseDailyRate: 11.50,
      medicalLimit: 2000000,
      description: "Le bouclier médical absolu sans plafond de fait pour des vacances sereines.",
      benefits: [
        "Frais médicaux couverts jusqu'à 2 000 000 $ (chambre individuelle)",
        "Annulation de voyage toutes causes justifiées jusqu'à 10 000 $",
        "Responsabilité civile vie privée à l'étranger (jusqu'à 4M$)",
        "Assistance VIP 24h/7j avec conciergerie francophone basée à Baltimore"
      ]
    }
  ],
  ageMultipliers: [
    { minAge: 0, maxAge: 17, multiplier: 0.9 }, // discount for kids
    { minAge: 18, maxAge: 39, multiplier: 1.0 },
    { minAge: 40, maxAge: 59, multiplier: 1.3 },
    { minAge: 60, maxAge: 69, multiplier: 1.8 },
    { minAge: 70, maxAge: 79, multiplier: 2.5 },
    { minAge: 80, maxAge: 120, multiplier: 4.0 }
  ],
  options: [
    { id: "opt-annul", name: "Option Annulation", cost: 1.50, description: "Remboursement des frais de transport et d'hébergement non remboursables (tarifs journaliers)." },
    { id: "opt-bagages", name: "Protection Équipement Tech", cost: 1.00, description: "Garantie renforcée pour ordinateurs, téléphones et appareils photo jusqu'à 1 500 $ additionnels." },
    { id: "opt-sport", name: "Sports Extrêmes & Glisse", cost: 2.20, description: "Couverture médicale étendue pour la pratique du surf, ski, parachute et sports de plein air." }
  ]
};
