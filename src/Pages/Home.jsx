import Connect from '../Components/Connect'
import Hero from '../Components/Hero'
import Portfolio from '../Components/Portfolio'
import WhoAreWe from '../Components/WhoAreWe'

const Home = () => {
    return (
        <div>
            <Hero />
            <WhoAreWe />
            <Portfolio />
            <Connect />
        </div>
    )
}

export default Home