import process from '../../assets/Process.jpg';
import Button from '../Button';
import discovery from '../../assets/discovery.png';
import Planning from '../../assets/planning.png';
import Design from '../../assets/design.png';
import Development from '../../assets/development.png';
import Testing from '../../assets/testing.png';
import Launch from '../../assets/launch.png'
const Process = () => {
    return (
        <div className="bg-slate-50 py-10">
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left */}
                    <div className="lg:w-1/2 flex flex-col gap-5">
                        <h1 className='text-5xl lg:text-7xl font-semibold'>Process</h1>
                        <p className='text-xl text-gray-600 max-w-2xl'>
                            As a web developer, I follow a comprehensive and structured
                            working process to ensure that every project is delivered on
                            time, within budget, and meets the specific needs of my clients.
                            Here is an overview of my working process.
                        </p>
                        <a href="">
                            <Button title={"Our recent work"} styles="border border-blue
                                rounded-lg text-blue py-4 px-3"/>
                        </a>
                        <div className='lg:h-[850px] lg:w-[550px] 2xl:w-[750px] mt-5 rounded-lg'>
                            <img src={process} alt="" className='object-cover rounded-2xl' />
                        </div>
                    </div>
                    <div className='lg:w-1/2 flex flex-col gap-6 items-center justify-center'>
                        {/* Discovery */}
                        <div className='flex items-start'>
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex 
                                items-center justify-center md:bg-white rounded-2xl'
                            >
                                <img src={discovery} alt="" />
                            </div>
                            <div className='flex flex-col px-4 gap-3'>
                                <h1 className='text-2xl font-semibold'>Discovery</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    During the discovery phase, I take the time to get to
                                    know my clients and their businesses. I gather information
                                    about their goals, target audience, and competitors. This
                                    information helps me develop a comprehensive understanding
                                    of the project&apos;s scope and objectives.
                                </p>
                            </div>
                        </div>
                        {/* Planning */}
                        <div className='flex items-start gap-3'>
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex 
                                items-center justify-center md:bg-white rounded-2xl'
                            >
                                <img src={Planning} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Planning</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    Once I have a clear understanding of the project&apos;s requirements,
                                    I create a detailed plan that outlines the project&apos;s milestones,
                                    timelines, and deliverables. This plan ensures that everyone is
                                    on the same page and helps me manage the project effectively.
                                </p>
                            </div>
                        </div>
                        {/* Design */}
                        <div className='flex items-start gap-3'>
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex 
                                items-center justify-center md:bg-white rounded-2xl'
                            >
                                <img src={Design} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Design</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    Based on the information gathered during the discovery phase,
                                    I develop a design that aligns with my client&apos;s brand identity
                                    and meets their specific needs. I create wireframes, mockups,
                                    and prototypes to ensure that the design is user-friendly, visually
                                    appealing, and functional across all devices.
                                </p>
                            </div>
                        </div>
                        {/* Development */}
                        <div className='flex items-start gap-3'>
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex 
                                items-center justify-center md:bg-white rounded-2xl'
                            >
                                <img src={Development} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Development</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    Once the design is approved, I begin the development phase.
                                    I use a variety of programming languages and content management
                                    systems to build a functional and responsive website. I pay close
                                    attention to detail to ensure that the website is optimized for
                                    search engines, loads quickly, and is accessible to all users.
                                </p>
                            </div>
                        </div>
                        {/* Testing */}
                        <div className='flex items-start gap-3'>
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex 
                                items-center justify-center md:bg-white rounded-2xl'
                            >
                                <img src={Testing} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Testing</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    Before the website is launched, I perform rigorous testing
                                    to ensure that everything is functioning as expected. I test
                                    the website&apos;s compatibility, security, and performance to ensure
                                    that it meets industry standards and is free from bugs and errors.
                                </p>
                            </div>
                        </div>
                        {/* Launch */}
                        <div className='flex items-start gap-3'>
                            <div className='h-10 w-20 md:h-[60px] md:w-[90px] flex 
                                items-center justify-center md:bg-white rounded-2xl'
                            >
                                <img src={Launch} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Launch</h1>
                                <p className='text-lg leading-snug max-w-4xl text-gray-600'>
                                    Once the website is tested and approved, I launch it on the
                                    client&apos;s server. I ensure that everything is running smoothly
                                    and that the website is accessible to all users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Process