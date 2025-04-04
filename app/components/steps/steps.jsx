import React from 'react';
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { FaPlaneDeparture ,FaPassport  } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
 

const StepsSection = () => {


    const t=useTranslations("homepage.stepsContent")
    const stepsContent = {
      heading:t("heading"),
      title:t("title"),
      description:t("description"),
      steps: [
        {
          icon: MdOutlineConnectWithoutContact,
          title:t("steps.step1.title"),
          description:t("steps.step1.description")
        },
        {
          icon: GrDocumentUser,
          title:t("steps.step2.title"),
          description:t("steps.step2.description") },
        {
          icon: FaPassport,
          title:t("steps.step3.title"),
          description:t("steps.step3.description")  },
        {
          icon: FaPlaneDeparture,
          title:t("steps.step4.title"),
          description:t("steps.step4.description") }
      ],
    };
  

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-10 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700">{stepsContent.heading}</p>
          <h2 className="mt-6 font-bold tracking-tight bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
            {stepsContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
            {stepsContent.description}
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
          {stepsContent.steps.map((step, index) => (
            <li key={index} className="flex-start group relative flex lg:flex-col">
              {index !== stepsContent.steps.length - 1 && (
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"></span>
              )}
              <div
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:bg-gradient-to-r from-blue-600 to-red-600">
                {React.createElement(step.icon, { className: "h-5 w-5 text-gray-600 group-hover:text-white" })}
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  {step.title}
                </h3>
                <h4 className="mt-2 text-base text-gray-700">{step.description}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StepsSection;
