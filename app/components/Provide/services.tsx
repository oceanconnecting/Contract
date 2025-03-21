"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import icon1 from "public/assets/buyers/icon1.svg"
import icon2 from "public/assets/buyers/icon2.svg"
import icon3 from "public/assets/buyers/icon3.svg"
import icon4 from "public/assets/buyers/icon4.svg"
import { useTranslations } from "next-intl"
const Services = () => {
  const tt=useTranslations("homepage.services");  
  const services = [
    {
      icon: icon1,
      title: tt("service2.title"),
      description:"",
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      color: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "group-hover:border-blue-300 dark:group-hover:border-blue-700",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconBorder: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: icon2,
      title: tt("service1.title"),
      description:"",
       area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
        color: "bg-purple-50 dark:bg-purple-950/30",
        borderColor: "group-hover:border-red-300 dark:group-hover:border-red-700",
        iconBg: "bg-red-100 dark:bg-red-900/30",
        iconBorder: "border-purple-200 dark:border-purple-800",
      },
      {
        icon: icon3,
        title: tt("service3.title"),
        area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
        description:"",
         color: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "group-hover:border-green-600 dark:group-hover:border-green-700",
      iconBg: "bg-green-200 dark:bg-green-200/30",
      iconBorder: "border-emerald-200 dark:border-emerald-800",
    },
    {
      icon: icon4,
      title: tt("service4.title"),
      description:"",
       area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      color: "bg-amber-50 dark:bg-amber-950/30",
      borderColor: "group-hover:border-yellow-300 dark:group-hover:border-yellow-700",
      iconBg: "bg-yellow-200 dark:bg-yellow-200/30",
      iconBorder: "border-yellow-200 dark:border-amber-800",
    },
    {
      icon: icon1,
      title: tt("service5.title"),
      description:"",
       area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
      color: "bg-rose-0 dark:bg-rose-950/30",
      borderColor: "group-hover:border-rose-300 dark:group-hover:border-rose-700",
      iconBg: "bg-purple-400  dark:bg-purple-400 ",
      iconBorder: "border-purple dark:border-purple-400",
    },
  ]

  return (
    <ul className="grid grid-cols-1   grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[20rem] xl:grid-rows-2">
      {services.map((service, index) => (
        <GridItem
          key={index}
          area={service.area}
          icon={service.icon}
          title={service.title}
          description={service.description}
          color={service.color}
          borderColor={service.borderColor}
          iconBg={service.iconBg}
          iconBorder={service.iconBorder}
        />
      ))}
    </ul>

  )
}

export default Services

interface GridItemProps {
  area: string
  icon: any
  title: string
  description: React.ReactNode
  color: string
  borderColor: string
  iconBg: string
  iconBorder: string
}

const GridItem = ({ area, icon, title, description, color, borderColor, iconBg, iconBorder }: GridItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <li className={`min-h-[10rem] list-none ${area}`}>
      <div
        className="group  relative h-full w-full transition-all duration-500 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={cardRef}
          className={`relative h-full overflow-hidden rounded-2xl border border-neutral-200 ${color} transition-all duration-300 dark:border-neutral-800 ${borderColor} ${
            isHovered ? "shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/50 -translate-y-1" : ""
          }`}
        >
          <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-6">
            <div className="relative flex flex-1 flex-col justify-between gap-4">
              <div
                className={`w-fit rounded-xl ${iconBg} ${iconBorder} border p-3 transition-all duration-300 ${
                  isHovered ? "scale-110" : ""
                }`}
              >
                <Image src={icon || "/placeholder.svg"} width={24} height={24} alt={title} className="h-6 w-6" />
              </div>

              <div className=" z-5">
                <div className=" ">
                  {title}
                </div>
                <p className="font-sans text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-base">
                  {description}
                </p>
              </div>
            </div>

            {isHovered && (
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-neutral-200/50 to-neutral-300/50 blur-3xl dark:from-neutral-800/30 dark:to-neutral-900/30"></div>
            )}
          </div>
        </div>
      </div>
      
    </li>
  )
}

