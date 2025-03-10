"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";
import icon1 from 'public/assets/buyers/icon1.svg'
import icon2 from 'public/assets/buyers/icon2.svg';
import icon3 from 'public/assets/buyers/icon3.svg';
import icon4 from 'public/assets/buyers/icon4.svg';
const Services = () => {
  const services = [
    {
      icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: " Recrutement et Placement de Talents",
      description: "Grâce à leur réseau, nous avons trouvé des candidats qualifiés pour nos projets en seulement deux semaines. Leur service est rapide et efficace !",
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    },
    {
      icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Partenariats et Collaboration Internationale",
      description: "Collaborer avec eux a été une expérience incroyable. Grâce à leurs partenaires européens, notre expansion à l'international a été un succès.",
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    },
    {
      icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Gestion de Projets et Suivi Personnalisé",
      description: "Le suivi tout au long de notre projet a été exceptionnel. Grâce à leur gestion, nous avons atteint tous nos objectifs dans les délais.",
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    },
    {
      icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Consultation en Transformation Digitale",
      description: "Leurs conseils en transformation digitale ont été cruciaux pour moderniser notre entreprise. Grâce à leurs solutions, nous avons optimisé nos opérations.",
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    },
    {
      icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Formation et Développement des Compétences",
      description: "Les formations que nous avons suivies ont grandement amélioré la gestion de nos projets. Nos équipes sont maintenant plus efficaces et motivées.",
      area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    },
  ];

  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {services.map((service, index) => (
        <GridItem
          key={index}
          area={service.area}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </ul>
  );
};

export default Services;

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">{icon}</div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
