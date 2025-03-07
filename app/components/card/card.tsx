import React from 'react';
import { FaMapMarkerAlt, FaLanguage, FaCalendarAlt, FaMoneyBillWave, FaMedkit } from 'react-icons/fa';
import { MdDomainAdd } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image'; 
import { contractContent } from '../Data/data';
import { useTranslations } from 'next-intl';
import ContractCard from './Cards';
import { Contract } from '../../../contract';
import  getDataContract  from '../Data/dataContract';
const CardSection = () => {
    const tt=useTranslations("homepage.CardSection")
    const contractData: Contract[] = getDataContract();


  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <h2 className="text-4xl text-center font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight animate-slideDown">
          {tt("contracts.title")|| "Default Title"}
          
        </h2>
        <p className="text-center text-gray-700 sm:text-sm lg:text-lg mt-2 mb-8 lg:mt-6">
          {contractContent?.description || "Default description"}
        </p>
        <div>
        
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {contractData?.length > 0 &&
  contractData.map((contract, index) =>
              contract ? <ContractCard key={index} contract={contract} /> : null
            )}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
