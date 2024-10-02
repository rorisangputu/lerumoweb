import PortfolioCarousel from '../Services/PortfolioCarousel';


const Portfolio = () => {
    return (
        <div className='py-10 bg-gray-100'>
            <div className='w-[90%] mx-auto '>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-5'>
                    <div className='flex flex-col items-center justify-center text-center gap-3'>
                        <div className='flex flex-col w-full gap-2'>
                            <h1 className='text-5xl md:text-7xl font-bold'>Portfolio.</h1>
                            <p className='text-xl text-gray-600'>View our work.</p>
                        </div>
                        <p className='max-w-3xl text-gray-600 text-md md:text-lg'>
                            Our portfolio demonstrates our expertise in solving complex design
                            challenges, creating seamless user flows, and delivering visually stunning
                            interfaces. Let us bring our design prowess to your project.
                        </p>
                    </div>
                    <div className=''>
                        <PortfolioCarousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio