// import Image from 'next/image';
// import {useTranslations} from 'next-intl';
// // import icon1 from '../../public/assets/buyers/icon1.svg';
// import icon1 from '../../../public/assets/buyers/icon1.svg'
// import icon2 from '../../../public/assets/buyers/icon2.svg';
// import icon3 from '../../../public/assets/buyers/icon3.svg';
// import icon4 from '../../../public/assets/buyers/icon4.svg';
// import { useEffect, useRef, useState } from "react";
// interface cardDataType {
//     imgSrc: string;
//     heading: string;
//     percent: string;
//     subheading: string;
// }

// const cardData: cardDataType[] = [
//     {
//         imgSrc: icon1,
//         percent: '80+',
//         heading: "Contrats signés",
//         subheading: "Des milliers d'emplois sécurisés en Europe.",
//     },
//     {
//         imgSrc: icon2,
//         percent: '290',
//         heading: "Clients satisfaits",
//         subheading: "La majorité de nos clients apprécient nos services.",
//     },
//     {
//         imgSrc: icon3,
//         percent: '70+',
//         heading: "Partenaires en Europe",
//         subheading: "Collaboration avec plus de cinquante partenaires.",
//     },
//     {
//         imgSrc: icon4,
//         percent: '85%',
//         heading: "Projets terminés",
//         subheading: "Nombreux projets réalisés avec succès.",
//     },
// ]

// const Buyers = () => {
//     return (
//         <div className='mx-auto max-w-7xl py-16 px-6'>
//             <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
//                 {cardData.map((items, i) => (
//                     <div className='flex flex-col justify-center items-center' key={i}>
//                         <div className='flex justify-center border border-border  p-2 w-20 rounded-lg'>
//                             <Image src={items.imgSrc} alt={items.imgSrc} width={40} height={40} />
//                         </div>
//                         <h2 className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5'>{items.percent}</h2>
//                         <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
//                         <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }
// export default Buyers;

import React from 'react';
import {useTranslations} from 'next-intl';
 import icon1 from '../../../public/assets/buyers/icon1.svg'
 import icon2 from '../../../public/assets/buyers/icon2.svg';
 import icon3 from '../../../public/assets/buyers/icon3.svg';
 import icon4 from '../../../public/assets/buyers/icon4.svg';
 import contract from 'public/bayer/contract.png';
 import colaboration from '/public/bayer/colaboration.png';
 import clientSatisfier from '/public/bayer/clientSatisfier.jpeg';
 import projetSucces from '/public/bayer/projetSucces.jpeg';
 import { useEffect, useRef, useState } from "react";
import { AnimatedTestimonials } from '../ui/animated-testimonials';
import exp from 'constants';

const Buyers=()=> {
const tt =useTranslations("homepage.bayer")
    const testimonials = [
        {
          percent: "80+",
          heading: tt("heading1"),
          subheading: tt("subheading"),
          review:tt("review1"),

          src: contract, // ✅ Chemin absolu
        },
        {
          percent: "70+",
          heading: tt("heading2"),
          subheading:tt("subheading2"),
          review:tt("review2"),

          src: colaboration , // ✅ Correct
        },
        {
          percent: "290",
          heading:tt("heading3"),
          subheading:tt("subheading3"),
          
          review:tt("review3"),

          src: clientSatisfier, // ✅ Correct
        },
        {
          percent: "85%",
          heading: "Projets terminés",
          subheading: "Nombreux projets réalisés avec succès.",
          review: "Notre projet a été livré à temps et avec qualité.",

          src: projetSucces, // ✅ Correct
        },
      ];
      
      return <AnimatedTestimonials testimonials={testimonials} />;
      

}
export default Buyers;