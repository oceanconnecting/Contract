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


// const profileData = {
//   Firstname: "Mustapha",
//   Lastname: "Something",
//   numero: "06.XX.XX.XX.XX",
//   email: "Something@gmail.com",
//   client :{
//     CIN: "JXXXXXX",
//     city: "Agadir",
//     zipCode: "80000",
//     address: "2eme etage islan hay mohammadi",
//   },
//   profileImage: "/placeholder.svg?height=128&width=128",
// };

export default function ProfileDashboard( {profileData}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = async () => {
    try {
      await fetch('https://ocean-contra.vercel.app/api/logout', {
        method: 'POST',
      });
      document.cookie = 'token=; Max-Age=0; path=/; secure; samesite=strict'; // Delete the token
      router.push('/espace-client');
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

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
            <SidebarItem icon={LogOut} onclick={handleLogout} label="Logout" />
          </div>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 sm:mt-8  mt-10 p-8 overflow-y-auto">
        <ProfileInfo profileData={profileData} />
        <Document />
        <AoutreDocument />
        <Contract />
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, label,onclick , active = false }) {
  return (
    <button
    onClick={onclick}
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
    </button>
  );
}
