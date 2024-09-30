import AboutUs from "../Components/About/AboutUs"
import CallToAction from "../Components/About/CallToAction"
import Hero from "../Components/About/Hero"
import Process from "../Components/About/Process"
import WhyChooseUs from "../Components/About/WhyChooseUs"


const About = () => {
    return (
        <div>
            <Hero />
            <AboutUs />
            <WhyChooseUs />
            <Process />
            <CallToAction />
        </div>
    )
}

export default About