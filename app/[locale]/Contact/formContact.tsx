"use client";


import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import handleSubmit from "./action"
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import {useTranslations} from 'next-intl';
const ContactForm = () => {
  const t=useTranslations("homepage")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <form  onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="w-full">
            <FloatLabel>
              <InputText
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="name" className="text-gray-600">
               {t("contact.name")}
              </label>
            </FloatLabel>
          </div>

          {/* Email Input */}
          <div className="w-full">
            <FloatLabel>
              <InputText
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="email" className="text-gray-600">
                Email
              </label>
            </FloatLabel>
          </div>

          {/* Message Input */}
          <div className="w-full">
            <FloatLabel>
              <InputTextarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="message" className="text-gray-600">
                Message
              </label>
            </FloatLabel>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              label="Send Message"
              icon="pi pi-send"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-all"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
