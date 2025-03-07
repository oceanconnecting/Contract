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
      className="group cursor-pointer flex flex-col transition-all duration-300 hover:shadow-xl rounded-3xl overflow-hidden bg-background-50 bg-customGray hover:-translate-y-1"
      role="button"
      tabIndex={0}
      aria-label={t(`contract${contract.id}.country`, { defaultValue: "Pays inconnu" })}
    >
      <div className="relative">
        <CardTooltip contract={contract} message={`View details for ${t("title", { defaultValue: "this contract" })}`} html>
          <div>
            <Image
              src={imageUrl }
              alt={t(`contract${contract.id}.country`, { defaultValue: "Pays inconnu" })}
              width={400}
              height={225}
              className="rounded-t-lg object-cover w-full h-[225px]"
            />
          </div>
        </CardTooltip>
        <div className="absolute top-4 left-4 bg-background-50 px-2 py-1 rounded-full text-xs font-semibold text-text-700 uppercase">
          {t(`contract${contract.id}.city`, { defaultValue: "Pays inconnu" })}
        </div>
      </div>

      <div className="p-6 h-full flex flex-col">
        <CardTooltip contract={contract} message={contract.additionalInfo || "No additional information available"}>
          <h2 className="text-2xl font-bold mb-2 text-text-700 group-hover:text-primary-600 transition-colors duration-300">
            {t(`contract${contract.id}.label`, { defaultValue: "Titre par défaut" })}
          </h2>
        </CardTooltip>
        <p className="text-text-700 mb-4 line-clamp-2 flex-1">
          {t(`contract${contract.id}.additionalInfo`, { defaultValue: "Description par défaut" })}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <GoDotFill className="text-primary-600" />
            <span className="text-sm text-text-500">{t(`contract${contract.id}.language`, { defaultValue: "" })}</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((star) => (
              <FaStar key={star} className="text-yellow-400" />
            ))}
            <FaRegStar className="text-yellow-400" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold text-sm uppercase hover:bg-primary-700 transition-colors duration-300">
            {t("more", { defaultValue: "more" })}
            <MdArrowForwardIos />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
{/** */}