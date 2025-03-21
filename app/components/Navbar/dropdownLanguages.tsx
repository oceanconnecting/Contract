"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/Dropdown ";
import { GrLanguage } from "react-icons/gr";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, startTransition } from "react";
import { useLocale } from "next-intl";
import Image from "next/image"; 
import fr from "../../../public/lang/fr.jpg"
import en from "../../../public/lang/en.png"
import de from "../../../public/lang/de.png";
import es from "../../../public/lang/es.png";
const availableLocales = ["en", "fr", "de", "es"]; // Définition des langues disponibles

const DropdownMenuLanguages = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [selectedLang, setSelectedLang] = useState(currentLocale);

  useEffect(() => {
    setSelectedLang(currentLocale);
  }, [currentLocale]);

  const changeLanguage = (newLocale: string) => {
    if (newLocale !== currentLocale) {
      startTransition(() => {
        // Remplace la locale actuelle dans l'URL sans en ajouter plusieurs
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        router.replace(newPath);
      });
    }
  };
  

  return (
    <div className="relative m-10">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2  rounded-lg hover:bg-gray-200 transition">
          <GrLanguage size={25} className="text-gray-700 text-lg " />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-25 bg-white rounded-lg shadow-lg mt-2 border">
          {[
            // { lang: "ar", flag: "https://img.icons8.com/emoji/48/saudi-arabia-emoji.png", label: "Ar" },
            { lang: "fr", flag:fr, label: "Fr" },
            { lang: "en", flag:en, label: "EN" },
            { lang: "de", flag:de, label: "DE" },
            { lang: "es", flag:es, label: "ES" },
          ].map(({ lang, flag, label }) => (
            <DropdownMenuItem
              key={lang}
              className={`flex items-center px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer ${
                selectedLang === lang ? "font-bold text-blue-600" : ""
              }`}
              onClick={() => changeLanguage(lang)}
            >
              <Image src={flag} alt={`${label} Flag`} width="20" height="20" />
              <span className="ml-2">{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuLanguages;
