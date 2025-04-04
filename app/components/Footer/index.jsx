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
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";
import ocean2 from "../../../public/assets/logo/ocean2.svg"
import ocean1 from "../../../public/assets/logo/ocean1.svg";
const Footer = ( ) =>  {
  const t=useTranslations("homepage.footer")
  const locale = useLocale(); // Récupère la langue actuelle
  const socialLinks = [
    { "id": 1, "label": "Facebook", "to": "https://www.facebook.com/the.ocean.connecting/" },
    { "id": 2, "label": "Instagram", "to": "https://www.instagram.com/oceanconnecting.ma/" },
    { "id": 3, "label": "YouTube", "to": "https://www.youtube.com/@OceanConnecting" },
    { "id": 4, "label": "LinkedIn", "to": "https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" }
];
const contactInfo = [
    {
      id: 1,
      Icon: "HiLocationMarker",
      title: t("contactInfo.contact1.title"),
      content: "Immeubles Coralia, 2ème étage, ISLAN, Hay Mohammadi, AGADIR",
    },
    {
      id: 2,
      Icon: "PiPhoneCallFill",
      title: t("contactInfo.contact2.title"),
      content: ["+212 657-236635", "+212 808649090", "+49 15157575045"],
    },
    {
      id: 3,
      Icon: "MdMarkEmailRead",
      title: t("contactInfo.contact3.title"),
      content: "oceanconnecting.org@gmail.com",
    },
  ];
  const pageElements = [
    { id: 1, label: t("pageElements.page1.label"), link: "/Devis" },
    // { name: tt("navbare.umrah"), href: `/${locale}/umrah`, current: false },
    { id: 2, label:  t("pageElements.page2.label"), link: "/#services" },
    { id: 3, label: t("pageElements.page3.label"), link: `/${locale}/umrah` },
    { id: 4, label:  t("pageElements.page4.label"), link: "/#why" },
    { id: 5, label: t("pageElements.page5.label"), link: "/#project" },
  ];

  const ourFormation = [
    {
      id: 1,
      label:  t("ourFormation.formation1.label"),
      link: "https://oceanconnecting.net/en/nettoyage-des-interfaces",
    },
    {
      id: 2,
      label:  t("ourFormation.formation2.label"),
      link: "https://oceanconnecting.net/en/nettoyage-des-panneaux-solaires",
    },
    {
      id: 3,
      label: t("ourFormation.formation3.label"),
      link: "https://oceanconnecting.net/en/reparations-electriques-a-domicile",
    },
    {
      id: 4,
      label: t("ourFormation.formation4.label"),
      link: "https://oceanconnecting.net/en/reparations-de-l-eau-a-domicile",
    },
    {
      id: 5,
      label: t("ourFormation.formation5.label"),
      link: "https://oceanconnecting.net/en/destruction-des-insectes-nuisibles",
    },
  ];

  const ourServices = [
    {
      id: 1,
      label: t("ourServices.service1.label"),
      link: "https://www.oceanconnecting.dev/",
    },
    { id: 2,
       label: t("ourServices.service2.label"),
       link: "https://www.oceanconnecting.net/" 
      },
      { id: 3,
        label: t("ourServices.service3.label"),
        link: "https://www.oceanconnecting.ma/" },
        { id: 4,
           label: t("ourServices.service5.label"),
           link: "https://www.oceanconnecting.org/en" 
          },
    {
      id: 5,
      label: t("ourServices.service4.label"),
      link: "https://oceanconnecting.net/en",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 pt-4 text-black">
    



    <div 
  className="bg-cover bg-center"
  style={{
    backgroundImage: 'url("https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png")'
  }}
>
  <div className="container mx-auto px-4 py-8">
    {/* Top Section - Contact Info */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
      {/* Logo */}
      <div className="w-full lg:w-auto flex justify-center lg:justify-start">
      
      </div>
      
      {/* Contact Items */}
      <div className="w-full lg:w-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map(({ id, Icon, title, content }) => (
          <div key={id} className="flex items-start gap-4">
            {/* Icon */}
            <div className="bg-blue-500 p-3 rounded-full shadow-md flex-shrink-0">
              {Icon === "HiLocationMarker" && <HiLocationMarker className="h-6 w-6 text-white" />}
              {Icon === "PiPhoneCallFill" && <PiPhoneCallFill className="h-6 w-6 text-white" />}
              {Icon === "MdMarkEmailRead" && <MdMarkEmailRead className="h-6 w-6 text-white" />}
            </div>
            
            {/* Content */}
            <div className="text-sm font-semibold text-gray-800">
              {Array.isArray(content) 
                ? content.map((number, index) => <div key={index}>{number}</div>)
                : content}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Middle Section - Links */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {/* Social Links */}
      <div className="flex flex-col items-center sm:items-start">
        <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
        <div className="flex gap-4">
          {socialLinks.map(({ id, label, to }) => (
            <Link
              key={id}
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="bg-blue-500 p-3 h-12 w-12 flex items-center justify-center rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
              {label === "Facebook" && <FaFacebookF className="h-6 w-6 text-white" />}
              {label === "Instagram" && <PiInstagramLogoFill className="h-6 w-6 text-white" />}
              {label === "YouTube" && <IoLogoYoutube className="h-6 w-6 text-white" />}
              {label === "LinkedIn" && <ImLinkedin2 className="h-6 w-6 text-white" />}
            </Link>
          ))}
        </div>
      </div>

      {/* Other Links Sections */}
      <FooterLinkSection title="Nos services" links={ourServices} />
      <FooterLinkSection title="Nos formations" links={ourFormation} />
      <FooterLinkSection title="Nos pages" links={pageElements} />
    </div>

    {/* Bottom Section - Copyright */}
    <div className="border-t-2 border-gray-300 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm md:text-base font-semibold text-center md:text-left">
          Droit d&apos;auteur © {new Date().getFullYear()}{" "}
          <Link href="/#" className="text-blue-600 hover:text-blue-800">
            Ocean Connecting
          </Link>
          .{t("droit")}.
        </p>
        
        <p className="text-sm md:text-base font-semibold text-center md:text-left">
          {t("merci")} à{" "}
          <Link href="/#" className="text-blue-600 hover:text-blue-800">
            Ocean Connecting
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>





     
      {/* <div
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
                <div
                  className="text-sm font-semibold"
                  style={{ direction: "ltr", unicodeBidi: "plaintext" }}
                >
                  {Array.isArray(content)
                    ? content.map((number, index) => (
                        <div key={index}>{number}</div>
                      ))
                    : content}
                </div>
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
          <div className="space-y-2 lg:col-span-2 mr-6">
            <div className="flex items-center mb-4 space-x-2">
              <Image
                src="/assets/Logo/ocean2.svg"
                alt="Ocean Connecting Logo"
                width={240}
                height={50}
              />
            </div>
            <p className="text-sm">  NOUS SOMMES PROFESSIONNELS</p>
            <p className="text-sm">Ocean Connecting offre des services de nettoyage de façades vitrées, plomberie, électricité et extermination des nuisibles, avec une équipe experte pour garantir votre satisfaction. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:col-span-4">
            <FooterLinkSection title="Nos pages" links={pageElements} />
            <FooterLinkSection title="Nos formations" links={ourFormation} />
            <FooterLinkSection title="Nos services" links={ourServices} />
          </div>
        </div>
        <div className="mt-2">
          <hr className="content-center my-4 border-t-2 border-gray-700" />
          <div>
            <div className="flex flex-col items-center space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 pb-4">
              <p className="font-semibold text-md">
                Droit d&apos;auteur © {new Date().getFullYear()}{" "}
                <Link href="/#" className="text-blue-600 hover:text-white">
                  Ocean Connecting
                </Link>
                . Tous droits réservés.
              </p>
              <p className="font-semibold text-md">
                Merci de votre visite et bienvenue à{" "}
                <Link href="/#" className="text-blue-600 ml-2 hover:text-white">
                  Ocean Connecting
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div> */}
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
