import Hero from "../Components/Services/Hero"
import WebDev from "../Components/Services/WebDev"
import Service from "../Components/Services/Service"
import PortfolioCarousel from "../Components/Services/PortfolioCarousel"


const Services = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <WebDev />
            <Service />
            <PortfolioCarousel />
        </div>
    )
}

export default Services