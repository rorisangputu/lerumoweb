import { motion } from 'framer-motion';
import code from '../../assets/code.png';
import SocialMedia from '../../assets/SocialMedia.png';
import WebAppImage from '../../assets/WebAppImage.png';
import { FadeDown, SlideRight, SlideLeft } from '../../Utils/framer';

const Service = () => {
    return (
        <div className='py-20 bg-gray-100'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col-reverse items-center lg:flex-row gap-6'>
                    {/* Services */}
                    <div className="lg:w-1/2 flex flex-col gap-5">
                        <motion.div
                            variants={SlideLeft(0.2)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='bg-white flex items-center p-6 gap-5 rounded-xl drop-shadow-md
                            hover:drop-shadow-xl hover:scale-105 duration-200'>
                            <div className='w-1/3 h-10 lg:h-20 lg:w-20'>
                                <img src={code} alt="" className='object-cover w-full h-full' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl lg:text-3xl font-semibold'>Custom Website Development</h1>
                                <p className='text-lg lg:text-xl max-w-2xl font-light'>
                                    We create fully custom, responsive websites that deliver exceptional
                                    user experiences. Our goal is to build solutions that meet the unique
                                    needs of your business while ensuring high performance and scalability.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={SlideRight(0.2)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='bg-blue text-white flex items-center p-6 gap-5 
                                rounded-xl drop-shadow-md hover:drop-shadow-xl hover:scale-105 duration-200'>
                            <div className='w-1/3 h-10 lg:h-20 lg:w-20'>
                                <img src={WebAppImage} alt="" className='object-cover w-full h-full' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl lg:text-3xl font-semibold'>Web Application Development</h1>
                                <p className='text-lg lg:text-xl max-w-2xl font-light'>
                                    We develop powerful, scalable web applications that help businesses streamline
                                    operations and improve efficiency. From user-friendly interfaces to robust
                                    backend solutions, we tailor every aspect to your business needs.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={SlideLeft(0.2)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='bg-white flex items-center p-6 gap-5 rounded-xl drop-shadow-md
                                hover:drop-shadow-xl hover:scale-105 duration-200'>
                            <div className='w-1/3 h-10 lg:h-20 lg:w-20'>
                                <img src={SocialMedia} alt="" className='object-cover w-full h-[80%]' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl lg:text-3xl font-semibold'>Social Media Strategy & Setup</h1>
                                <p className='text-lg lg:text-xl max-w-2xl font-light'>
                                    We provide expert social media setup and strategy services, helping you
                                    establish a strong digital presence. Our team ensures your brand reaches
                                    its target audience effectively on platforms like Facebook, Instagram, and LinkedIn.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Services Description */}
                    <motion.div
                        variants={FadeDown(0.2)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        className="flex flex-col lg:w-1/2 items-center justify-end gap-3">
                        <h1 className="text-[50px] font-semibold text-left">Our Expertise</h1>
                        <p className="text-xl max-w-xl text-center text-gray-700">
                            We specialize in building cutting-edge digital solutions tailored to help businesses thrive
                            in today’s competitive landscape. From custom websites to fully interactive web applications
                            and comprehensive social media strategies, we&apos;ve got you covered.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Service;
