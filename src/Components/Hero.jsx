import Button from "./Button"


const Hero = () => {
    return (
        <section className="hero-bg">
            <div className="w-[90%] mx-auto py-10 flex flex-col 
                    justify-center items-center text-center">
                <h1 className="text-[52px] !leading-snug font-bold 
                    w-[550px]">
                    Expert Web Development Services for Your Business
                </h1>
                <p>
                    Partner with our Experienced Team of Web Developers
                    to Build Your Brand's Unique Online Identity with Custom
                    Web Design, and Web Applications that Deliver Results
                </p>
                <Button title="Get in touch" />
            </div>
        </section>
    )
}

export default Hero