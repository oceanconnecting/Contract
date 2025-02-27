"use client";
import React, { FormEvent, useRef, useState } from "react";
import { sendMail } from "./actions";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";

const notifySuccess = () => toast.success("form submited Successfully!");
const notifyError = () => toast.error("This is an error!");

function page() {
  const [formData, setFormData] = useState({
    nomPrenom: "",
    email: "",
    tel: "",
    ville: "",
  });

  const cities = [
    "agadir",
    "ouejda",
    "tanger",
    "fes",
    "marrakech",
    "casa",
    "Aiyoun",
    "dakhla",
  ];

  const [IsSubmitting, setIsSubmitting] = useState(false);

  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const teleInput = useRef<HTMLInputElement>(null);

  const clearInputs = () => {
    if (nameInput.current) nameInput.current.value = "";
    if (emailInput.current) emailInput.current.value = "";
    if (teleInput.current) teleInput.current.value = "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendMail(formData);
      clearInputs();
    } catch (error) {
      notifyError();
    } finally {
      setIsSubmitting(false);
      notifySuccess();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <Image
        src={"/assets/hajj/hajj.jpg"}
        alt={"hh"}
        width={1280}
        height={720}
        className=" absolute w-full h-full z-0"
      ></Image>
      <div className="bg-navyblue bg-opacity-50 z-[1] absolute w-full h-full" />
      <div className="max-w-md w-full z-[2] space-y-8 bg-white p-6 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Inscription Hajj et Omra
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Veuillez remplir le formulaire ci-dessous
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="nomPrenom">Nom/Prénom</label>
              <input
                id="nomPrenom"
                name="nomPrenom"
                type="text"
                ref={nameInput}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Nom/Prénom"
                value={formData.nomPrenom}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                ref={emailInput}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="tel">Téléphone</label>
              <input
                id="tel"
                name="tel"
                type="tel"
                ref={teleInput}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Téléphone"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="ville">Ville</label>
              <select
                id="ville"
                name="ville"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                value={formData.ville}
                onChange={handleChange}
              >
                <option value="">--select city--</option>
                {cities.map((city, idx) => (
                  <option key={idx} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={IsSubmitting}
              className="group gap-3 bg-gradient-to-l from-green-700 to-green-600 disabled:bg-gray-400 relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {IsSubmitting && <Loader className=" animate-spin" />}
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
