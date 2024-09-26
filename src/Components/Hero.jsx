import Button from "./Button"


const Hero = () => {
    return (
        <section className="hero-bg">
            <div className="w-[90%] mx-auto py-36 flex flex-col 
                    justify-center items-center gap-5 text-center">
                <h1 className="text-[65px] !leading-snug font-bold 
                    w-[700px]">
                    Expert Web Development Services for Your Business
                </h1>
                <p className="w-[55%]">
                    Partner with our Experienced Team of Web Developers
                    to Build Your Brand's Unique Online Identity with Custom
                    Web Design, and Web Applications that Deliver Results
                </p>
                <Button
                    title="Get in touch"
                    styles="bg-blue 
                    text-white rounded-lg p-3 hover:bg-[#3880c9]
                    hover:scale-105 duration-200"
                />
            </div>
        </section>
    )
}

export default Hero