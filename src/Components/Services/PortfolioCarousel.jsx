import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Law from '../../assets/LawCorp.jpeg';
import coinVue from '../../assets/coinVue.png';
import SoundTour from '../../assets/soundtour.png';

const portfolioItems = [
    {
        image: Law,
        name: 'Law Corp',
        description: 'A mock website for a South African law firm, focusing on serious and catastrophic injury cases. The design features a modern layout with responsive design, including a dynamic "People" page showcasing the firms top attorneys',
        liveLink: 'https://law-corp-09.vercel.app/',
    },
    {
        image: coinVue,
        name: 'CoinVue',
        description: 'CoinVue is a web application designed to provide real-time cryptocurrency market data and detailed information on various coins. Users can search for cryptocurrencies, view their prices in different currencies.',
        liveLink: 'https://coinvue.vercel.app/',
    },
    {
        image: SoundTour,
        name: 'Sound Tour',
        description: 'We developed the website for the Sound Tour website that allows users to choose a streaming platform to stream a song.',
        liveLink: 'https://www.soundtour.co.za',
    },
];

const PortfolioCarousel = () => {
    return (
        <div className="py-20">
            <div className='w-[90%] mx-auto flex flex-col gap-5'>

                <Carousel
                    animation="slide"
                    interval={4000}
                    indicators={true}
                    // navButtonsAlwaysVisible={true} // Show navigation buttons
                    // navButtonsProps={{
                    //     style: {
                    //         backgroundColor: '#000', // Change button background color
                    //         color: '#fff', // Change button icon color
                    //     }
                    // }}
                    indicatorIconButtonProps={{
                        style: {
                            padding: '10px',    // Increase indicator size
                            color: '#C4C4C4'    // Change indicator color
                        }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: '#4A90E2' // Active indicator color
                        }
                    }}
                >
                    {portfolioItems.map((item, index) => (
                        <Card
                            key={index}
                            sx={{
                                maxWidth: 800,
                                minHeight: 600,
                                margin: 'auto',
                                padding: 2,
                                backgroundColor: '#ffffff',


                            }}
                            className='drop-shadow-md p-2'
                        >
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.name}
                                sx={{
                                    height: 350,
                                    width: '100%',
                                    objectFit: 'contain'

                                }}
                            />
                            <CardContent sx={{ textAlign: 'center', padding: '20px' }}>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    gutterBottom
                                    sx={{ fontWeight: 'bold', color: '#333' }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ marginBottom: 2, color: '#555' }}
                                >
                                    {item.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={item.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    disabled={!item.liveLink}
                                    sx={{
                                        backgroundColor: '#4A90E2',
                                        '&:hover': {
                                            backgroundColor: '#357ABD',
                                        },
                                        borderRadius: '20px',
                                        padding: '10px 30px',
                                    }}
                                >
                                    View Live
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Carousel>
            </div>

        </div >

    );
}

export default PortfolioCarousel;