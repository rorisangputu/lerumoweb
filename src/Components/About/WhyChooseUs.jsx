import expert from '../../assets/expert.png';
import comm from '../../assets/communication.png';
import cust from '../../assets/customerservice.png';
import veri from '../../assets/verified.png';
import { motion } from 'framer-motion';
import { FadeUp } from '../../Utils/framer';



const WhyChooseUs = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col gap-7">
                    <motion.div
                        variants={FadeUp(0.4)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center items-center gap-8">
                        <h1 className="text-6xl lg:text-7xl font-semibold">Why Choose Us</h1>
                        <p className="text-xl md:text-2xl text-gray-600">
                            Our commitment to excellence and innovative solutions makes us the ideal partner for your projects.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-16 drop-shadow-lg py-9">
                        <motion.div
                            variants={FadeUp(0.3)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 bg-gray-200 p-6 rounded-xl">
                            <div className='-mt-[60px] bg-gray-100 w-[70px] h-[70px] flex items-center justify-center rounded-full'>
                                <img src={expert} alt="Expertise" />
                            </div>
                            <h1 className="font-light text-2xl md:text-3xl">Expertise</h1>
                            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl">
                                Our team has extensive experience in delivering tailored web solutions across various industries, ensuring your project receives the expert attention it deserves.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={FadeUp(0.3)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 bg-gray-200 p-6 rounded-xl">
                            <div className='-mt-[60px] bg-gray-100 w-[70px] h-[70px] flex items-center justify-center rounded-full'>
                                <img src={veri} alt="Attention to Detail" />
                            </div>
                            <h1 className="font-light text-2xl md:text-3xl">Attention to Detail</h1>
                            <p className="text-gray-600 text-xl md:text-2xl max-w-2xl">
                                We meticulously focus on every detail of our projects, ensuring quality and precision in all aspects of design and functionality.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={FadeUp(0.3)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 bg-gray-200 p-6 rounded-xl">
                            <div className='-mt-[60px] bg-gray-100 w-[70px] h-[70px] flex items-center justify-center rounded-full'>
                                <img src={comm} alt="Communication" />
                            </div>
                            <h1 className="font-light text-2xl md:text-3xl">Communication</h1>
                            <p className="text-gray-600 text-xl md:text-2xl max-w-2xl">
                                We prioritize clear and open communication with our clients, ensuring you are always informed and involved in the development process.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={FadeUp(0.3)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 bg-gray-200 p-6 rounded-xl">
                            <div className='-mt-[60px] bg-gray-100 w-[70px] h-[70px] flex items-center justify-center rounded-full'>
                                <img src={cust} alt="Customer Service" />
                            </div>
                            <h1 className="font-light text-2xl md:text-3xl">Customer Service</h1>
                            <p className="text-gray-600 text-xl md:text-2xl max-w-2xl">
                                Our dedicated customer service team is here to support you every step of the way, providing prompt assistance and guidance tailored to your needs.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
