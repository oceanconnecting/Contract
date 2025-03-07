// import img from '@public/Contracts/Croatia.jpg';
import croatia from 'public/Contracts/croatia.jpg';
import germany from 'public/Contracts/germany.jpeg'; 
import belgique from 'public/Contracts/Belgique.jpg';
import italie from 'public/Contracts/Italie.jpg';
import spanish from 'public/Contracts/spanish.jpg';

export const heroSectionContent = {
    title1: 'Get a work contract in Europe',
    title2: 'as soon as possible',
    description: "Bienvenue à OceanConnecting ! Nous sommes là pour vous aider à trouver des opportunités d'emploi satisfaisantes en Europe, en vous fournissant des contrats de travail et en nous occupant de tous les documents nécessaires pour une transition en douceur. Laissez-nous vous guider vers un emploi intéressant à travers le continent.",
    avatars: [
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png',
        alt: 'Avatar 1',
      },
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png',
        alt: 'Avatar 2',
      },
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png',
        alt: 'Avatar 3',
      },
    ],
    joinText1: "S'associer à ",
    joinText2: "Plus de 600 travailleurs à l'étranger ",
    joinText3: ' et commencez à réaliser vos rêves et vos désirs avec OceanConnecting',
    buttons: [
      {
        text: 'Contact US',
        link: '/contract',
        className: 'inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105',
      },
      {
        text: 'Télécharger le formulaire',
        link: '/contract',
        className: 'inline-flex items-center px-4 py-4 text-lg font-bold transition-all duration-200 bg-transparent border rounded-xl hover:bg-gradient-to-r from-blue-600 to-red-600 hover:text-white hover:to-red-500 transform hover:scale-105',
        icon: {
          svgPath: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
        },
      },
    ],
  };

  export const contractContent = {
    title: "Pays disponibles pour la recherche d'emploi à l'étranger",
    description: "Trouvez des opportunités d'emploi en Europe avec OceanConnecting. Nous facilitons l'accès aux marchés du travail européens et aidons à obtenir les contrats et documents nécessaires. Rejoignez-nous pour démarrer facilement votre carrière en Europe.",
    button:'To Apply',
   contracts: [
      {
          id: 1,
          imageUrl: croatia,
          city: "Zagreb",
          country: "Croatie",
          sector: {
              Construction: "Construction",
              Forge: "Forge",
              Menuiserie: "Menuiserie",
              Peinture: "Peinture",
              Mecanique: "Mécanique",
              Electrique: "Électrique",
              Climatisation: "Climatisation",
              Permis: "Permis de conduire D",
              Boucherie: "Boucherie",
              Hotellerie: "Hôtellerie",
          },
          language: "Langue non requise",
          visaDuration: 5,
          contractDuration: 12,
          contractPrice: 60000,
          additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
          international: true,
          latitude: 45.1,
          longitude: 15.2,
          icon: "/assets/contract/bulgim.svg",
          label: "Un contrat en Croatie dans différents secteurs comme la construction, l'hôtellerie, et plus, avec une durée de contrat de 12 mois et un visa de 5 ans.",
          link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
      },
      {
          id: 2,
          imageUrl: germany,
          country: "Allemagne",
          sector: {
              Sante: "Santé",
              Soins_infirmiers: "Soins infirmiers",
              Hotels: "Hôtels",
              Programmation: "Programmation",
          },
          language: "Langue requise B1",
          visaDuration: 8,
          contractDuration: 12,
          contractPrice: 80000,
          additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
          international: true,
          latitude: 51.1657,
          longitude: 10.4515,
          icon: "/assets/contract/bulgim.svg",
          label: "Un contrat en Allemagne dans des secteurs variés comme la santé et la programmation, avec une durée de contrat de 12 mois et un visa de 8 mois nécessitant un niveau de langue B1.",
          link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
      },
      {
          id: 3,
          imageUrl: belgique,
          country: "Belgique",
          sector: {
              Sante: "Santé",
              Soins_infirmiers: "Soins infirmiers",
              Hotels: "Hôtels",
              Programmation: "Programmation",
          },
          language: "Langue requise B1",
          visaDuration: 8,
          contractDuration: 12,
          contractPrice: 60000,
          additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
          international: true,
          latitude: 50.8503,
          longitude: 4.3517,
          icon: "/assets/contract/bulgim.svg",
          label: "Un contrat en Belgique dans les secteurs de la santé, de l'hôtellerie et de la programmation, avec une durée de 12 mois et un visa de 8 mois nécessitant un niveau de langue B1.",
          link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
      },
      {
          id: 4,
          imageUrl: italie,
          country: "Italie",
          sector: {
              Sante: "Santé",
              Soins_infirmiers: "Soins infirmiers",
              Hotellerie: "Hôtellerie",
              Agriculture: "Agriculture",
          },
          language: "Langue requise B1",
          visaDuration: 8,
          contractDuration: 12,
          contractPrice: 60000,
          additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
          international: true,
          latitude: 41.8719,
          longitude: 12.5674,
          icon: "/assets/contract/bulgim.svg",
          label: "Un contrat en Italie dans les secteurs de la santé, de l'agriculture, et de l'hôtellerie, avec un visa de 8 mois et une exigence de langue B1.",
          link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
      },
      {
          id: 5,
          imageUrl: spanish,
          country: "Espagne",
          sector: {
              Sante: "Santé",
              Soins_infirmiers: "Soins infirmiers",
              Hotellerie: "Hôtellerie",
              Agriculture: "Agriculture",
          },
          language: "Langue requise B1",
          visaDuration: 8,
          contractDuration: 12,
          contractPrice: 60000,
          additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
          international: true,
          latitude: 40.4637,
          longitude: -3.7492,
          icon: "/assets/contract/bulgim.svg",
          label: "Espagne",
          link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
      },
  ]
  
  };

  export const footerData = {
    "socialLinks": [ // Changed from array to object
        { "id": 1, "label": "Facebook", "to": "https://www.facebook.com/the.ocean.connecting/" },
        { "id": 2, "label": "Instagram", "to": "https://www.instagram.com/oceanconnecting.ma/" },
        { "id": 3, "label": "YouTube", "to": "https://www.youtube.com/@OceanConnecting" },
        { "id": 4, "label": "LinkedIn", "to": "https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" }
    ],
    "contactInfo": [
        {
            "id": 1,
            "Icon": "HiLocationMarker",
            "title": "Adresse",
            "content": "Immeubles Coralia, 2ème étage, ISLAN, Hay Mohammadi, AGADIR"
        },
        {
            "id": 2,
            "Icon": "PiPhoneCallFill",
            "title": "Appelez-nous",
            "content": "+212 704-309787"
        },
        {
            "id": 3,
            "Icon": "MdMarkEmailRead",
            "title": "Envoyez-nous un e-mail",
            "content": "oceanconnecting.ma@gmail.com"
        }
    ],
    "pageElements": [
        { "id": 1, "label": "Accueil", "link": "/Home" },
        { "id": 2, "label": "Services", "link": "/Services" },
        { "id": 3, "label": "Formation", "link": "/Formation" },
        { "id": 4, "label": "À propos de nous", "link": "/About" },
        { "id": 5, "label": "Contact", "link": "/Contact" }
    ],
    "pagelangague": [
        { "id": 1, "label": "Anglais", "link": "/Home" },
        { "id": 2, "label": "Espagnol", "link": "/Services" },
        { "id": 3, "label": "Allemagne", "link": "/Formation" },
        { "id": 4, "label": "Italie", "link": "/About" },
        { "id": 5, "label": "Frances", "link": "/Contact" }
    ],
    "ourServices": [
        { "id": 1, "label": "Development Informatique", "link": "/Development" },
        { "id": 2, "label": "Formation", "link": "/Formation" },
        { "id": 3, "label": "Des façades propres", "link": "/facades" },
        { "id": 4, "label": "Recrutement", "link": "/Recruitment" },
        { "id": 5, "label": "Domiciliation", "link": "/Domiciliation" }
    ],
    "ourFormation": [
        { "id": 1, "label": "First aid", "link": "/Development" },
        { "id": 2, "label": "Dj training", "link": "/Formation" },
        { "id": 3, "label": "elevator training", "link": "/facades" },
        { "id": 4, "label": "airport checkin agent training", "link": "/Recruitment" },
        { "id": 5, "label": "training in cinematography and directing", "link": "/Domiciliation" }
    ],
    "footerText": {
        "logoAlt": "RAKAR Logo",
        "mainDescription": "NOUS SOMMES PROFESSIONNELS",
        "detailedDescription": "Nous sommes spécialisés dans le placement et l'assistance documentaire à l'échelle mondiale, offrant un soutien sur mesure dans plusieurs langues pour vous aider à naviguer dans les opportunités de carrière internationales.",
        "ourServicesTitle": "Nos services",
        "ourPageTitle": "Nos pages",
        "ourlangagueTitle": "Langues enseignées",
        "ourFormationTitle": "Formation",

    },
    "footerCopyright": {
        "text": "Droit d'auteur © ",
        "company": "Ocean Connecting",
        "allRightsReserved": "Tous droits réservés.",
        "message": "Merci de votre visite et bienvenue à ",

    }
}; 

