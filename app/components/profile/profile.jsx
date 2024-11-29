"use client";

import { useState } from "react";
import Contract from "./contract";
import AoutreDocument from "./AutreDocument";
import Document from "./Document";
import ProfileInfo from "./ProfileInfo";
import SideBar from "./Sidebar";

import {
  FileText,
  Home,
  LogOut,
  MessageCircleQuestion,
  User,
  Menu,
} from "lucide-react";

export default function ProfileDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-1 mx-auto">
      {/* Side menu toggle button for small screens */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden mt-20 absolute top-4 left-4 z-10 p-2 bg-blue-500 text-white rounded-full"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`flex sm:relative  flex-col bg-gradient-to-b from-blue-400 to-blue-600 transition-all duration-300 ease-in-out 
          ${sidebarOpen ? "w-52" : "w-0"}  md:w-48 lg:w-52 
          ${sidebarOpen ? "block" : "hidden sm:block"}`}
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

      {/* Main content area */}
      <div className="flex-1 sm:mt-8  mt-10 p-8 overflow-y-auto">
        <ProfileInfo  />
        <Document />
        <AoutreDocument />
        <Contract />
      </div>
    </div>
  );
}

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
      <span className="font-medium whitespace-nowrap overflow-hidden">
        {label}
      </span>
    </a>
  );
}
