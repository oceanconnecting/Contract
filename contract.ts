import { StaticImageData } from "next/image";

export interface Contract {
    id: number;
    imageUrl: string | StaticImageData;
    country?: string;
    sector: {

      [key: string]: string | undefined;
  
    };
    language?: string;
    visaDuration?: string;
    contractDuration?: string;
    contractPrice?: string;
    additionalInfo?: string;
    international?: string;
    latitude?: number;
    longitude?: number;
    icon?: string;
    label?: string;
    link?: string;
  }
  