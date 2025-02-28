"use client";

import React from "react";
import { heroSectionContent } from "../Data/data";
import { contractContent } from "../Data/data";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter, useParams } from "next/navigation"; // ✅ Importer useParams

const LeafletMap = dynamic(() => import("./leaflet"), { ssr: false });

const HeroSection = () => {
  const router = useRouter();
  const { locale } = useParams(); // ✅ Récupérer la locale

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/${locale}/Contact`); // ✅ Corrigé
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 py-6 text-black">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img
          className="w-full h-auto"
          src="https://d33wubrfki0l68.cloudfrontnet/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
          alt="Background Pattern"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
      <section className="mt-20 mb-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 lg:text-left mb-8 lg:mb-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <p className="font-bold leading-tight text-gray-900 sm:text-3xl md:text-3xl lg:text-4xl">
                  {heroSectionContent?.title || "Default Title"}
                </p>
                <p className="text-gray-700 sm:text-sm lg:text-md mt-4 lg:mt-6">
                  {heroSectionContent?.description || "Default description"}
                </p>
              </div>
              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <Link
                  title=""
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105 leafbutton"
                  type="button"
                  href={`/${locale}/Contact`} // ✅ Ajouter locale
                  onClick={handleClick}
                >
                  Contact Us
                </Link>
                <Link
                  title=""
                  className="inline-flex items-center px-4 py-4 text-lg font-bold transition-all duration-200 bg-transparent rounded-xl hover:bg-gradient-to-r from-blue-600 to-red-600 hover:text-white hover:to-red-500 transform hover:scale-105 leafbutton"
                  role="button"
                  href="/form/Formulaire.pdf"
                  download="Formulaire.pdf"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  Télécharger le formulaire
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full h-auto sm:h-72 lg:h-auto max-w-lg z-0">
                <LeafletMap contracts={contractContent?.contracts || []} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
