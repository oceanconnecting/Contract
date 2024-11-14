"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageCircleQuestion,
  User,
  X,
  Camera,
} from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function ProfileDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Mustapha",
    lastName: "Something",
    cin: "JXXXXXX",
    phoneNumber: "06.XX.XX.XX.XX",
    email: "Something@gmail.com",
    city: "Agadir",
    zipCode: "80000",
    address: "2eme etage islan hay mohammadi",
    profileImage: "/placeholder.svg?height=128&width=128",
  });
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-1 mx-auto  ">
      {" "}
      {/* Flex layout for sidebar + main content */}
      {/* Sidebar */}
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
      {/* Main content area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Profile Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <FileText className="mr-2" />
              My profil
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-700 space-links custom-shadow">
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4"
                    onClick={() => {}}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Avatar className="w-32 h-32">
                        <AvatarImage src={profileData.profileImage} alt="Profile picture" />
                        <AvatarFallback>
                          {profileData.firstName[0]}
                          {profileData.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute bottom-0 right-0"
                        onClick={triggerFileInput}
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="cin">CIN</Label>
                      <Input
                        id="cin"
                        name="cin"
                        value={profileData.cin}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={profileData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={profileData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={profileData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={profileData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Save changes</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <Card className="bg-gradient-to-br from-blue-200 to-purple-200 p-6 rounded-xl relative shadow-lg hover:shadow-xl transition-shadow relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <ProfileField label="First Name :" value={profileData.firstName} />
              <ProfileField label="Last Name :" value={profileData.lastName} />
              <ProfileField label="CIN :" value={profileData.cin} />
              <ProfileField label="Numero :" value={profileData.phoneNumber} />
              <ProfileField label="Email :" value={profileData.email} />
              <ProfileField label="City :" value={profileData.city} />
              <ProfileField label="Zip code :" value={profileData.zipCode} />
              <ProfileField label="Address :" value={profileData.address} />
            </div> 
          </Card>
        </section>
        {/* Documents Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <FileText className="mr-2" />
              Other documents
            </h2>
            <Button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-white space-links custom-shadow">
              Edit
            </Button>
          </div>
          {/* Carousel Container */}
          <div className="flex overflow-x-auto scroll-smooth gap-x-4 pb-4">
            <DocumentCard title="IMAGE:" />
            <DocumentCard title="CNI:" />
            <DocumentCard title="Driving Licence:" />
            <DocumentCard title="Diplome:" />
            <DocumentCard title="CV:" />
            <DocumentCard title="Passport" />
          </div>
        </section>
        {/* Documents Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <FileText className="mr-2" />
              My Documents
            </h2>
            <Button className="bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-white space-links custom-shadow">
              Edit
            </Button>
          </div>
          {/* Carousel Container */}
          <div className="flex overflow-x-auto scroll-smooth gap-x-4 pb-4">
            <DocumentCard title="IMAGE:" />
            <DocumentCard title="CNI:" />
            <DocumentCard title="Driving Licence:" />
            <DocumentCard title="Diplome:" />
            <DocumentCard title="CV:" />
            <DocumentCard title="Passport" />
          </div>
        </section>
        {/* Applications Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Briefcase className="mr-2" />
            My Applications
          </h2>
          <div className="flex flex-wrap gap-4">
            <ApplicationCard
              country="Germany"
              category="Health"
              status="Approved"
              date="12/03/2024"
            />
            <ApplicationCard
              country="Italy"
              category="Health"
              status="Approved"
              date="12/03/2024"
            />
            <Button className="flex-shrink-0 w-full sm:w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors">
              <span className="text-4xl mb-2">+</span>
              New request
            </Button>
          </div>
        </section>
      </div>
    </div>
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

function ProfileField({ label, value }) {
  return (
    <div>
      <dt className=" text-base  font-bold text-gray-700">{label}</dt>
      <dd className="text-base mt-1  font-semibold">{value}</dd>
    </div>
  );
}

function DocumentCard({ title }) {
  return (
    <Card className="bg-blue-600 p-4 rounded-lg relative w-64 flex-shrink-0">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-4">
        {/* Centered RECTO */}
        <div className="bg-white h-40 p-4 rounded flex items-center justify-center font-bold text-gray-700">
          RECTO
        </div>
        {/* Centered VERSO */}
        <div className="bg-white h-40 p-4 rounded flex items-center justify-center font-bold text-gray-700">
          VERSO
        </div>
      </div>
    </Card>
  );
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
  );
}
