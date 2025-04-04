import { StaticImageData } from "next/image";



export interface Contract {
  id: number;
  imageUrl: string | StaticImageData; // Image associée au contrat (ex: logo de l'entreprise)
  city?: string; // Ville où le contrat est proposé
  // Informations générales
  country: string; // Pays où le contrat est proposé
  sector: {
        [key: string]: string | undefined;
    }; // Secteur d'activité (ex: { "IT": "Développement Web" })
  language?: string; // Langue requise pour le poste
  levelLanguage?: string; // Niveau de langue requis
  level?: string; // Niveau d'études requis
  experience?: string; // Expérience requise
  international: boolean; // Indique si c'est un contrat international
  
  // Détails du contrat
  visaDuration?: number; // Durée du visa en mois
  contractDuration?: number; // Durée du contrat en mois
  contractPrice?: number; // Prix ou rémunération (en euros ou autre devise)
  additionalInfo?: string; // Informations supplémentaires (logement, avantages, etc.)
  
  // Localisation
  latitude?: number;
  longitude?: number;
  
  // Métadonnées
  icon?: string; // Icône associée (ex: drapeau, logo)
  label?: string; // Libellé court du contrat
  link?: string; // Lien vers la page du contrat ou candidature
}

  