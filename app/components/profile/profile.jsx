'use client'

import { useState } from 'react'
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { ArrowRight, Briefcase, FileText, Home, LogOut, Menu, MessageCircleQuestion, User, X } from 'lucide-react'

export default function ProfileDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-1 mx-auto  "> {/* Flex layout for sidebar + main content */}
      {/* Sidebar */}
      <aside
        className={`flex flex-col bg-gradient-to-b from-blue-400 to-blue-600 transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'w-64' : 'w-16'} sm:w-16 md:w-64 lg:w-64`}
      >
        <nav className="flex flex-col h-full py-8 px-4">
          <div className="space-y-4 mt-8">
            <SidebarItem icon={Home} label="Home" />
            <SidebarItem icon={User} label="Profil" active />
            <SidebarItem icon={FileText} label="Documents" />
            <SidebarItem icon={MessageCircleQuestion} label="Q/A" />
          </div>
          <div className="mt-auto text-white">
            <SidebarItem icon={LogOut} label="Logout" />
          </div>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Profile Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <FileText className="mr-2" />
              My profil
            </h2>
            <Button className="bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-700">Edit</Button>
          </div>
          <Card className="bg-gradient-to-br from-blue-300 to-purple-200  p-6 rounded-lg relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProfileField label="First Name" value="Mustapha" />
              <ProfileField label="Last Name" value="Something" />
              <ProfileField label="CIN" value="JXXXXXX" />
              <ProfileField label="Numero" value="06.XX.XX.XX.XX" />
              <ProfileField label="Email" value="Something@gmail.com" />
              <ProfileField label="City" value="Agadir" />
              <ProfileField label="Zip code" value="80000" />
              <ProfileField label="Address" value="2eme etage islan hay mohammadi" />
            </div>
          </Card>
        </section>

        {/* Documents Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <FileText className="mr-2" />
              My Documents
            </h2>
            <Button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-white">Edit</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DocumentCard title="ID" />
            <DocumentCard title="Driving Licence" />
            <DocumentCard title="Diplomat" />
          </div>
        </section>

        {/* Applications Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Briefcase className="mr-2" />
            My Applications
          </h2>
          <div className="flex flex-wrap gap-4">
            <ApplicationCard country="Germany" category="Health" status="Approved" date="12/03/2024" />
            <ApplicationCard country="Italy" category="Health" status="Approved" date="12/03/2024" />
            <Button className="flex-shrink-0 w-full sm:w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors">
              <span className="text-4xl mb-2">+</span>
              New request
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

// Components for SidebarItem, ProfileField, DocumentCard, ApplicationCard
function SidebarItem({ icon: Icon, label, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
        active ? 'bg-white bg-opacity-20 text-white' : 'text-blue-100 hover:bg-white hover:bg-opacity-10'
      }`}
    >
      <Icon className="h-6 w-6 flex-shrink-0" />
      <span className="font-medium whitespace-nowrap overflow-hidden hidden sm:hidden md:inline">{label}</span>
    </a>
  )
}

function ProfileField({ label, value }) {
  return (
    <div>
      <dt className="text-sm font-medium text-blue-100">{label}</dt>
      <dd className="mt-1 text-sm font-semibold">{value}</dd>
    </div>
  )
}

function DocumentCard({ title }) {
  return (
    <Card className="bg-blue-100 p-4 rounded-lg relative">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        <div className="bg-white p-2 rounded">RECTO</div>
        <div className="bg-white p-2 rounded">VERSO</div>
      </div>
    </Card>
  )
}

function ApplicationCard({ country, category, status, date }) {
  return (
    <Card className="bg-blue-100 p-4 rounded-lg w-full sm:w-48">
      <div className="h-24 bg-blue-200 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="flex items-center">
          <ArrowRight className="h-4 w-4 mr-2" />
          <span className="font-medium">{country}</span>
        </div>
        <div className="text-sm text-gray-600">{category}</div>
        <div className="text-sm font-semibold text-green-600">{status}</div>
        <div className="text-sm text-gray-600">{date}</div>
      </div>
    </Card>
  )
}
