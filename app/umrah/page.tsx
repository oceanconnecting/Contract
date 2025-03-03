"use client";
import React, { FormEvent, useRef, useState } from "react";
import { sendMail } from "./actions";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { Loader, Users } from "lucide-react";
import NumberStepper from "../components/ui/numberStepper";

const notifySuccess = () => toast.success("form submited Successfully!");
const notifyError = () => toast.error("This is an error!");

function Page() {
  const [formData, setFormData] = useState({
    nomPrenom: "",
    email: "",
    tel: "",
    country: "",
    ville: "",
    numPeople: NaN,
  });

  const [onCountrySelect, setOnCountryselect] = useState<string>("");

  const countries = [
    {
      title: "Italia",
      subitems: ["Rome", "Milan", "Naples", "Turin", "Florence"],
    },
    {
      title: "France",
      subitems: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
    },
    {
      title: "Allemagne",
      subitems: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
    },
    {
      title: "Espagne",
      subitems: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"],
    },
    {
      title: "UK",
      subitems: ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool"],
    },
    {
      title: "Autriche",
      subitems: ["Vienna"],
    },
    {
      title: "Niederlande",
      subitems: ["Amsterdam", "Rotterdam"],
    },
    {
      title: "Belgique",
      subitems: ["Brussels"],
    },
    {
      title: "Swiss",
      subitems: ["Basel", "Zurich"],
    },
    {
      title: "Allemagne",
      subitems: ["Düsseldorf", "Essen"],
    },
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
    if (IsSubmitting) return;
    setIsSubmitting(true);
    try {
      await sendMail(formData);
      notifySuccess();
      clearInputs();
      setFormData({
        nomPrenom: "",
        email: "",
        tel: "",
        country: "",
        ville: "",
        numPeople: 1,
      });
      setOnCountryselect("");
    } catch (error) {
      notifyError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-gray-100 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
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
            Omra Registration
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Veuillez remplir le formulaire ci-dessous
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div>
            <div>
              <label htmlFor="country">country</label>
              <select
                id="country"
                name="country"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                value={formData.country}
                onChange={(e) => {
                  setOnCountryselect(e.target.value);
                  const { name, value } = e.target;
                  setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                  }));
                }}
              >
                <option value="">--select country-</option>
                {countries.map((country, idx) => (
                  <option key={idx} value={country.title}>
                    {country.title}
                  </option>
                ))}
              </select>
            </div>

            {onCountrySelect !== "" && (
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
                  <option value="">--select ville-</option>
                  {countries
                    .find((country) => country.title === onCountrySelect)
                    ?.subitems.map((ville, idx) => (
                      <option key={idx} value={ville}>
                        {ville}
                      </option>
                    ))}
                </select>
              </div>
            )}
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
           
          </div>
          <div className="flex justify-between items-center w-full">
            <label htmlFor="numPeople">Nombre de personnes</label>
            <NumberStepper
              min={1}
              max={9}
              onChange={(value) => {
                setFormData((prevData) => ({
                  ...prevData,
                  numPeople: value,
                }));
              }}
            />
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

export default Page;
