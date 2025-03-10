import Image from "next/image";
import Link from "next/link";
import Services from "./services";
import { FaArrowRight } from "react-icons/fa";
interface ServiceItem {
  imgSrc: string;
  title: string;
  description: string;
}



const Provide = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-blue-50 to-red-100"
    >
      <div className="container grid lg:grid-cols-3 md:grid-cols-1  sm:grid-cols-1  gap-10 mx-auto px-4">

      <div className="max-w-6xl mx-auto px-6 py-12">
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
    Nous fournissons{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
      ce service
    </span>
  </h2>
  
  <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center md:text-left">
    Chez OceanConnecting, nous sommes spécialisés dans la mise en
    relation de personnes avec des contrats de travail dans toute
    l&apos;Europe. Notre soutien complet comprend l&apos;obtention de
    postes de travail et la gestion des documents nécessaires pour
    assurer une transition en douceur pour nos clients.
  </p>
  
  <div className="mt-8 flex justify-center  text-center items-center md:justify-start">
    <Link
      href="/"
      className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-red-600 rounded-full hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      En savoir plus
      <FaArrowRight className="ml-2"/>
    </Link>
  </div>
</div>

        <div className="col-span-2">
          <Services /></div>

      </div>

     
    </section>
  );
};

const ServiceCard = ({ imgSrc, title, description }: ServiceItem) => (
  <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl flex items-center justify-center mb-6">
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={title}
        width={32}
        height={32}
      />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-lg text-gray-700">{description}</p>
  </div>
);

export default Provide;
