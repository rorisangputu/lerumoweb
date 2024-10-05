import Button from '../Button';
import Law from '../../assets/LawCorp.jpeg';
import coinVue from '../../assets/coinVue.png';
import SoundTour from '../../assets/soundtour.png';
import BlueWorld from '../../assets/blueworld.png';
import { motion } from 'framer-motion';


const portfolioItems = [
    {
        image: Law,
        name: 'Law Corp',
        description: 'A mock website for a South African law firm, focusing on serious and catastrophic injury cases.',
        liveLink: 'https://law-corp-09.vercel.app/',
        duration: 0.8
    },
    {
        image: coinVue,
        name: 'CoinVue',
        description: 'CoinVue is a web application designed to provide real-time cryptocurrency market data.',
        liveLink: 'https://coinvue.vercel.app/',
        duration: 1.2
    },
    {
        image: SoundTour,
        name: 'Sound Tour',
        description: 'We developed the website for Sound Tour, allowing users to choose a streaming platform.',
        liveLink: 'https://www.soundtour.co.za',
        duration: 1.6
    },
    {
        image: BlueWorld,
        name: 'Blue World',
        description: 'This website was developed for a small business in Johannesburg. Blue World is sells alternative smoking devices such as vapes and pod systems.',
        liveLink: 'https://www.soundtour.co.za',
        duration: 2
    },
];


const Portfolio = () => {
    return (
        <div className='py-10 bg-gray-100 font-spacegrotesk '>
            <div className='w-[90%] mx-auto '>
                <div className='flex flex-col 2xl:flex-row md:gap-5'>
                    <div className='flex flex-col items-center justify-center 
                            text-center gap-3 w-full 2xl:w-2/5 mb-10 lg:mb-0'>
                        <div className='flex flex-col w-full gap-2'>
                            <p className='text-xl text-gray-600'>View our work</p>
                            <h1 className='text-5xl md:text-7xl font-bold'>Portfolio.</h1>
                        </div>
                        <p className='max-w-3xl text-gray-600 text-md md:text-lg'>
                            Our portfolio demonstrates our expertise in solving complex design
                            challenges, creating seamless user flows, and delivering visually stunning
                            interfaces. Let us bring our design prowess to your project.
                        </p>
                    </div>
                    <div className="w-full 2xl:w-3/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {portfolioItems.map((item, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: item.duration, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    key={index}
                                    className='relative group w-full h-56 md:h-96 lg:h-72 bg-cover bg-top 
                                    overflow-hidden flex justify-center items-center'
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    {/* Overlay that appears on hover */}
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                                    {/* Name of the project - shown on hover */}
                                    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <h1 className="text-2xl font-bold text-white">{item.name}</h1>
                                        <Button link={item.liveLink} title={"Vist"} styles='px-4 py-2 text-white bg-blue text-md' />
                                    </div>

                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio