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
  tagline: "J'écris l'interface et le service. L'IA accélère, la relecture décide.",
  bio: "Fullstack chez Tridisphère Production, à Antananarivo. React pour l'interface, NestJS pour le service.",
  attributes: [
    {
      key: "Front",
      label: "Front",
      value: 82,
      hint: "React, interfaces, détail visuel",
    },
    {
      key: "API",
      label: "API",
      value: 87,
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
      value: 72,
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
      detail: "React, du premier écran jusqu'au détail qui se voit.",
    },
    {
      icon: "fas fa-server",
      name: "APIs",
      detail: "NestJS et Node. Un contrat clair entre l'écran et les données.",
    },
    {
      icon: "fas fa-brain",
      name: "IA générative",
      detail: "Je prototype plus vite, puis je relis avant de livrer.",
    },
    {
      icon: "fas fa-users",
      name: "Équipe",
      detail: "Petites équipes, agile, relecture partagée.",
    },
  ],
};

export function meterTone(value) {
  if (value >= 85) return "is-hot";
  if (value < 80) return "is-low";
  return "";
}
