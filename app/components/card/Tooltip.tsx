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
  },
}));

// Tooltip HTML
const HtmlTooltip = styled(({ className, ...props }: MuiTooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    padding: theme.spacing(1),
  },
}));

// Composant Tooltip
const CardTooltip: React.FC<CardTooltipProps> = ({ contract, message, html = false, children }) => {
  const t = useTranslations("homepage.CardSection.contracts");

  // Assurer que tooltipContent est toujours un ReactElement
  const tooltipContent = html ? (
    <React.Fragment>
      <Typography color="inherit" variant="subtitle2" className="font-bold">
        {t("title", { defaultValue: "Contract Details" })}
      </Typography>
      <div className="mt-1">
        <p>
          <strong>{t("country", { defaultValue: "Country" })}:</strong> {contract.country || "Unknown"}
        </p>
        {contract.language && (
          <p>
            <strong>{t("language", { defaultValue: "Language" })}:</strong> {contract.language}
          </p>
        )}
        {contract.additionalInfo && <p className="mt-1">{contract.additionalInfo}</p>}
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
