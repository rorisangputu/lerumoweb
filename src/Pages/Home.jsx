
import Hero from '../Components/Home/Hero'
import Portfolio from '../Components/Home/Portfolio'
import WhoAreWe from '../Components/Home/WhoAreWe'
import Connect from '../Components/Home/Connect'
import Services from '../Components/Home/Services'

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