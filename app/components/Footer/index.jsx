"use client";

import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { PiPhoneCallFill, PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import Image from 'next/image';
import { footerData } from '../Data/data';

const Footer = () => {
  const {
    socialLinks = [],
    contactInfo = [],
    pageElements = [],
    pagelangague = [],
    ourFormation = [],
    ourServices = [],
    footerText = {
      logoAlt: "",
      mainDescription: "",
      detailedDescription: "",
      ourServicesTitle: "",
      ourPageTitle: "",
      ourlangagueTitle: "",
      ourFormationTitle: ""
    },
    footerCopyright = {
      text: "",
      company: "",
      allRightsReserved: "",
      message: ""
    }
  } = footerData;

  const { ourServicesTitle, ourPageTitle, ourFormationTitle, ourlangagueTitle } = footerText;

  return (
    <footer className="bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 pt-10 text-black">
      <div
        className="container mx-auto px-4 md:px-6 lg:px-8"
        style={{
          backgroundImage: 'url("https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map(({ id, Icon, title, content }) => (
            <div key={id} className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md mx-1">
                {Icon === "HiLocationMarker" && <HiLocationMarker className="h-6 w-6 text-white" />}
                {Icon === "PiPhoneCallFill" && <PiPhoneCallFill className="h-6 w-6 text-white" />}
                {Icon === "MdMarkEmailRead" && <MdMarkEmailRead className="h-6 w-6 text-white" />}
              </div>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="text-sm font-semibold" style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}>{content}</p>
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
                  {label === "Facebook" && <FaFacebookF className="h-6 w-6 text-white" />}
                  {label === "Instagram" && <PiInstagramLogoFill className="h-6 w-6 text-white" />}
                  {label === "YouTube" && <IoLogoYoutube className="h-6 w-6 text-white" />}
                  {label === "LinkedIn" && <ImLinkedin2 className="h-6 w-6 text-white" />}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="space-y-2 lg:col-span-1">
            <div className="flex items-center mb-4 space-x-2">
              <Image src="/assets/Logo/ocean2.svg" alt={footerText.logoAlt} width={240} height={50} />
            </div>
            <p className="text-sm">{footerText.mainDescription}</p>
            <p className="text-sm">{footerText.detailedDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:col-span-3">
            <FooterLinkSection title={ourServicesTitle} links={ourServices} />
            <FooterLinkSection title={ourPageTitle} links={pageElements} />
            <FooterLinkSection title={ourlangagueTitle} links={pagelangague} />
            <FooterLinkSection title={ourFormationTitle} links={ourFormation} />
          </div>
        </div>
        <div className="mt-2">
          <hr className="content-center my-4 border-t-2 border-gray-300" />
          <div>
            <div className="flex justify-between pb-4">
              <p className="font-semibold text-md">
                {footerCopyright.text} {new Date().getFullYear()}{" "}
                <Link href="/#" className="text-blue-600 hover:text-white">
                  {footerCopyright.company}
                </Link>. {footerCopyright.allRightsReserved}
              </p>
              <p className="font-semibold text-md">
                {footerCopyright.message}
                <Link href="/#" className="text-blue-600 hover:text-white">
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
