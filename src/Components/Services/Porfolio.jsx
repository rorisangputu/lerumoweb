import { Typography, Button, Box } from '@mui/material';
import Law from '../../assets/LawCorp.jpeg';
import coinVue from '../../assets/coinVue.png';
import SoundTour from '../../assets/soundtour.png';

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
        description: 'We developed the website for Sound Tour, allowing users to choose a streaming platform.',
        liveLink: 'https://www.soundtour.co.za',
    },
];


const Porfolio = () => {
    return (
        <Box className="w-full">
            <Box className="grid grid-cols-1 md:grid-cols-2">
                {portfolioItems.map((item, index) => (
                    <Box
                        key={index}
                        className="relative overflow-hidden group"
                        sx={{
                            height: 400,
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                            position: 'relative',
                        }}
                    >
                        {/* Overlay */}
                        <Box
                            className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition duration-300"
                        ></Box>

                        {/* Content to appear on hover */}
                        <Box
                            className="absolute inset-0 flex flex-col gap-4 justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300"
                        >
                            <Typography
                                variant="h3"
                                className="font-bold"

                            >
                                {item.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="mb-6 text-center"
                                sx={{ color: '#fff', padding: '0 10px' }}
                            >
                                {item.description}
                            </Typography>
                            <Button
                                variant="contained"
                                href={item.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    padding: '10px 30px',
                                }}
                                className='bg-blue'
                            >
                                View Live
                            </Button>
                        </Box>

                        {/* Hover scale effect */}
                        <Box
                            className="absolute inset-0 transition-transform duration-300 transform group-hover:scale-105"
                        ></Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Porfolio