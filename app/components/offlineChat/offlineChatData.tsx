interface OfflineChatbotProps {
    id: number; 
    question: string;
    answer: string;
    followUp: number[];
  }
const offlineChatbotData:OfflineChatbotProps[]= [
    {
      id: 1,
      question: "Durée du contrat  ?",
      answer: "Le contrat est d'une durée d'un an et peut être renouvelé jusqu'à cinq ans, ce qui garantit une stabilité et une croissance à long terme.",
      followUp: [2, 3, 4],
    },
    {
      id: 2,
      question: "Le service est-il disponible dans toutes les villes ou seulement à Agadir et Casablanca ??",
      answer: "Oui, nous traitons les demandes pour toutes les villes, pas seulement Casablanca, ce qui garantit que nos services sont accessibles où que vous soyez.",
      followUp: [5, 6],
    },
    {
      id: 3,
      question: "Un hébergement est-il prévu ?",
      answer: "L'hébergement et les soins médicaux sont fournis pour assurer votre confort et votre santé..",
      followUp: [7, 8],
    },
    {
      id: 4,
      question: "Quelqu'un a-t-il déjà eu recours à vos services ?",
      answer: "Oui, de nombreuses personnes ont utilisé nos services avec succès et ont trouvé des opportunités d'emploi intéressantes en Europe.",
      followUp: [9],
    },
    {
        id: 6,
        question: "Y a-t-il des frais à payer pour bénéficier du service ?",
        answer: "Non, notre service est totalement gratuit pour les candidats. Nous nous chargeons de toutes les démarches administratives et du placement sans aucun frais caché.",
        followUp: [12],
      },
      {
        id: 7,
        question: "Quels types d’emplois sont proposés ?",
        answer: "Nous proposons divers types d’emplois en fonction de votre profil, notamment dans l’hôtellerie, la restauration, l’informatique et d'autres secteurs en demande.",
        followUp: [13, 14],
      },
      {
        id: 8,
        question: "Quel est le délai de traitement des demandes ?",
        answer: "Le délai varie selon la demande et les documents requis, mais en général, cela prend entre deux et six semaines.",
        followUp: [15],
      },
      {
        id: 9,
        question: "Dois-je passer un entretien avant de partir ?",
        answer: "Oui, un entretien est souvent nécessaire pour évaluer votre profil et vos compétences. Nous vous préparons afin de maximiser vos chances de réussite.",
        followUp: [16, 17],
      },
      {
        id: 10,
        question: "L'accompagnement inclut-il l'obtention du visa ?",
        answer: "Oui, nous vous assistons dans la préparation des documents et la demande de visa afin de faciliter votre départ.",
        followUp: [],
      }
      
   
  ];
  export default function OfflineChatbotData(): OfflineChatbotProps[] {
    return offlineChatbotData;
  }