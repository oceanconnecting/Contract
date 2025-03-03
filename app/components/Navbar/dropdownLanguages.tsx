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

const availableLocales = ["en", "fr"]; // Définition des langues disponibles

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
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <GrLanguage size={25} className="text-gray-700" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32 bg-white rounded-lg shadow-lg mt-2 border">
          {[
            { lang: "fr", flag: "https://img.icons8.com/emoji/48/france-emoji.png", label: "Fr" },
            // { lang: "ar", flag: "https://img.icons8.com/emoji/48/saudi-arabia-emoji.png", label: "Ar" },
            { lang: "en", flag: "https://img.icons8.com/emoji/48/united-kingdom-emoji.png", label: "EN" },
          ].map(({ lang, flag, label }) => (
            <DropdownMenuItem
              key={lang}
              className={`flex items-center px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer ${
                selectedLang === lang ? "font-bold text-blue-600" : ""
              }`}
              onClick={() => changeLanguage(lang)}
            >
              <img src={flag} alt={`${label} Flag`} width="20" height="20" />
              <span className="ml-2">{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuLanguages;
