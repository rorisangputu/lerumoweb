import mobi from '../../assets/mobile-first.png';
import mobidesign from '../../assets/web-design.png';
import main from '../../assets/maintenance.png';
import Logo from '../../assets/LogoLerumo.png';

const WhoAreWe = () => {
    return (
        <div className="w-full">
            <div className="w-[90%] mx-auto">
                <section className="text-center my-20 flex flex-col gap-7 justify-center items-center">
                    <div className='flex items-center justify-center h-40 w-40'>
                        <img src={Logo} alt="Lerumo Tech Logo" className='w-full h-full' />
                    </div>
                    <h2 className="text-4xl font-semibold font-sans mb-6">Who We Are</h2>
                    <p className="text-lg lg:text-xl max-w-3xl mx-auto text-gray-600">
                        At Lerumo Tech, we specialize in developing and maintaining high-quality corporate websites and web applications. As a boutique web development company, we focus on providing tailored digital solutions that help businesses thrive online. From sleek, professional designs to robust functionalities, we ensure your digital presence aligns with your brand’s goals and vision.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-100 p-6 flex flex-col items-center rounded-lg text-center">
                            <div className="mb-4 h-[50px] w-[50px] ">
                                <img src={mobidesign} alt="Custom Web Design" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Custom Web Design</h3>
                            <p className="text-gray-600">
                                We create visually engaging, user-friendly websites designed to reflect your brand&apos;s identity while offering seamless navigation for your users.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 flex flex-col items-center rounded-lg text-center">
                            <div className="mb-4 h-[50px] w-[50px] ">
                                <img src={mobi} alt="Mobile Optimization" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Mobile Optimization</h3>
                            <p className="text-gray-600">
                                We prioritize mobile-first design, ensuring your website looks and performs great on all devices, from smartphones to desktops.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 flex flex-col items-center rounded-lg text-center">
                            <div className="mb-4 h-[50px] w-[50px] ">
                                <img src={main} alt="Ongoing Support" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Ongoing Support</h3>
                            <p className="text-gray-600">
                                Our team offers continuous support, updates, and maintenance to ensure your website stays up to date and secure.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default WhoAreWe;
