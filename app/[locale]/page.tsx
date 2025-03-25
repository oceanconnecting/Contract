"use client";
import {useTranslations} from 'next-intl';
import Link from 'next/link';

import Companies from '../components/Companies/Companies';
import Buyers from '../components/Buyers/index';
import Provide from '../components/Provide/index';
import Why from '../components/Why/index';
import Network from '../components/Network/index';
import Clientsay from '../components/Clientsay/index';
import Newsletter from '../components/Newsletter/Newsletter';
import HeroSection from '../components/Banner/index';
import QuestionSection from '../components/question/question';
import StepsSection from '../components/steps/steps';
import CardSection from '../components/card/card';
import Navbar from 'app/components/Navbar';
import Footer from 'app/components/Footer';
import Map from '../components/Map/map';
import { contractContent } from '../components/Data/data';
import OfflineChat from 'app/components/offlineChat/OfflineChat';
export default function HomePage() {
  const t = useTranslations();
  return (
   
    <main>
      <Navbar />
            <HeroSection />
       <Map />
      
      <CardSection />
      <Buyers />
      <Provide />
      <OfflineChat/>
      <Why />
      <Network />
      <StepsSection/>
      {/* <QuestionSection/> */}
      <Clientsay />
     
      <Footer/>
    </main>
   
  );
}