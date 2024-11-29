"use client";

import { useState, useRef } from "react";
import {FileText,Home,LogOut,MessageCircleQuestion,User,} from "lucide-react";


export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

      <aside
        className={`flex flex-col bg-gradient-to-b from-blue-400 to-blue-600 transition-all duration-300 ease-in-out
          ${sidebarOpen ? "w-52" : "w-16"} sm:w-16 md:w-48 lg:w-52`}
      >
        <nav className="flex flex-col h-full py-8 px-4">
          <div className="space-y-4 mt-8">
            <SidebarItem icon={Home} label="Home" />
            <SidebarItem icon={User} label="Profil" active />
            <SidebarItem icon={FileText} label="Documents" />
            <SidebarItem icon={MessageCircleQuestion} label="Q/A" />
            <SidebarItem icon={LogOut} label="Logout" />
          </div>
        </nav>
      </aside>

  );
}

// Components for SidebarItem, ProfileField, DocumentCard, ApplicationCard
function SidebarItem({ icon: Icon, label, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
        active
          ? "bg-white bg-opacity-20 text-white"
          : "text-blue-100 hover:bg-white hover:bg-opacity-10"
      }`}
    >
      <Icon className="h-6 w-6 flex-shrink-0" />
      <span className="font-medium whitespace-nowrap overflow-hidden hidden sm:hidden md:inline">
        {label}
      </span>
    </a>
  );
}
