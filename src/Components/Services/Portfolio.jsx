import Button from '../Button';
import Law from '../../assets/LawCorp.jpeg';
import coinVue from '../../assets/coinVue.png';
import SoundTour from '../../assets/soundtour.png';
import BlueWorld from '../../assets/blueworld.png';

const portfolioItems = [
    {
        image: Law,
        name: 'Law Corp',
        description: 'A mock website for a South African law firm, focusing on serious and catastrophic injury cases.',
        liveLink: 'https://law-corp-09.vercel.app/',
    },
    {
        image: coinVue,
        name: 'CoinVue',
        description: 'CoinVue is a web application designed to provide real-time cryptocurrency market data.',
        liveLink: 'https://coinvue.vercel.app/',
    },
    {
        image: SoundTour,
        name: 'Sound Tour',
        description: 'We developed the website for Sound Tour, allowing users to choose a streaming platform. This solutions purpose was to direct traffic to a song which inevitably increased streams',
        liveLink: 'https://www.soundtour.co.za',
    },
    {
        image: BlueWorld,
        name: 'Blue World',
        description: 'We developed this website for a small business in Johannesburg who needed a web solution which helped them increased sales. Blue World sells alternative smoking devices such as vapes and pod systems.',
        liveLink: 'https://blueworld-one.vercel.app/',
        duration: 1.4
    },
];


const Portfolio = () => {
    return (
        <div className="w-full py-20">
            <div className="w-[90%] mx-auto flex flex-col gap-12">
                <div>
                    <h1 className='font-semibold text-5xl lg:text-6xl'>Portfolio.</h1>
                    <p className='text-lg font-light'>Our recent work</p>
                </div>
                {portfolioItems.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-8 ">
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <img src={item.image} alt={item.name} className="w-full h-auto rounded-lg shadow-lg" />
                        </div>

                        {/* Project Info */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <div className='flex flex-col gap-3 my-4'>
                                <h3 className="text-3xl font-bold">{item.name}</h3>
                                <p className="text-gray-600 max-w-md ">{item.description}</p>
                            </div>
                            <Button link={item.liveLink} title='View' styles="bg-blue w-[20%] text-center rounded-lg 
                            py-3 px-2 text-white text-lg" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio