import * as React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Contract } from "../../../contract";
import { GoDotFill } from "react-icons/go";
import { FaStar, FaRegStar } from "react-icons/fa";
import CardTooltip from "./Tooltip";
import { MdArrowForwardIos } from "react-icons/md";
interface ContractsCardProps {
  contract: Contract;
}

const ContractCard: React.FC<ContractsCardProps> = ({ contract }) => {
  const t = useTranslations("homepage.CardSection.contracts");
  const router = useRouter();
  const imageUrl = contract?.imageUrl || "/assets/default-image.jpg";

  const handleClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation();
    if (contract.link) {
      router.push(contract.link);
    }
  };

  return (
<div
  onClick={handleClick}
  onKeyDown={(e) => e.key === "Enter" && handleClick(e)}
  className="group cursor-pointer flex flex-col transition-all duration-300 hover:shadow-2xl rounded-3xl overflow-hidden bg-white border border-gray-100 hover:-translate-y-1 hover:shadow-primary-100/20"
  role="button"
  tabIndex={0}
  aria-label={t(`contract${contract.id}.country`, { defaultValue: "Pays inconnu" })}
>
  <div className="relative">
    <CardTooltip contract={contract} message={`View details for ${t("title", { defaultValue: "this contract" })}`} html>
      <div className="aspect-video h-56 w-full">
        <Image
          src={imageUrl}
          alt={t(`contract${contract.id}.country`, { defaultValue: "Pays inconnu" })}
          width={500}
          height={280}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>
    </CardTooltip>
    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 uppercase tracking-wider shadow-sm">
      {t(`contract${contract.id}.city`, { defaultValue: "Pays inconnu" })}
    </div>
  </div>

  <div className="p-6 h-full flex flex-col gap-3">
    <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
      {t(`contract${contract.id}.label`, { defaultValue: "Titre par défaut" })}
    </h2>
    
    <p className="text-gray-600 text-sm line-clamp-2 flex-1">
      {t(`contract${contract.id}.additionalInfo`, { defaultValue: "Description par défaut" })}
    </p>
    
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center gap-2">
        <GoDotFill className="text-primary-500 text-lg" />
        <span className="text-xs text-gray-500 font-medium">
          {t(`contract${contract.id}.language`, { defaultValue: "" })}
        </span>
      </div>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3].map((star) => (
          <FaStar key={star} className="text-yellow-400 w-4 h-4" />
        ))}
        <FaRegStar className="text-yellow-400 w-4 h-4" />
      </div>
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-100">
      <button
        onClick={handleClick}
        className="w-full px-4 py-2.5 bg-primary-500/10 hover:bg-primary-500/20 flex items-center justify-center gap-2 text-primary-600 rounded-xl font-semibold text-xs uppercase tracking-wide transition-all duration-300 group/btn"
        aria-label="More"
      >        
        <span>{t("more", { defaultValue: "En savoir plus" })}</span>
        <MdArrowForwardIos size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
      </button>
    </div>
  </div>
</div>
  );
};

export default ContractCard;
{/** */}