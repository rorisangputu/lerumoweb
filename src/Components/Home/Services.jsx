// import code from '../../assets/code.png';
// import SocialMedia from '../../assets/SocialMedia.png';
// import WebAppImage from '../../assets/WebAppImage.png';

import Accordian from "../Accordian";


const Services = () => {
    return (
        <div className='py-20 bg-gray-100'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col-reverse items-center lg:flex-row gap-6'>
                    {/* Accordion */}
                    <div className="w-full lg:w-1/2">
                        <Accordian />
                    </div>
                    {/* Services Description */}
                    <div className="flex flex-col lg:w-1/2 items-center justify-end gap-3">
                        <h1 className="text-[50px] font-semibold text-left">Our Expertise</h1>
                        <p className="text-xl max-w-xl text-center text-gray-700">
                            We specialize in building cutting-edge digital solutions tailored to help businesses thrive
                            in today&apos;s competitive landscape. From custom websites to fully interactive web applications
                            and comprehensive social media strategies, we&apos;ve got you covered.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Services;
