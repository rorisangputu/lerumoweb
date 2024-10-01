import code from '../../assets/code.png';
import SocialMedia from '../../assets/SocialMedia.png'
import WebAppImage from '../../assets/WebAppImage.png'
const Service = () => {
    return (
        <div className='py-10 bg-gray-100'>
            <div className='w-[90%] mx-auto '>
                <div className='flex flex-col-reverse items-center lg:flex-row gap-6'>
                    {/* Services */}
                    <div className="w-1/2 flex flex-col gap-5">
                        <div className='bg-white flex items-center p-6 gap-5 rounded-xl drop-shadow-md'>
                            <div className='h-20 w-20'>
                                <img src={code} alt="" className='object-cover w-full h-full' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-3xl font-semibold'>Websites</h1>
                                <p className='text-xl max-w-2xl font-light'>
                                    We develop custom websites from scratch. Our expertise
                                    allow us to deliver high quality, responsive websites
                                    that are built to client spec.
                                </p>
                            </div>
                        </div>
                        <div className='bg-blue text-white flex items-center p-6 gap-5 rounded-xl drop-shadow-md'>
                            <div className='h-20 w-20'>
                                <img src={WebAppImage} alt="" className='object-cover w-full h-full' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-3xl font-semibold'>Web Applications</h1>
                                <p className='text-xl max-w-2xl font-light'>
                                    We develop dynamic web applications that allow clients to manage their
                                    content seamlessly. Our solutions are scalable, user-friendly, and
                                    tailored to meet specific business needs.
                                </p>
                            </div>
                        </div>

                        <div className='bg-white flex items-center p-6 gap-5 rounded-xl drop-shadow-md'>
                            <div className='h-20 w-20'>
                                <img src={SocialMedia} alt="" className='object-cover w-full h-[80%]' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-3xl font-semibold'>Social Media Setup</h1>
                                <p className='text-xl max-w-2xl font-ligh'>
                                    We offer social media setup services to help businesses build their online presence.
                                    From account creation to optimization, we ensure that your brand stands out across
                                    social platforms.
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* Services Desc */}
                    <div className="flex flex-col w-1/2 items-center justify-end gap-3">
                        <h1 className="text-[50px] font-semibold text-left">Our Services</h1>
                        <p className="text-xl max-w-xl text-center text-gray-700">
                            We offer services that are essential to businesses that looking
                            to expand their digital presences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service