"use client";
import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
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
import CardSection from  '../components/card/card';

export default function HomePage() {
  const t = useTranslations();
  return (
   
    <main>
            <HeroSection />
      {/* <Banner /> */}
      {/* <Companies /> */}
      <CardSection/>
      <Buyers />
      <Provide />
      <Why />
      <Network />
      <StepsSection/>
      <QuestionSection/>
      <Clientsay />
      {/* <Newsletter /> */}
    </main>
   
  );
}