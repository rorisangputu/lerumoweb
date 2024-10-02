
import Hero from '../Components/Hero/Hero'
import Portfolio from '../Components/Hero/Portfolio'
import WhoAreWe from '../Components/Hero/WhoAreWe'
import Connect from '../Components/Hero/Connect'
import Services from '../Components/Hero/Services'

const Home = () => {
    return (
        <div>
            <Hero />
            <WhoAreWe />
            <Services />
            <Portfolio />
            <Connect />
        </div>
    )
}

export default Home