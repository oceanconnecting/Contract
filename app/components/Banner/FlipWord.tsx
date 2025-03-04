import React from "react";
import { FlipWords } from "../ui/flip-words";
import { useTranslations } from "next-intl";
interface FlipWordsDemoProps {
  title1: string;
  title2: string;
}

export function FlipWordsDemo({ title1, title2 }: FlipWordsDemoProps) {
    const tt=useTranslations("homepage.Herosection")
  const words = ["easily", "quickly", "securely", "legally"];

  return (
    <div className="h-[3rem] flex justify-center items-center px-4">
      <div className="text-2xl mx-auto font-normal text-neutral-400 dark:text-neutral-400 text-center">
        {tt("title1")} 
        <FlipWords words={words} /> <br />
        {title2}
      </div>
    </div>
  );
}

