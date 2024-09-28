import Button from '../Button';
import webdev from '../../assets/wede.png';
const AboutUs = () => {
    return (
        <div className='bg-slate-50 py-16'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col items-center gap-5'>
                    <div className='flex flex-col items-center py-5 gap-5'>
                        <h1 className='text-4xl font-semibold'>About Us</h1>
                        <p className='text-gray-700 text-2xl max-w-3xl text-center'>
                            As a Web Development agency we are committed to building custom web
                            solutions that drive business success.
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-3 items-center'>
                        <div className='w-1/2'>
                            <img src={webdev} alt="" />
                        </div>
                        <div className='w-1/2 flex flex-col gap-10'>
                            <p className='max-w-4xl !leading-snug text-lg text-gray-800'>
                                At our web development services agency, we specialize in creating
                                custom web solutions that help businesses achieve their online goals.
                                Our team of experienced web developers work collaboratively to build
                                websites and web application solutions that meet our
                                clients&apos; unique needs and deliver results.
                                <br />
                                <br />
                                Our mission is to provide our clients with the tools they need to succeed
                                in the online marketplace. We are dedicated to staying up-to-date with the
                                latest web technologies and trends to ensure that we are always delivering
                                the highest quality work. We believe that every business deserves a website
                                that reflects their brand&apos;s personality and effectively communicates their
                                message to their target audience
                            </p>
                            <Button title="Get in touch" styles="rounded-lg border border-blue
                            bg-transparent text-blue py-3 px-8 max-w-[10rem] hover:bg-blue hover:text-white"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs