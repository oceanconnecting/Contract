import Image from "next/image";
import map from "../../../public/assets/network/map.png"
import bangladesh from "../../../public/assets/network/bangladesh.svg";
import america from "../../../public/assets/network/america.svg"
import australia from "../../../public/assets/network/australia.svg"
import china from "../../../public/assets/network/china.svg"
import { useTranslations } from "next-intl";
interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}



const Network = () => {
    const t=useTranslations("homepage.network")
    const Aboutdata: datatype[] = [
        {
            imgSrc: bangladesh,
            country: t("dataNetwork.network1.country"),
            paragraph: t("dataNetwork.network1.paragraph"),
    
        },
        {
            imgSrc: america,
            country: t("dataNetwork.network2.country"),
            paragraph: t("dataNetwork.network2.paragraph"),  },
        {
            imgSrc: australia,
            country: t("dataNetwork.network3.country"),
            paragraph: t("dataNetwork.network3.paragraph"),
        },
        {
            imgSrc: china,
            country: t("dataNetwork.network4.country"),
            paragraph: t("dataNetwork.network4.paragraph"),
        },
    ]
    return (
        <div className="bg-babyblue" id="project">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">{t("p1")} <br />{t("p2")} </h3>

                <Image src={map} alt={"map-image"} width={1400} height={800} />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 shadow-xl'>
                            <div className="flex justify-start items-center gap-2">
                                <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                                <h4 className="text-xl font-medium text-midnightblue">{item.country}</h4>
                            </div>
                            <hr />
                            <h4 className='text-lg font-normal text-bluegrey my-2'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Network;
