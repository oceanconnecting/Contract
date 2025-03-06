"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import { MdAccountCircle } from "react-icons/md";
import { usePathname } from "next/navigation"; // Use usePathname from next/navigation
import DropdownMenuLanguages from "./dropdownLanguages";
import { useTranslations } from "next-intl";
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const tt=useTranslations("homepage")
  const navigation: NavigationItem[] = [
    { name: tt("navbare.home"), href: "/", current: true },
    { name: tt("navbare.umrah"), href: "/umrah", current: false },
    { name: tt("navbare.travel"), href: "/#services", current: false },
    { name: tt("navbare.project"), href: "/#project", current: false },
    { name: tt("navbare.about"), href: "/#about", current: false },
    { name: tt("navbare.help"), href: "/", current: false },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname(); // Get the current pathname using usePathname

  // Determine if we're on the profile page
  const isProfilePage = pathname === "/profile";

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div
          className={`mx-auto ml-8 rounded-full ${
            isProfilePage ? "" : "max-w-7xl"
          } px-6 lg:py-4 lg:px-8`}
        >
          <div className="relative flex h-24 lg:h-16 items-center   justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}
              <Link href="/" passHref>
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-20 w-full lg:hidden"
                    src="/assets/logo/ocean1.svg"
                    alt="dsign-logo"
                    width={160}
                    height={112}
                  />
                  <Image
                    className="hidden h-20 w-full lg:block"
                    src="/assets/logo/ocean1.svg"
                    alt="dsign-logo"
                    width={250}
                    height={160}
                  />
                </div>
              </Link>

              {/* LINKS */}
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-gray-700 hover:opacity-100"
                          : "hover:text-black  hover:opacity-100",
                        "px-3 py-4 text-lg text-gray-700 font-bold opacity-75 space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0"></div>
              <div className="hidden lg:block"></div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
              <div className="hidden lg:block">
                <Link href="/espace-client" passHref>
                  <button className="text-white flex items-center space-links text-lg font-bold ml-9 py-2 px-6 transition duration-150 ease-in-out leafbutton bg-gradient-to-r from-blue-600 to-red-600 hover:opacity-75">
                    <MdAccountCircle className="mr-2 text-3xl" />
                    <span>{tt("navbare.espace")}</span>
                  </button>
                </Link>
              </div>
            </div>



            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
              <DropdownMenuLanguages/>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
