"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { FileText, Camera } from "lucide-react";
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

export default function ProfileInfo({ profileData: initialProfileData }) {
  const [profileData, setProfileData] = useState(initialProfileData);
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
          My Profile
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
                    <AvatarImage src="/placeholder.png?height=128&width=128" alt="Profile picture" />
                    <AvatarFallback>
                      {profileData.Firstname[0]}
                      {profileData.Lastname[0]}
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
                <ProfileFieldEditor
                  label="First Name"
                  name="firstName"
                  value={profileData.Firstname}
                  onChange={handleInputChange}
                />
                <ProfileFieldEditor
                  label="Last Name"
                  name="lastName"
                  value={profileData.Lastname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
              <ProfileFieldEditor
                label="Email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
              
              <ProfileFieldEditor
                label="Phone Number"
                name="phoneNumber"
                value={profileData.numero}
                onChange={handleInputChange}
              />
              </div>
              <div className="grid grid-cols-2 gap-4">
              <ProfileFieldEditor
                label="CIN"
                name="cin"
                value={profileData.client.CIN}
                onChange={handleInputChange}
              />
              <ProfileFieldEditor
                label="Zip Code"
                name="zipCode"
                value={profileData.client.zipCode}
                onChange={handleInputChange}
              />
              
              </div>
              <div className="grid grid-cols-2 gap-4">
              <ProfileFieldEditor
                label="City"
                name="city"
                value={profileData.client.city}
                onChange={handleInputChange}
              />
              <ProfileFieldEditor
                label="Address"
                name="address"
                value={profileData.client.address}
                onChange={handleInputChange}
              />
              </div>             
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold rounded-lg"
              >
                Save changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Card className="bg-gradient-to-br from-blue-200 to-purple-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <ProfileField label="First Name :" value={profileData.Firstname} />
          <ProfileField label="Last Name :" value={profileData.Lastname} />
          <ProfileField label="Email :" value={profileData.email} />
          <ProfileField label="Numero :" value={profileData.numero} />
          <ProfileField label="CIN :" value={profileData.client.CIN} />
          <ProfileField label="Zip code :" value={profileData.client.zipCode} />
          <ProfileField label="City :" value={profileData.client.city} />
          <ProfileField label="Address :" value={profileData.client.address} />
        </div>
      </Card>
    </section>
  );
}

function ProfileFieldEditor({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}

function ProfileField({ label, value }) {
  return (
    <div>
      <dt className="text-base font-bold text-gray-700">{label}</dt>
      <dd className="text-base mt-1 font-semibold">{value}</dd>
    </div>
  );
}
