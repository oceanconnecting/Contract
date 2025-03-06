import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiTooltip, { type TooltipProps as MuiTooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import type { Contract } from "../../../contract";
import { useTranslations } from "next-intl";

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
    backgroundColor: "#ffffff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 520,
    fontSize: theme.typography.pxToRem(12),
    border: "2px solid #14213d",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    boxShadow: theme.shadows[6],
  },
}));

// Composant Tooltip
const CardTooltip: React.FC<CardTooltipProps> = ({ contract, message, html = false, children }) => {
  const t = useTranslations("homepage.CardSection.contracts");

  // Assurer que tooltipContent est toujours un ReactElement
  const tooltipContent = html ? (
    <React.Fragment>
      <Typography color="inherit" variant="subtitle2" className="font-bold text-center text-lg bg-bordertop p-2 rounded-t-lg">
        {t("title", { defaultValue: "Contract Details" })}
      </Typography>

      <div className="mt-2 p-2">
        {contract.country && (
          <p className="mb-2">
            <strong>{t("country", { defaultValue: "Country" })}:</strong> {t(`contract${contract.id}.country`, { defaultValue: "Pays inconnu" })}
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

        {contract.visaDuration && (
          <p className="mb-2">
            <strong>{t("visaDuration", { defaultValue: "Visa Duration" })}:</strong> {t(`contract${contract.id}.visaDuration`, { defaultValue: "Pays inconnu" })}
          </p>
        )}

        {contract.contractDuration && (
          <p className="mb-2">
            <strong>{t("contractDuration", { defaultValue: "Contract Duration" })}:</strong> {t(`contract${contract.id}.contractDuration`, { defaultValue: "Pays inconnu" })}
          </p>
        )}

        {contract.contractPrice && (
          <p className="mb-2">
            <strong>{t("contractPrice", { defaultValue: "Contract Price" })}:</strong> {t(`contract${contract.id}.contractPrice`, { defaultValue: "Pays inconnu" })}
          </p>
        )}

        {contract.additionalInfo && (
          <p className="mt-2 mb-2">
            <strong>{t("additionalInfo", { defaultValue: "Additional Information" })}:</strong> {t(`contract${contract.id}.additionalInfo`, { defaultValue: "Pays inconnu" })}
          </p>
        )}

        {contract.international && (
          <p className="mb-2">
            <strong>{t("international", { defaultValue: "International" })}:</strong> {t(`contract${contract.id}.international`, { defaultValue: "Pays inconnu" })}
          </p>
        )}
      </div>
    </React.Fragment>
  ) : (
    <Typography>{message || t(`contract${contract.id}.country`, { defaultValue: "Contract Details" })}</Typography>
  );

  return html ? (
    <HtmlTooltip title={tooltipContent} placement="top" arrow>
      {children}
    </HtmlTooltip>
  ) : (
    <BlackTooltip title={tooltipContent} placement="top" arrow>
      {children}
    </BlackTooltip>
  );
};

export default CardTooltip;