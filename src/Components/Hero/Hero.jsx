import Button from "../Button"


const Hero = () => {
    return (
        <section className="hero-bg">
            <div className="w-[90%] mx-auto py-20 lg:py-36 flex flex-col 
                    justify-center items-center gap-5 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-[65px] !leading-snug font-bold 
                    lg:w-[700px]">
                    Expert Web Development Services for Your Business
                </h1>
                <p className="text-sm md:text-md lg:w-[55%] lg:text-xl font-light">
                    Partner with our Experienced Team of Web Developers
                    to Build Your Brand&apos;s Unique Online Identity with Custom
                    Web Design, and Web Applications that Deliver Results
                </p>
                <Button
                    title="Get in touch"
                    styles="bg-blue 
                    text-white rounded-lg text-md md:text-lg px-6 py-3 md:py-4 hover:bg-[#3880c9]
                    hover:scale-105 duration-200"
                    link='#contact'
                />
            </div>
        </section>
    )
}

export default Hero