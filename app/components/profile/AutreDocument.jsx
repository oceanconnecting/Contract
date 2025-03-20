"use client";

import React from "react";
import {Button} from "../ui/button"
import { Card } from "../ui/card";
import { FileText, } from "lucide-react";



export default function AoutreDocument() {

  return (
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
