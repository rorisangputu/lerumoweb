import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Law from '../../assets/LawCorp.jpeg';
import WeHandle from '../../assets/WeHandle.jpeg';
import SoundTour from '../../assets/soundtour.png';

const portfolioItems = [
    {
        image: Law,
        name: 'Law Corp',
        description: 'A brief description of Project 1.',
        liveLink: '',
    },
    {
        image: WeHandle,
        name: 'We Handle',
        description: 'A brief description of Project 2.',
        liveLink: '',
    },
    {
        image: SoundTour,
        name: 'Sound Tour',
        description: 'A brief description of Project 3.',
        liveLink: 'https://www.soundtour.co.za',
    },
];

const PortfolioCarousel = () => {
    return (
        <div>
            <Carousel animation="slide" interval={3000} indicators={true}>
                {portfolioItems.map((item, index) => (
                    <Card key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 500, margin: 'auto', padding: 2 }}>
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.name}
                            sx={{ height: 250, width: '100%', objectFit: 'cover', borderRadius: 2 }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" component="div" gutterBottom>
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                                {item.description}
                            </Typography>
                            <Button variant="contained" color="primary" href={item.liveLink} target="_blank" rel="noopener noreferrer">
                                View Live
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Carousel>
        </div>

    );
}

export default PortfolioCarousel;
