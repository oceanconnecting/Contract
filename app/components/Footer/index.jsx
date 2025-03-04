"use client";

import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { PiPhoneCallFill, PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";



const Footer = ( ) =>  {

const socialLinks = [
    { "id": 1, "label": "Facebook", "to": "https://www.facebook.com/the.ocean.connecting/" },
    { "id": 2, "label": "Instagram", "to": "https://www.instagram.com/oceanconnecting.ma/" },
    { "id": 3, "label": "YouTube", "to": "https://www.youtube.com/@OceanConnecting" },
    { "id": 4, "label": "LinkedIn", "to": "https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" }
];
const contactInfo = [
    {
      "id": 1,
      "Icon": "HiLocationMarker",
      "title": "Adresse",
      "content": "Immeubles Coralia, 2ème étage, ISLAN, Hay Mohammadi, AGADIR",
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
];
const pageElements = [
    
    { "id": 1, "label": "Demande de Devis", "link": "/Devis"},
    { "id": 2, "label": "Services", "link": "/#service" },
    { "id": 3, "label": "Gallery", "link": "/gallery" },
    { "id": 4, "label": "À propos de nous", "link": "/#about-section" },
    { "id": 5, "label": "Contactez-nous", "link": "/contact"}
      
];
const ourFormation = [
    { "id": 1, "label": "Nettoyage des façades", "link": "/nettoyage-des-interfaces" },
      { "id": 2, "label": "Nettoyage des panneaux solaires", "link": "/nettoyage-des-panneaux-solaires" },
      { "id": 3, "label": "Maintenance électrique à domicile", "link": "/reparations-electriques-a-domicile" },
      { "id": 4, "label": "Plomberie et canalisation a domicile", "link": "/reparations-de-l-eauA-a-domicile" },
      { "id": 5, "label": "Destruction des insectes nuisibles", "link": "/destruction-des-insectes-nuisibles" }
];
const ourServices = [
  { "id": 1, "label": "Development Informatique", "link": "https://www.oceanconnecting.dev/" },
  { "id": 2, "label": "Language Center", "link": "https://oceanconnecting.info/" },
  { "id": 3, "label": "Formation", "link": "https://www.oceanconnecting.net/" },
  { "id": 4, "label": "Nettoyage et Réparation", "link": "https://www.oceanconnecting.org/" },
  { "id": 5, "label": "Recrutement", "link": "https://www.oceanconnecting.org/" } 
];


  return (
    <footer className="bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 pt-4 text-black  ">
      <div
        className="container mx-auto px-4 md:px-6 lg:px-8"
        style={{
          backgroundImage:
            'url("https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map(({ id, Icon, title, content }) => (
            <div key={id} className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md mx-1">
                {Icon === "HiLocationMarker" && (
                  <HiLocationMarker className="h-6 w-6 text-white" />
                )}
                {Icon === "PiPhoneCallFill" && (
                  <PiPhoneCallFill className="h-6 w-6 text-white" />
                )}
                {Icon === "MdMarkEmailRead" && (
                  <MdMarkEmailRead className="h-6 w-6 text-white" />
                )}
              </div>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p
                  className="text-sm font-semibold "
                  style={{ direction: "ltr", unicodeBidi: "plaintext" }}
                >
                  {content}
                </p>
              </div>
            </div>
          ))}
          <div className="flex items-center space-x-3">
            {socialLinks.map(({ id, label, to }) => (
              <div key={id} className="bg-[#3a86ff] p-2 rounded-md mx-1">
                <Link
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-500"
                  aria-label={label}
                >
                  {label === "Facebook" && (
                    <FaFacebookF className="h-6 w-6 text-white" />
                  )}
                  {label === "Instagram" && (
                    <PiInstagramLogoFill className="h-6 w-6 text-white" />
                  )}
                  {label === "YouTube" && (
                    <IoLogoYoutube className="h-6 w-6 text-white" />
                  )}
                  {label === "LinkedIn" && (
                    <ImLinkedin2 className="h-6 w-6 text-white" />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="space-y-2 lg:col-span-2 mr-6 ">
            <div className="flex items-center mb-4 space-x-2">
              <Image
                src="/assets/Logo/ocean2.svg"
                alt="RAKAR Logo"
                width={240}
                height={50}
              />
            </div>
            <p className="text-sm">NOUS SOMMES PROFESSIONNELS</p>
            <p className="text-sm">Ocean Connecting offre des services de nettoyage de façades vitrées, plomberie, électricité et extermination des nuisibles, avec une équipe experte pour garantir votre satisfaction. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:col-span-4  ">
            <FooterLinkSection
              title="Nos pages"
              links={pageElements}
              className="items-center"
            />
        
          </div>
        </div>
        <div className="mt-2">
          <hr className="content-center my-4 border-t-2 border-gray700" />
          <div>
            <div className="flex flex-col items-center space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 pb-4">
              <p className="font-semibold text-md">
              Droit d&apos;auteur ©   {new Date().getFullYear()}{" "}
                <Link href="/#" className="text-blue-600 hover:text-white">
                Ocean Connecting
                </Link>
                . Tous droits réservés.
              </p>
              <p className="font-semibold text-md ">
              Merci de votre visite et bienvenue à 
                <Link href="/#" className="text-blue-600 ml-2 hover:text-white">
                Ocean Connecting
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function FooterLinkSection({ title, links }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="space-y-1">
        {links.map(({ id, label, link }) => (
          <li key={id}>
            <Link href={link} className="text-sm hover:text-[#3a86ff]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Footer;
