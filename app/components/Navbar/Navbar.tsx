"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import { MdAccountCircle } from "react-icons/md";
import { usePathname } from "next/navigation";
import DropdownMenuLanguages from "./dropdownLanguages";
import { useTranslations } from "next-intl";
import ocean1 from "../../../public/assets/logo/ocean1.svg";
import { useLocale } from "use-intl";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const Navbar = () => {
  const locale = useLocale(); // Récupère la langue actuelle
  const tt = useTranslations("homepage");

  const navigation: NavigationItem[] = [
    { name: tt("navbare.home"), href: "/", current: true },
    { name: tt("navbare.umrah"), href: `/${locale}/umrah`, current: false },
    { name: tt("navbare.travel"), href: "/#services", current: false },
    { name: tt("navbare.project"), href: "/#project", current: false },
    { name: tt("navbare.about"), href: "/#about", current: false },
    { name: tt("navbare.help"), href: "/", current: false },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const isProfilePage = pathname === "/profile";

  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 rounded-full z-50">
      <>
        <div className={`mx-auto px-6 lg:px-8 ${isProfilePage ? "" : "max-w-7xl"}`}>
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* LOGO */}
            <Link href="/" passHref>
              <div className="flex items-center">
                <Image
                  className="h-12 w-auto lg:hidden"
                  src={ocean1}
                  alt="logo"
                  width={160}
                  height={112}
                />
              </div>
            </Link>

            {/* MENU NAVIGATION */}
            <div className="hidden lg:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-semibold transition-opacity duration-200 ${
                    item.current ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* OPTIONS UTILISATEUR */}
            <div className="flex items-center space-x-4">
              {/* Sélecteur de langue */}
              <DropdownMenuLanguages />

              {/* Bouton Espace Client */}
              <Link href={`${locale}/espace-client`} passHref>
                <button className="hidden lg:flex items-center bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold text-lg px-6 py-2 rounded-lg transition hover:opacity-80">
                  <MdAccountCircle className="mr-2 text-2xl" />
                  {tt("navbare.espace")}
                </button>
              </Link>

              {/* Bouton Menu Mobile */}
              <button onClick={() => setIsOpen(true)} className="lg:hidden">
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* DRAWER POUR MOBILE */}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawerdata />
        </Drawer>
      </>
    </Disclosure>
  );
};

export default Navbar;
