import React from "react";
import { FlipWords } from "../ui/flip-words";
import { useTranslations } from "next-intl";
interface FlipWordsDemoProps {
  title1: string;
  title2: string;
}

export function FlipWordsDemo() {
    const tt=useTranslations("homepage.HeroSection")
  const words = [tt("banner.easily"), tt("banner.quickly"), tt("banner.securely"), tt("banner.legally")];

  return (
    <div className="h-[3rem] flex justify-center items-center ">
      <div className="text-2xl mx-auto font-bold text-neutral-400 dark:text-neutral-400 text-start">
        {tt("banner.title1")} 
        <FlipWords words={words} /> <br />
        {tt("banner.title2")} 
      </div>
    </div>
  );
}

