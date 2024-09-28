import expert from '../../assets/expert.png';
import comm from '../../assets/communication.png';
import cust from '../../assets/customerservice.png';
import veri from '../../assets/verified.png';

const WhyChooseUs = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <h1 className="text-[65px] font-semibold">Why Choose Us</h1>
                        <p className="text-2xl text-gray-600">
                            Our experience, skills, and dedication set us apart and make us the
                            ideal choice for your project
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16 drop-shadow-lg py-9">
                        <div className="flex flex-col gap-4 bg-gray-200 p-6 rounded-xl">
                            <div className='-mt-[60px] bg-gray-100 w-[70px] h-[70px] flex items-center justify-center
                            rounded-full'>
                                <img src={expert} alt="" />
                            </div>
                            <h1 className="font-light text-3xl">Expertise</h1>
                            <p className="text-gray-600 text-2xl max-w-3xl">
                                We have extensive experience in designing and developing website
                                clients across various industries
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 bg-gray-200 p-6 rounded-xl">
                            <div className='-mt-[60px] bg-gray-100 w-[70px] h-[70px] flex items-center justify-center
                            rounded-full'>
                                <img src={veri} alt="" />
                            </div>
                            <h1 className="font-light text-3xl">Attention to Detail</h1>
                            <p className="text-gray-600 text-2xl max-w-2xl">
                                We have extensive experience in designing and developing website
                                clients across various industries
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 bg-gray-200 p-6 rounded-xl">
                            <div className='-mt-[60px] bg-gray-100 w-[70px] h-[70px] flex items-center justify-center
                            rounded-full'>
                                <img src={comm} alt="" />
                            </div>
                            <h1 className="font-light text-3xl">Communication</h1>
                            <p className="text-gray-600 text-2xl max-w-2xl">
                                We have extensive experience in designing and developing website
                                clients across various industries
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 bg-gray-200 p-6 rounded-xl">
                            <div className='-mt-[60px] bg-gray-100 w-[70px] h-[70px] flex items-center justify-center
                            rounded-full'>
                                <img src={cust} alt="" />
                            </div>
                            <h1 className="font-light text-3xl">Customer Service</h1>
                            <p className="text-gray-600 text-2xl max-w-2xl">
                                We have extensive experience in designing and developing website
                                clients across various industries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs