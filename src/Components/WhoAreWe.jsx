import mobi from '../assets/mobile-first.png';
import mobidesign from '../assets/mobile.png';
import main from '../assets/maintenance.png';
import code from '../assets/code.png';

const WhoAreWe = () => {
    return (
        <div className="py-10">
            <div className="w-[90%] mx-auto">
                <section className="text-center my-20 flex flex-col gap-7">
                    <div className='flex items-center justify-center'>
                        <img src={code} alt="" />
                    </div>
                    <h2 className="text-4xl font-semibold font-sans mb-6">Who we are</h2>
                    <p className="text-lg max-w-3xl mx-auto text-gray-600">
                        We specialize in small business web development for clients anywhere. Every line of code is written by hand to ensure the best performance, helping bring in more customers to your site and bring more revenue to your business.
                    </p>


                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-100 p-6 flex flex-col items-center rounded-lg text-center">
                            <div className="mb-4 h-[50px] w-[50px] ">

                                <img src={mobidesign} alt="Mobile-First Design" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Mobile-First Design</h3>
                            <p className="text-gray-600">
                                We start building your site for mobile devices first, then we add on to it to make it tablet and desktop ready.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 flex flex-col items-center rounded-lg text-center">
                            <div className="mb-4 h-[50px] w-[50px] ">
                                <img src={mobi} alt="Fully Responsive" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Fully Responsive</h3>
                            <p className="text-gray-600">
                                Your website will fit all mobile screens, tablets, and desktop sizes so new clients can access your site from anywhere.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 flex flex-col items-center rounded-lg text-center">
                            <div className="mb-4 h-[50px] w-[50px] ">
                                <img src={main} alt="Fully Responsive" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Maintenance</h3>
                            <p className="text-gray-600">
                                We conduct maintenance and updates to websites in the event that you may need to add new information.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default WhoAreWe