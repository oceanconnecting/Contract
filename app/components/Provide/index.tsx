import Image from "next/image";
import Link from "next/link";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/provide/icon1.png",
    country: "Contrats Travail",
    paragraph: "Sécurisation et gestion de votre emploi.",
  },
  {
    imgSrc: "/assets/provide/icon2.png",
    country: "Visa Assistance",
    paragraph: "Simplification complète du processus de visa.",
  },
  {
    imgSrc: "/assets/provide/icon3.png",
    country: "Intégration Aide",
    paragraph: "Adaptation facile à votre nouvel environnement.",
  },
  {
    imgSrc: "/assets/provide/icon4.jpg",
    country: "Support Emploi.",
    paragraph: "Support continu pour votre croissance professionnelle.",
  },
];

const Provide = () => {
  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <p className="text-4xl lg:text-6xl pt-4 font-bold lh-81 mt-5 text-center lg:text-start">
                Nous fournissons ce service.
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                Chez OceanConnecting, nous sommes spécialisés dans la mise en
                relation de personnes avec des contrats de travail dans toute
                l&apos;Europe. Notre soutien complet comprend l&apos;obtention
                de postes de travail et la gestion des documents nécessaires
                pour assurer une transition en douceur pour nos clients.
              </h4>
              <Link
                href={"/"}
                className="mt-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent flex gap-2 mx-auto lg:mx-0 space-links"
              >
                En savoir plus{" "}
                <Image
                  src={"/assets/provide/arrow.svg"}
                  alt={"arrow"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-gradient-to-r from-blue-200 to-red-300 rounded-3xl">
              {Aboutdata.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={64}
                    height={64}
                    className="mb-5"
                  />
                  <h4 className="text-2xl font-semibold">{item.country}</h4>
                  <h4 className="text-lg font-normal text-bluegray my-2">
                    {item.paragraph}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
