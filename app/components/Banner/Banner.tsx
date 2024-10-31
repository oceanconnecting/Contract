import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 ">
                    <div className="text-center">
                        <h1 className=" font-bold text-navyblue text-2xl  lg:text-5xl md:4px lh-96">
                        Get a work contract in Europe as soon as possible
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                        Bienvenue à OceanConnecting ! Nous sommes là pour vous aider à trouver des opportunités d&apos;emploi satisfaisantes en Europe, en vous fournissant des contrats de travail et en nous occupant de tous les documents nécessaires pour une transition en douceur. Laissez-nous vous guider vers un emploi intéressant à travers le continent.
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                        Contact US
                        </button>
                        <button type="button" className=' text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                            <div className="flex ">
                            <FaFileDownload className="mr-4 text-xl" /> Télécharger le formulaire
                            </div>
                        </button>
                        
                    </div>

                    <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} />
                </div>
            </div>
        </main>
    )
}

export default Banner;
