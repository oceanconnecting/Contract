"use client";
import React, { FormEvent, useRef, useState } from "react";
import { sendMail } from "./actions";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { Loader, Users } from "lucide-react";
import NumberStepper from "../../components/ui/numberStepper";
import haj from "../../../public/assets/hajj/hajj.jpg"
import { useTranslations } from "next-intl";
const notifySuccess = () => toast.success("form submited Successfully!");
const notifyError = () => toast.error("This is an error!");

function Page() {

  const t=useTranslations("haj")
  const [formData, setFormData] = useState({
    nomPrenom: "",
    email: "",
    tel: "",
    country: "",
    ville: "",
    numPeople: NaN,
    month:""
  });

  const [onCountrySelect, setOnCountryselect] = useState<string>("");

    


  const countries = [
    {
      title: t("Maroc.title"),
      subitems: [t("Maroc.subitems.Agadir"),t("Maroc.subitems.Ouejda"),t("Maroc.subitems.Marrakech"),t("Maroc.subitems.Casablanca"),t("Maroc.subitems.Tanger"),t("Maroc.subitems.Meknes"),t("Maroc.subitems.Dakhla"),t("Maroc.subitems.Aiyoun"),
      ],
    },
    {
      title: t("Italia.title"),
      subitems: [t("Italia.subitems.Rome"),t("Italia.subitems.Milan"),t("Italia.subitems.Naples"),t("Italia.subitems.Turin"),t("Italia.subitems.Florence"),
      ],
    },
    {
      title: t("France.title"),
      subitems: [t("France.subitems.Paris"),t("France.subitems.Marseille"),t("France.subitems.Lyon"),t("France.subitems.Toulouse"),t("France.subitems.Nice"),
      ],
    },
    {
      title: t("Allemagne.title"),
      subitems: [t("Allemagne.subitems.Berlin"),t("Allemagne.subitems.Hamburg"),t("Allemagne.subitems.Munich"),t("Allemagne.subitems.Cologne"),t("Allemagne.subitems.Frankfurt"),
      ],
    },
    {
      title: t("Espagne.title"),
      subitems: [t("Espagne.subitems.Madrid"),t("Espagne.subitems.Barcelona"),t("Espagne.subitems.Valencia"),t("Espagne.subitems.Seville"),t("Espagne.subitems.Zaragoza"),
      ],
    },
    {
      title: t("UK.title"),
      subitems: [ t("UK.subitems.London"), t("UK.subitems.Birmingham"), t("UK.subitems.Manchester"), t("UK.subitems.Glasgow"), t("UK.subitems.Liverpool"),
      ],
    },
    {
      title: t("Autriche.title"),
      subitems: [t("Autriche.subitems.Vienna")],
    },
    {
      title: t("Niederlande.title"),
      subitems: [ t("Niederlande.subitems.Amsterdam"), t("Niederlande.subitems.Rotterdam"),
      ],
    },
    {
      title: t("Belgique.title"),
      subitems: [t("Belgique.subitems.Brussels")],
    },
    {
      title: t("Swiss.title"),
      subitems: [ t("Swiss.subitems.Basel"), t("Swiss.subitems.Zurich"),
      ],
    },
    {
      title: t("Allemagne1.title"),
      subitems: [t("Allemagne1.subitems.Düsseldorf"),t("Allemagne1.subitems.Essen"),
      ],
    },
  ];
  




   const months = [t("months.January"),t("months.February"),t("months.March"),t("months.April"),t("months.May"),t("months.June"),t("months.July"),t("months.August"),t("months.September"),t("months.October"),t("months.November"),t("months.December")
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
        month:""
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
        src={haj}
        alt={"Haj"}
        width={1280}
        height={720}
        className="absolute w-full h-full z-0"
      ></Image>
      <div className="bg-navyblue bg-opacity-50 z-[1] absolute w-full h-full" />
      <div className="max-w-md w-full z-[2] space-y-8 bg-white p-6 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            
      {t("form.Omra")}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {t("form.title")}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div>
            <div>
              <label htmlFor="country"> {t("form.country")} </label>
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
                <option value="">--{t("form.selectcountry")}-</option>
                {countries.map((country, idx) => (
                  <option key={idx} value={country.title}>
                    {country.title}
                  </option>
                ))}
              </select>
            </div>

            {onCountrySelect !== "" && (
              <div>
                <label htmlFor="ville"> {t("form.country")} </label>
                <select
                  id="ville"
                  name="ville"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  value={formData.ville}
                  onChange={handleChange}
                >
                  <option value="">-- {t("form.selectcity")} -</option>
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
              <label htmlFor="nomPrenom"> {t("form.name")} </label>
              <input
                id="nomPrenom"
                name="nomPrenom"
                type="text"
                ref={nameInput}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder={t("form.name")}
                value={formData.nomPrenom}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email"> {t("form.email")} </label>
              <input
                id="email"
                name="email"
                type="email"
                ref={emailInput}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder={t("form.email")}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="tel">    {t("form.Téléphone")} </label>
              <input
                id="tel"
                name="tel"
                type="tel"
                ref={teleInput}
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder= {t("form.Téléphone")}
                value={formData.tel}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
              <label htmlFor="month">    {t("form.Month")} </label>
              <select
                id="month"
                name="month"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                value={formData.month}
                onChange={handleChange}
              >
                <option value="">--    {t("form.Select_Month")} --</option>
                {months.map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          
          
          <div className="flex justify-between items-center w-full">
            <label htmlFor="numPeople"> {t("form.nbrPoeples")} </label>
           
            <NumberStepper
  min={1}
  max={9}
  onChange={(value) => {
    if (formData.numPeople !== value) {  // ✅ Prevent unnecessary state updates
      setFormData((prevData) => ({
        ...prevData,
        numPeople: value,
      }));
    }
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
