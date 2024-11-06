import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/icon1.svg',
        percent: '80+',
        heading: "Contrats signés",
        subheading: "Des milliers d'emplois sécurisés en Europe.",
    },
    {
        imgSrc: '/assets/buyers/icon2.svg',
        percent: '290',
        heading: "Clients satisfaits",
        subheading: "La majorité de nos clients apprécient nos services.",
    },
    {
        imgSrc: '/assets/buyers/icon3.svg',
        percent: '70+',
        heading: "Partenaires en Europe",
        subheading: "Collaboration avec plus de cinquante partenaires.",
    },
    {
        imgSrc: '/assets/buyers/icon4.svg',
        percent: '85%',
        heading: "Projets terminés",
        subheading: "Nombreux projets réalisés avec succès.",
    },
]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                        <div className='flex justify-center border border-border  p-2 w-20 rounded-lg'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={40} height={40} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5'>{items.percent}</h2>
                        <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Buyers;
