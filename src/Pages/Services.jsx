import Hero from "../Components/Services/Hero"
import WebDev from "../Components/Services/WebDev"
import Service from "../Components/Services/Service"
import Porfolio from "../Components/Services/Porfolio"


const Services = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <WebDev />
            <Service />
            <Porfolio />
        </div>
    )
}

export default Services