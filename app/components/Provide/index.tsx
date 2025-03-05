import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  imgSrc: string;
  title: string;
  description: string;
}

const serviceData: ServiceItem[] = [
  {
    imgSrc: "/assets/provide/icon1.jpg",
    title: "Contrats Travail",
    description: "Sécurisation et gestion de votre emploi.",
  },
  {
    imgSrc: "/assets/provide/icon2.jpg",
    title: "Visa Assistance",
    description: "Simplification complète du processus de visa.",
  },
  {
    imgSrc: "/assets/provide/icon3.jpg",
    title: "Intégration Aide",
    description: "Adaptation facile à votre nouvel environnement.",
  },
  {
    imgSrc: "/assets/provide/icon4.jpg",
    title: "Support Emploi",
    description: "Support continu pour votre croissance professionnelle.",
  },
 
];

const Provide = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-blue-50 to-red-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Nous fournissons{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
                ce service
              </span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Chez OceanConnecting, nous sommes spécialisés dans la mise en
              relation de personnes avec des contrats de travail dans toute
              l&apos;Europe. Notre soutien complet comprend l&apos;obtention de
              postes de travail et la gestion des documents nécessaires pour
              assurer une transition en douceur pour nos clients.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-red-600 rounded-full hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              En savoir plus
              <Image
                src="/assets/provide/arrow.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="ml-2"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {serviceData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
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
