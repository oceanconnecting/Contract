"use client";

import { Button } from "../ui/Button";
import { Card } from "../ui/card";
import {
  ArrowRight,
  Briefcase,
} from "lucide-react";

export default function Contract() {
  return (
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
