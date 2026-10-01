export const adhesion =
  "https://www.helloasso.com/associations/ispb-chess-club/adhesions/adhesion/";
export const instagram = "https://www.instagram.com/ispbchessclub/";

export const links = [
  ["Le club", "#club"],
  ["Les rendez-vous", "#planning"],
  ["Le bureau", "#bureau"],
  ["Progresser", "#cours"],
];

export const members = [
  { name: "Trong-Thi", role: "Président", image: "trungti.webp" },
  { name: "Maximilien", role: "Trésorier", image: "maximilien.webp" },
  { name: "Arthur", role: "Secrétaire", image: null },
  { name: "Lina", role: "VP Com’", image: "lina.webp" },
];

type FAQ = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};
export const faqs: FAQ[] = [
  {
    question: "Je n’ai jamais joué. Je peux venir ?",
    answer:
      "Bien sûr. Tu peux venir même si tu ne sais pas encore comment bouge un cavalier. On commence par les règles, puis on joue une première partie ensemble. Pas de niveau minimum, pas de classement à montrer.",
  },
  {
    question: "Je peux essayer avant d’adhérer ?",
    answer:
      "Oui, viens découvrir le club lors d’une séance d’essai. Écris-nous avant de passer pour confirmer la salle et le prochain rendez-vous. Tu pourras rencontrer les membres et voir si ça te plaît.",
    link: {
      label: "Demander une séance d’essai",
      href: "mailto:ispbchessclub@gmail.com",
    },
  },
  {
    question: "Faut-il apporter son échiquier ?",
    answer:
      "Les échiquiers du club sont là pour jouer ensemble. Tu peux apporter le tien si tu en as envie, mais venir les mains dans les poches, ça marche aussi. Et si tu as une partie à nous montrer, apporte les coups ou une photo de la position.",
  },
  {
    question: "Où et quand se retrouve-t-on ?",
    answer:
      "Le créneau habituel est le mardi de 17h15 à 19h15, sur le campus de Lyon 1 à l’ISPB. La salle peut changer d’une semaine à l’autre. Pour la reprise et le planning actuel, demande au bureau avant de venir.",
    link: {
      label: "Écrire au bureau",
      href: "mailto:ispbchessclub@gmail.com",
    },
  },
  {
    question: "Comment adhérer, et combien ça coûte ?",
    answer:
      "L’adhésion se fait sur HelloAsso. Le tarif et les conditions figurent sur la campagne disponible. Si tu ne trouves pas la campagne de cette année, contacte le bureau avant de régler ton adhésion.",
    link: { label: "Voir l’adhésion sur HelloAsso", href: adhesion },
  },
  {
    question: "Il faut participer aux tournois ?",
    answer:
      "Tu peux venir pour les parties libres et apprendre sans chercher la compétition. Si tu veux jouer en tournoi, les dates et les modalités sont annoncées séparément. Aucune prochaine édition n’est confirmée sur le site pour le moment.",
  },
  {
    question: "Je peux apprendre entre deux séances ?",
    answer:
      "Oui. La playlist rassemble les cours en vidéo du club. Regarde-les à ton rythme, essaie les idées sur un échiquier et garde tes questions pour la prochaine séance. Tu trouveras le lecteur dans la rubrique Progresser.",
    link: { label: "Retrouver les cours", href: "#cours" },
  },
  {
    question: "Comment suivre les nouvelles du club ?",
    answer:
      "Retrouve le club sur Instagram pour les nouvelles et les rendez-vous. Pour une question sur une séance, l’adhésion ou une proposition de tournoi, un mail au bureau reste le plus simple.",
    link: { label: "Retrouver le club sur Instagram", href: instagram },
  },
];
