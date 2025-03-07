import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiTooltip, { type TooltipProps as MuiTooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import type { Contract } from "../../../contract";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

interface CardTooltipProps {
  contract: Contract;
  message: string;
  html?: boolean;
  children: React.ReactElement;
}

// Tooltip noir
const BlackTooltip = styled(({ className, ...props }: MuiTooltipProps) => (
  <MuiTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    color: "#fff",
    fontSize: theme.typography.pxToRem(12),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
}));

// Tooltip HTML
const HtmlTooltip = styled(({ className, ...props }: MuiTooltipProps) => (
    <MuiTooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "rgba(255, 255, 255, 0.9)", // Fond légèrement transparent
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 520,
      fontSize: theme.typography.pxToRem(14), // Légèrement plus grand pour la lisibilité
      border: "2px solid transparent", // Bordure initiale transparente
      borderRadius: theme.shape.borderRadius * 10, // Bordure plus arrondie
      padding: theme.spacing(3),
      boxShadow: theme.shadows[20], // Ombre plus prononcée
      backdropFilter: "blur(8px)", // Effet de flou léger
      transition: "all 0.3s ease-in-out", // Animation fluide
  
      "&:before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        padding: 2,
        background: "linear-gradient(45deg, #14213d, #fca311)", // Dégradé sur la bordure
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "destination-out",
        maskComposite: "exclude",
      },
  
      "&:hover": {
        transform: "scale(1.05)", // Effet zoom subtil au survol
      },
    },
  }));
  

// Composant Tooltip
const CardTooltip: React.FC<CardTooltipProps> = ({ contract, message, html = false, children }) => {
    
  const t = useTranslations("homepage.CardSection.contracts");
  const [open, setOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
    // Fermer le tooltip si on clique ailleurs

  // Fermer le tooltip si on touche/click ailleurs sur mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

    // ✅ **Corrigé : Afficher au toucher sur mobile et éviter la fermeture immédiate**
    const handleTouch = (event: React.TouchEvent) => {
      event.stopPropagation(); // Empêche la fermeture immédiate
      setOpen(true);
  
      // 🔹 Garde le tooltip ouvert un peu plus longtemps sur mobile
      setTimeout(() => {
        setOpen(false);
      }, 3000); // Ferme après 3 secondes
    };
  


  // Afficher au survol sur PC
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  
    const handleTooltipToggle = (event: React.MouseEvent | React.TouchEvent) => {
      event.stopPropagation();
      setOpen(!open);
    };
  
  // Assurer que tooltipContent est toujours un ReactElement
  const tooltipContent = html ? (
    <React.Fragment>
      <Typography color="inherit" variant="subtitle2" className="font-bold text-center text-lg bg-bordertop p-2 rounded-t-lg">
        {t("title", { defaultValue: "Contract Details" })}
      </Typography>

      <div className="mt-2 p-2">
        {contract.country && (
          <p className="mb-2">
            <strong>{t("city", { defaultValue: "city" })}:</strong> {t(`contract${contract.id}.city`, { defaultValue: "Pays inconnu" })}
          </p>
        )}

        {contract.sector && (
          <div className="mb-2">
            <strong>{t("sector", { defaultValue: "Sector" })}:</strong>
            <ul className="list-disc list-inside">
              {Object.entries(contract.sector).map(([key, sector], index) => (
                <li key={index}>
                  {t(`contract${contract.id}.sector.${key}`, { defaultValue: "Pays inconnu" })}
                </li>
              ))}
            </ul>
          </div>
        )}

        {contract.language && (
          <p className="mb-2">
            <strong>{t("language", { defaultValue: "Language" })}:</strong> {t(`contract${contract.id}.language`, { defaultValue: "Pays inconnu" })}
          </p>
        )}

{contract.level && (
          <p className="mb-2">
            <strong>{t("level", { defaultValue: "level" })}:</strong>  {`${contract.level}`}
          </p>
        )}

{contract.levelLanguage && (
          <p className="mb-2">
            <strong>{t("levelLanguage", { defaultValue: "levelLanguage" })}:</strong>  {`${contract.levelLanguage} `}
          </p>
        )}

{contract.experience && (
          <p className="mb-2">
            <strong>{t("experience", { defaultValue: "experience" })}:</strong>  {`${contract.experience} `}
          </p>
        )}

        {contract.visaDuration && (
          <p className="mb-2">
            <strong>{t("visaDuration", { defaultValue: "Visa Duration" })}:</strong> {`${contract.visaDuration} ans`}
          </p>
        )}

        {contract.contractDuration && (
          <p className="mb-2">
            <strong>{t("contractDuration", { defaultValue: "Contract Duration" })}:</strong>  {`${contract.contractDuration} moins`}
          </p>
        )}

        {contract.contractPrice && (
          <p className="mb-2">
            <strong>{t("contractPrice", { defaultValue: "Contract Price" })}:</strong> {`${contract.contractPrice} DH`}
          </p>
        )}

        {contract.additionalInfo && (
          <p className="mt-2 mb-2">
            <strong>{t("additionalInfo", { defaultValue: "Additional Information" })}:</strong> {t(`contract${contract.id}.additionalInfo`, { defaultValue: "Pays inconnu" })}
          </p>
        )}

{contract.international && (
  <p className="mb-2">
    <strong>{t("international", { defaultValue: "International" })}:</strong>{" "}
    {contract.international ? t("yes") : t("no")}
  </p>
)}
      </div>
    </React.Fragment>
  ) : (
    <Typography>{message || t(`contract${contract.id}.country`, { defaultValue: "Contract Details" })}</Typography>
  );

  return  <div       
  ref={tooltipRef}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onTouchStart={handleTouch}
>
  {html ? (
    <HtmlTooltip title={tooltipContent} placement="top" arrow open={open}>
      {children}
    </HtmlTooltip>
  ) : (
    <BlackTooltip title={tooltipContent} placement="top" arrow open={open}>
      {children}
    </BlackTooltip>
  )}
</div>
};

export default CardTooltip;