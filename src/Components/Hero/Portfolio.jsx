import Button from '../Button'
import law from '../../assets/LawCorp.jpeg';
import soundtour from '../../assets/soundtour.png';


const Portfolio = () => {
    return (
        <div className='py-10 bg-gray-100'>
            <div className='w-[90%] mx-auto flex flex-col gap-7'>
                <div className='flex flex-col items-center text-center gap-3'>
                    <p className='font-light text-xl'>Our portfolio</p>
                    <h1 className='text-[40px] font-medium'>Our work from the past year</h1>
                    <p className='max-w-3xl text-gray-600 text-lg'>
                        Our portfolio demonstrates our expertise in solving complex design
                        challenges, creating seamless user flows, and delivering visually stunning
                        interfaces. Let us bring our design prowess to your project.
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='flex flex-col justify-around items-center drop-shadow-lg bg-[#ececec] rounded-lg py-10 p gap-4'>
                        <div className='py-5 flex flex-col gap-4'>
                            <div className='flex flex-col gap-2 '>
                                <h1 className='text-4xl font-semibold'>Law Corp Inc</h1>
                                <p className='text-md max-w-xl text-gray-600'>Law Corp is a mock law firm website that we created to showcase
                                    our ability to create fully functional and engaging corprate websites
                                </p>
                            </div>
                            <a href="https://law-corp-09.vercel.app/" className='text-left'>
                                <Button title="View" styles="text-blue bg-transparent border border-blue
                            rounded-lg py-3 px-10 hover:bg-blue hover:text-white " />
                            </a>
                            <div className='h-[335px]] w-[600px]'>
                                <img src={law} alt="" className='h-full w-full object-cover' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around items-center drop-shadow-lg bg-[#ececec] rounded-lg py-10 p gap-4'>
                        <div className='py-5 flex flex-col gap-4'>
                            <div className='flex flex-col gap-2 '>
                                <h1 className='text-4xl font-semibold'>Sound Tour</h1>
                                <p className='text-md max-w-xl text-gray-600'>
                                    We developed a streaming link directory website for a media agency who create
                                    digital marketing solutions for brands in various industries.
                                </p>
                            </div>
                            <a href="https://www.soundtour.co.za" className='text-left'>
                                <Button title="View" styles="text-blue bg-transparent border border-blue
                            rounded-lg py-3 px-10 hover:bg-blue hover:text-white " />
                            </a>
                            <div className='h-[335px] w-[600px]'>
                                <img src={soundtour} alt="" className='h-full w-full object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio