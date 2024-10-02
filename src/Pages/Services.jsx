import Hero from "../Components/Services/Hero"
import WebDev from "../Components/Services/WebDev"
import Service from "../Components/Services/Service"
import Portfolio from "../Components/Services/Portfolio"


const Services = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <WebDev />
            <Service />
            <Portfolio />
        </div>
    )
}

export default Services