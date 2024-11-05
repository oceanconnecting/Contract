import Image from "next/image";

interface WhyData {
  heading: string;
  subheading: string;
}

const whyData: WhyData[] = [
  {
    heading: "Qualité",
    subheading:
      "Nos contrats garantissent les meilleures opportunités, développant ainsi votre carrière avec confiance.",
  },
  {
    heading: "Communication",
    subheading:
      "Améliorez vos interactions professionnelles avec nos outils de pointe.",
  },
  {
    heading: "Fiabilité",
    subheading:
      "Profitez de solutions durables et performantes pour tous vos besoins professionnels.",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-12">
          {/* IMAGE COLUMN */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/assets/why/whay.jpg"
              alt="Illustration image"
              width={600}
              height={800}
              className="rounded-lg shadow-lg object-cover h-full"
            />
          </div>

          {/* TEXT COLUMN */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Pourquoi Nous ?
            </h3>

            <p className="text-lg text-beach">
              Ne perdez plus de temps dans des démarches complexes. Avec notre
              service de fourniture de contrats de travail en Europe, nous
              automatisons et simplifions le processus pour vous. Sécurisez
              votre emploi, réduisez les erreurs administratives et gagnez du
              temps précieux.
            </p>
            <div className="space-y-6">
              {whyData.map((item, index) => (
                <div className="flex items-start space-x-4" key={index}>
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-circlebg flex items-center justify-center">
                      <Image
                        src="/assets/why/check.svg"
                        alt="Check icon"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-800">
                      {item.heading}
                    </h4>
                    <p className="mt-1 text-lg text-beach">{item.subheading}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
