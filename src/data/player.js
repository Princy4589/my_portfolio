export const player = {
  firstName: "Princy",
  lastName: "Rilan",
  role: "Développeur fullstack JS",
  club: "Tridisphère Production",
  nation: "Madagascar",
  city: "Antananarivo",
  available: true,
  experienceLabel: "3+",
  email: "princyandrianantenaina@yahoo.com",
  phone: "+261344727012",
  phoneDisplay: "+261 34 47 270 12",
  linkedin: "https://linkedin.com/in/princy-andrianantenaina",
  github: "https://github.com/princy-andrianantenaina",
  cv: "/media/CV-Princy.pdf",
  photo: "/media/Princy-phot.png",
  tagline: "Des interfaces nettes, des API solides, et l'IA générative comme accélérateur.",
  bio: "Développeur fullstack chez Tridisphère Production. J'interviens sur des produits web en React et NestJS, de l'interface jusqu'à l'API, en équipe. L'IA générative sert à prototyper plus vite ; ce qui part en production est relu.",
  attributes: [
    {
      key: "Front",
      label: "Front",
      value: 86,
      hint: "React, interfaces, détail visuel",
    },
    {
      key: "API",
      label: "API",
      value: 83,
      hint: "NestJS, Node, services",
    },
    {
      key: "Archi",
      label: "Archi",
      value: 84,
      hint: "Structure et sens du produit",
    },
    {
      key: "Tests",
      label: "Tests",
      value: 76,
      hint: "Fiabilité et cas limites",
    },
    {
      key: "Équipe",
      label: "Équipe",
      value: 85,
      hint: "Agile, relecture, transmission",
    },
    {
      key: "IA",
      label: "IA",
      value: 88,
      hint: "Génération, prototype, relecture",
    },
  ],
  practices: [
    {
      icon: "fas fa-laptop-code",
      name: "Interfaces",
      detail: "React, écrans clairs, comportement prévisible.",
    },
    {
      icon: "fas fa-server",
      name: "APIs",
      detail: "NestJS et Node, un contrat net entre l'écran et les données.",
    },
    {
      icon: "fas fa-brain",
      name: "IA générative",
      detail: "Recherche et prototype plus rapides, puis relecture avant livraison.",
    },
    {
      icon: "fas fa-users",
      name: "Équipe",
      detail: "Petits effectifs, agile, transmission au fil des revues.",
    },
  ],
};

export function meterTone(value) {
  if (value >= 85) return "is-hot";
  if (value < 80) return "is-low";
  return "";
}
