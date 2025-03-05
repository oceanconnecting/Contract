"use client";

import { GoDotFill } from "react-icons/go";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type React from "react";
import { useTranslations } from "next-intl";

interface Contract {
  id: number;
  imageUrl?: string;
  country?: string;
  sector?: string;
  language?: string;
  visaDuration?: string;
  contractDuration?: string;
  contractPrice?: string;
  additionalInfo?: string;
  international?: string;
  latitude?: number;
  longitude?: number;
  icon?: string;
  label?: string;
  link?: string;
}

interface ContractsCardProps {
  contract: Contract;
}

const ContractCard: React.FC<ContractsCardProps> = ({ contract }) => {
  const t = useTranslations("homepage.CardSection.contracts");
  const router = useRouter();
  const imageUrl = contract?.imageUrl ? contract.imageUrl : "/assets/default-image.jpg";

  const isValidImageUrl = (url: string) => {
    try {
      new URL(url, window.location.href);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation(); // Prevent event bubbling
    if (contract.link) {
      router.push(contract.link);
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick(e)}
      className="group cursor-pointer flex flex-col transition-all duration-300 hover:shadow-xl rounded-3xl overflow-hidden bg-background-50 bg-customGray hover:-translate-y-1"
      role="button"
      tabIndex={0}
      aria-label={t(`contract${contract.id}.country`) || "Pays inconnu"}
    >
      <div className="relative">
      <Image
  src={isValidImageUrl(imageUrl) ? imageUrl : "../assets/default-image.jpg"}
  alt={contract.country || "Pays inconnu"}
  width={400}
  height={192}
  className="w-full h-48 object-cover rounded-t-lg"
  onError={(e) => (e.currentTarget.src = "/assets/default-image.jpg")}
/>

       


        <div className="absolute top-4 left-4 bg-background-50 px-2 py-1 rounded-full text-xs font-semibold text-text-700 uppercase">
          {t(`contract${contract.id}.country`) || "Pays inconnu"}
        </div>
      </div>

      <div className="p-6 h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-2 text-text-700 group-hover:text-primary-600 transition-colors duration-300">
          {t("title") || "Titre par défaut"}
        </h2>

        <p className="text-text-700 mb-4 line-clamp-2 flex-1">
          {t(`contract${contract.id}.additionalInfo`) || "Description par défaut"}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <GoDotFill className="text-primary-600" />
            <span className="text-sm text-text-500">
              {t(`contract${contract.id}.language`)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((star) => (
              <FaStar key={star} className="text-yellow-400" />
            ))}
            <FaRegStar className="text-yellow-400" />
          </div>
        </div>

        <div className="mt-6 flex items-end justify-center">
          <button
            className="bg-primary-600 text-white bg-gradient-to-r from-blue-600 to-red-600 px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            onClick={handleClick}
            onKeyDown={(e) => e.key === "Enter" && handleClick(e)}
            aria-label={`Voir le contrat pour ${
              t(`contract${contract.id}.country`) || "Pays inconnu"
            }`}
          >
            {t("button") || "Postuler"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
