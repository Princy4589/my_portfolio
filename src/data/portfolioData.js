export const portfolioData = [
  // Projets entreprise 2025 (en cours)
  {
    id: 1,
    name: "Soltreasurycorp.com",
    category: "Projet Entreprise",
    year: "2025",
    yearSort: 2025,
    monthSort: 6, // Commencé en mars
    duration: "En cours (1 mois)",
    status: "En cours",
    context: "Développement en équipe Agile de 2 personnes - Projet en cours",
    company: "Tridisphère Production",
    role: "Développeur Fullstack",
    languages: ["React", "NestJS"],
    languagesIcons: [
      "fab fa-react",
      "fab fa-nestjs",
      "fab fa-mongodb",
      "fab fa-express",
    ],
    info: "Développement d'un site pour la société de trésorerie Soltreasurycorp.com- Tridisphère Production",
    achievements: [
      "Développement d'un site pour la société de trésorerie Soltreasurycorp.com",
      "Interface utilisateur partiellement redesignée",
      "Formulaire de contact fonctionnel",
      "Tests unitaires en cours d'implémentation",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Styled Components",
    ],
    links: {
      demo: "https://www.soltreasurycorp.com/",
      github: null,
    },
    isPublic: true,
    confidentialNote:
      "Projet d'entreprise en cours - Détails techniques disponibles en entretien",
    inProgress: true,
  },

  {
    id: 2,
    name: "Intégration de l'API de digitalisation de documents sur le site www.acheter-louer.fr",
    category: "Projet Entreprise",
    year: "2025",
    yearSort: 2025,
    monthSort: 2, // Commencé en février
    duration: "3 mois",
    status: "Terminé",
    context:
      "Intégration de Qeeps sur le site www.acheter-louer.fr - Tridisphère Production",
    company: "Tridisphère Production",
    role: "Développeur Fullstack",
    languages: ["VueJS", "FeathersJS", "MongoDB", "Express"],
    languagesIcons: ["fab fa-vuejs", "fab fa-feathers", "fas fa-database"],
    info: "Intégration d'un API permettant aux utilisateurs de digitaliser et certifier leurs documents - Tridisphère Production",
    achievements: [
      "Intégration de Qeeps sur le site www.acheter-louer.fr",
      "APIs de base développées et testées",
      "Système de cache Redis fonctionnel",
      "Déploiement Docker en cours de configuration",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    links: {
      demo: "https://www.acheter-louer.fr/dossier-locatif",
      github: null,
    },
    isPublic: true,
    confidentialNote:
      "Architecture en développement - Détails disponibles sur demande",
    inProgress: true,
  },

  {
    id: 3,
    name: "Allômandat-Application web",
    category: "Projet Entreprise",
    year: "2025",
    yearSort: 2025,
    monthSort: 1, // Commencé en janvier
    duration: "En cours (5 mois)",
    status: "En cours",
    context:
      "Application web pour la gestion des mandats - Tridisphère Production",
    company: "Tridisphère Production",
    role: "Développeur Fullstack",
    languages: ["React", "NestJS", "MongoDB", "Express"],
    languagesIcons: [
      "fab fa-react",
      "fab fa-nestjs",
      "fab fa-mongodb",
      "fab fa-express",
    ],
    info: "Dévéloppement d'une application web permettant aux professionnels de l'immobilier de suivre les annonces des vendeurs,bailleurs.  - Tridisphère Production",
    achievements: [
      "Interface utilisateur moderne",
      "Responsive design",
      "Gestion de paiement avec Mercanet",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Google Maps API",
      "AsyncStorage",
    ],
    links: {
      demo: "https://www.allomandat.com/",
      github: null,
    },
    isPublic: true,

    inProgress: true,
  },

  // Projet de stage 2022 (inchangé)
  {
    id: 4,
    name: "Progiciel de gestions intégrés- Gestion des inventaires",
    category: "Projet de Stage",
    year: "2022",
    yearSort: 2022,
    monthSort: 6,
    duration: "6 mois",
    status: "Terminé",
    context: "Stage de fin de cycle chez FID MADAGASCAR",
    company: "FID MADAGASCAR",
    languages: ["React", "MariaDB", "Flutter", "CodeIgniter"],
    languagesIcons: [
      "fab fa-react",
      "fab fa-flutter",

      "fab fa-codeigniter",
      "fab fa-database",
    ],
    info: "Création module de gestion des inventaires pour le progiciel de gestion intégrée de FID MADAGASCAR",
    achievements: [
      "Interface utilisateur moderne",
      "Génération de QR code pour les inventaires",
      "Système de filtres et exports de données",
      "API REST pour la gestion des données",
    ],
    links: {
      demo: null,
      github: null,
    },
    isPublic: false,
    stageReport: "Rapport de stage disponible sur demande",
    inProgress: false,
  },

  // Projet universitaire 2021 (inchangé)
  {
    id: 5,
    name: "E-vidy - Plateforme E-commerce",
    category: "Projet Universitaire",
    year: "2021",
    yearSort: 2021,
    monthSort: 6,
    duration: "3 mois",
    status: "Terminé",
    context: "Projet de découverte de Django",
    languages: ["Django", "Python", "HTML/CSS", "Bootstrap", "SQLite"],
    languagesIcons: [
      "fab fa-python",
      "fab fa-python",
      "fab fa-html5",
      "fab fa-css3-alt",
      "fas fa-database",
    ],
    info: "Développement d'une plateforme e-commerce complète avec gestion des utilisateurs, panier, paiement et administration. Interface responsive et système de recommandations.",
    achievements: [
      "Interface utilisateur intuitive et responsive",
      "Système de panier et checkout complet",
      "Panel d'administration pour la gestion des produits",
      "Système d'authentification sécurisé",
    ],
    links: {
      demo: null,
      github: "https://github.com/username/e-vidy",
      documentation: null,
    },
    isPublic: true,
    inProgress: false,
  },
];
