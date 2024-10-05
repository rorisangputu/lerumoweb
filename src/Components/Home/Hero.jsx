
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut"
            }
        },
    }
}

const Hero = () => {
    return (
        <section className="hero-bg">
            <div className="w-[90%] mx-auto py-20 lg:py-36 flex flex-col 
                    justify-center items-center gap-5 text-center">
                <motion.h1
                    variants={FadeUp(0.4)}
                    initial="initial"
                    animate="animate"
                    className="text-4xl md:text-5xl lg:text-[65px] !leading-snug font-bold 
                    lg:w-[700px]">
                    Expert Web Development Services for Your Business
                </motion.h1>
                <motion.p
                    variants={FadeUp(0.6)}
                    initial="initial"
                    animate="animate"
                    className="text-sm md:text-md lg:w-[55%] lg:text-xl font-light">
                    Partner with our Experienced Team of Web Developers
                    to Build Your Brand&apos;s Unique Online Identity with Custom
                    Web Design, and Web Applications that Deliver Results
                </motion.p>
                <Link to="/contacts">
                    <motion.button
                        variants={FadeUp(0.8)}
                        initial="initial"
                        animate="animate"
                        className="bg-blue
                        text-white rounded-lg text-md md:text-lg px-6 py-3 md:py-4 
                        hover:bg-[#3880c9]
                        hover:scale-105 duration-200"
                    >
                        Get in touch
                    </motion.button>
                </Link>


            </div>
        </section>
    )
}

export default Hero