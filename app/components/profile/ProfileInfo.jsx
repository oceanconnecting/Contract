"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {FileText,Camera,} from "lucide-react";
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

export default function ProfileInfo() {
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
                <div className="flex  justify-end">
                  <Button type="submit" className="bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold rounded-lg">Save changes</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <Card className="bg-gradient-to-br from-blue-200 to-purple-200 p-6 rounded-xl  shadow-lg hover:shadow-xl transition-shadow relative">
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

