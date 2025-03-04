"use client";

import React from "react";
import { heroSectionContent } from "../Data/data";
import { contractContent } from "../Data/data";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter, useParams } from "next/navigation"; // ✅ Importer useParams
import { FlipWordsDemo } from "./FlipWord";
import { useTranslations } from "next-intl";

const LeafletMap = dynamic(() => import("./leaflet"), { ssr: false });

const HeroSection = () => {
  const tt=useTranslations("homepage.HeroSection")
  const router = useRouter();
  const { locale } = useParams(); // ✅ Récupérer la locale

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/${locale}/Contact`); // ✅ Corrigé
  };

  return (
    <div className="  grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 relative bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 py-6 text-black">




      {/* <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <div
          className="w-full h-auto"
          
      
        >
                          <LeafletMap contracts={contractContent?.contracts || []} />
        </div>
      </div> */}
      <section className="mt-20 mb-5">
        <div className="px-1 mx-auto sm:px-6 lg:px-8 max-w-full">
          <div className=" gap-4 items-center">
            <div className="text-start lg:text-left">
                <div className="text-center"> {/* Alignement global au centre */}
                    <div className="w-full max-w-full mx-auto"> {/* Conteneur avec une largeur maximale */}
                      <p>  
                        <FlipWordsDemo />
                      </p>
                      <p className="text-gray-700 w-1/2 sm:text-sm lg:text-md mt-4 lg:mt-6 mx-auto text-center">
                        {tt("banner.description")}
                      </p>
                    </div>
              </div>
              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-center sm:space-x-5 lg:mt-12">
                <Link
                  title=""
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105 leafbutton"
                  type="button"
                  href={`/${locale}/Contact`} // ✅ Ajouter locale
                  onClick={handleClick}
                >
                  {tt("banner.contact")} 
                </Link>
                <a
                        href="/form/Formulaire.pdf"
                        download="Formulaire.pdf"
                        className="inline-flex items-center px-4 py-4 text-lg font-bold transition-all duration-200 bg-transparent rounded-xl hover:bg-gradient-to-r from-blue-600 to-red-600 hover:text-white hover:to-red-500 transform hover:scale-105 leafbutton"
                      >
                       {tt("banner.form")}
                      </a>
                      <Link
                  title=""
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105 leafbutton"
                  type="button"
                  href={`/${locale}/Contact`} // ✅ Ajouter locale
                  onClick={handleClick}
                >
                  {tt("banner.contact")} 
                </Link>
              </div>
            </div>
            {/* <div className="flex justify-center lg:justify-center">
              <div className="relative w-full h-auto sm:h-72 lg:h-auto max-w-lg z-0">
                <LeafletMap contracts={contractContent?.contracts || []} />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;