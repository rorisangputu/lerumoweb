import { motion } from "framer-motion"
import { FadeDown } from "../../Utils/framer"

const Hero = () => {
    return (
        <div className="hero-bg py-20">
            <div className="w-[90%] mx-auto py-24">
                <motion.div
                    variants={FadeDown(0.2)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center items-center gap-7">
                    <h1 className="text-[65px] font-semibold">About Us</h1>
                    <p className="font-light text-lg text-gray-500">
                        <span className="text-black font-semibold">Home / </span>About Us
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero