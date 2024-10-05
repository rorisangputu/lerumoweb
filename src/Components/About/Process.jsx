import process from '../../assets/Process.jpg';
import Button from '../Button';
import discovery from '../../assets/discovery.png';
import Planning from '../../assets/planning.png';
import Design from '../../assets/design.png';
import Development from '../../assets/development.png';
import Testing from '../../assets/testing.png';
import Launch from '../../assets/launch.png';
import { motion } from 'framer-motion';



const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut"
            }
        },
    };
};
const SlideRight = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut"
            }
        },
    };
};
const Process = () => {
    return (
        <div className="bg-slate-50 py-10">
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left */}
                    <div
                        className="lg:w-1/2 flex flex-col gap-5">
                        <motion.h1
                            variants={SlideLeft(0.2)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='text-5xl lg:text-7xl font-semibold'>Process
                        </motion.h1>
                        <motion.p
                            variants={SlideLeft(0.2)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='text-xl text-gray-600 max-w-2xl mb-2'>
                            Our team follows a comprehensive and structured working process to ensure that every project is delivered on time, within budget, and meets the specific needs of our clients. Here is an overview of our working process.
                        </motion.p>
                        <motion.a
                            variants={SlideLeft(0.6)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            href="">
                            <Button title={"Our Recent Work"} styles="border border-blue rounded-lg text-blue py-4 px-3" link='services' />
                        </motion.a>
                        <motion.div
                            variants={SlideLeft(1)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='lg:h-[850px] lg:w-[550px] 2xl:w-[750px] mt-5 rounded-lg'>
                            <img src={process} alt="" className='object-cover rounded-2xl' />
                        </motion.div>
                    </div>
                    <div className='lg:w-1/2 flex flex-col gap-6 items-center justify-center'>
                        {/* Discovery */}
                        <motion.div
                            variants={SlideRight(0.2)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='flex items-start'>
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex items-center justify-center md:bg-white rounded-2xl'>
                                <img src={discovery} alt="" />
                            </div>
                            <div className='flex flex-col px-4 gap-3'>
                                <h1 className='text-2xl font-semibold'>Discovery</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    During the discovery phase, our team takes the time to understand clients and their businesses. We gather information about their goals, target audience, and competitors. This comprehensive understanding of the project&apos;s scope and objectives is crucial for success.
                                </p>
                            </div>
                        </motion.div>
                        {/* Planning */}
                        <motion.div
                            variants={SlideRight(0.4)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='flex items-start gap-3'>
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex items-center justify-center md:bg-white rounded-2xl'>
                                <img src={Planning} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Planning</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    With a clear understanding of the project’s requirements, we create a detailed plan outlining milestones, timelines, and deliverables. This ensures everyone is aligned and helps manage the project effectively.
                                </p>
                            </div>
                        </motion.div>
                        {/* Design */}
                        <motion.div
                            variants={SlideRight(0.6)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='flex items-start gap-3'
                        >
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex items-center justify-center md:bg-white rounded-2xl'>
                                <img src={Design} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Design</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    Based on the insights gathered during the discovery phase, our team develops a design...
                                </p>
                            </div>
                        </motion.div>

                        {/* Development */}
                        <motion.div
                            variants={SlideRight(0.8)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='flex items-start gap-3'
                        >
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex items-center justify-center md:bg-white rounded-2xl'>
                                <img src={Development} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Development</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    Once the design is approved, the development phase begins. Our team utilizes various...
                                </p>
                            </div>
                        </motion.div>

                        {/* Testing */}
                        <motion.div
                            variants={SlideRight(1.0)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='flex items-start gap-3'
                        >
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex items-center justify-center md:bg-white rounded-2xl'>
                                <img src={Testing} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Testing</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    Before launching, rigorous testing is conducted to ensure everything functions as expected...
                                </p>
                            </div>
                        </motion.div>

                        {/* Launch */}
                        <motion.div
                            variants={SlideRight(1.2)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className='flex items-start gap-3'
                        >
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex items-center justify-center md:bg-white rounded-2xl'>
                                <img src={Launch} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Launch</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    Once testing is complete and approved, the website is launched on the client&apos;s server...
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Process;
