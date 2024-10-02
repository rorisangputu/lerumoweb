import Button from '../Button';
import webdev from '../../assets/webdev.png';

const WebDev = () => {
    return (
        <section className='w-full py-10'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col lg:flex-row items-center
                justify-center gap-8'>
                    <div className='lg:w-1/2 flex flex-col items-center text-center lg:text-start lg:items-start gap-5'>
                        <h1 className='text-3xl px-10 lg:px-0 leading-none 
                            lg:text-6xl font-semibold lg:leading-[5rem]'
                        >Web & App Development Done Differently</h1>
                        <p className='max-w-2xl text-lg md:text-xl text-gray-600'>
                            We meticulously write custom code line by line to our customers
                            specifications, giving us total control over the design, and
                            performance of the website.
                        </p>
                        <Button
                            title={"Get in touch"}
                            styles="text-blue text-lg hover:text-white border
                            border-blue rounded-xl py-3 md:py-4 px-3 hover:bg-[#3880c9]
                            hover:scale-105 duration-200"
                        />
                    </div>
                    <div className='lg:w-1/2 flex items-center justify-center'>
                        <img src={webdev} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WebDev