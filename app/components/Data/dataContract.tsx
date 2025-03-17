import { Contract } from '.././../../contract';
import croatia from 'public/Contracts/croatia.jpg';
import germany from 'public/Contracts/germany.jpeg'; 
import belgique from 'public/Contracts/Belgique.jpg';
import italie from 'public/Contracts/Italie.jpg';
import spanish from 'public/Contracts/spanish.jpg';

const DataContract: Contract[] = [
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
            electrique: "Électrique",
            Climatisation: "Climatisation",
            Permis: "Permis de conduire D",
            Boucherie: "Boucherie",
            Hotellerie: "Hôtellerie",
        },
        language: "Langue non requise",
        levelLanguage: "Aucun",  // Example level (could be adjusted depending on context)
        level: "Aucun",  // Example level (could be adjusted depending on context)
        experience: "Aucune",  // Example experience (could be adjusted depending on context)
        visaDuration: 5,
        contractDuration: 12,
        contractPrice: 60000,
        additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
        international: true,
        latitude: 45.1,
        longitude: 15.2,
        icon: "/assets/contract/bulgim.svg",
        label: "Un contrat en Croatie dans différents secteurs ",
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
    },
    {
        id: 2,
        imageUrl: germany,
        country: "Allemagne",
        city: "Berlin",
        sector: {
            Sante: "Santé",
            Soins_infirmiers: "Soins infirmiers",
            Hotels: "Hôtels",
            Programmation: "Programmation",
        },
        language: "Langue requise B1",
        levelLanguage: "B1",  // B1 level example
        level: "Bac+2",  // Example level (could be adjusted depending on context)
        experience: "2 ans d'expérience",  // Example experience (could be adjusted depending on context)
        visaDuration: 8,
        contractDuration: 12,
        contractPrice: 80000,
        additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
        international: true,
        latitude: 51.1657,
        longitude: 10.4515,
        icon: "/assets/contract/bulgim.svg",
        label: "Un contrat en Allemagne dans des secteurs variés ",
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
    },
    {
        id: 3,
        imageUrl: belgique,
        country: "Belgique",
        city: "Bruxelles",
        sector: {
            Sante: "Santé",
            Soins_infirmiers: "Soins infirmiers",
            Hotels: "Hôtels",
            Programmation: "Programmation",
        },
        language: "Langue requise B1",
        levelLanguage: "B1",  // B1 level example
        level: "Bac+3",  // Example level (could be adjusted depending on context)
        experience: "3 ans d'expérience",  // Example experience (could be adjusted depending on context)
        visaDuration: 8,
        contractDuration: 12,
        contractPrice: 60000,
        additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
        international: true,
        latitude: 50.8503,
        longitude: 4.3517,
        icon: "/assets/contract/bulgim.svg",
        label: "Un contrat en Belgique dans defferente secteur les secteurs ",
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
    },
    {
        id: 4,
        imageUrl: italie,
        country: "Italie",
        city: "Rome",
        sector: {
            Sante: "Santé",
            Soins_infirmiers: "Soins infirmiers",
            Hotellerie: "Hôtellerie",
            Agriculture: "Agriculture",
        },
        language: "Langue requise B1",
        levelLanguage: "B1",  // B1 level example
        level: "Bac+2",  // Example level (could be adjusted depending on context)
        experience: "2 ans d'expérience",  // Example experience (could be adjusted depending on context)
        visaDuration: 8,
        contractDuration: 12,
        contractPrice: 60000,
        additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
        international: true,
        latitude: 41.8719,
        longitude: 12.5674,
        icon: "/assets/contract/bulgim.svg",
        label: "Un contrat en Italie dans defferente secteurs ",
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
    },
    {
        id: 5,
        imageUrl: spanish,
        country: "Espagne",
        city: "Madrid",
        sector: {
            Sante: "Santé",
            Soins_infirmiers: "Soins infirmiers",
            Hotellerie: "Hôtellerie",
            Agriculture: "Agriculture",
        },
        language: "Langue requise B1",
        levelLanguage: "B1",  // B1 level example
        level: "Bac+3",  // Example level (could be adjusted depending on context)
        experience: "3 ans d'expérience",  // Example experience (could be adjusted depending on context)
        visaDuration: 8,
        contractDuration: 12,
        contractPrice: 60000,
        additionalInfo: "Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.",
        international: true,
        latitude: 40.4637,
        longitude: -3.7492,
        icon: "/assets/contract/bulgim.svg",
        label: "Un contrat en Espagne dans les secteurs de la santé, de l'agriculture et de l'hôtellerie, avec une durée de 12 mois et un visa de 8 mois nécessitant un niveau de langue B1.",
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=...",
    },
];

export default function getDataContract(): Contract[] {
    return DataContract;
}
