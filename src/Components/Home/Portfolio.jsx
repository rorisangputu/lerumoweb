


const Portfolio = () => {
    return (
        <div className='py-10 bg-gray-100'>
            <div className='w-[90%] mx-auto '>
                <div className='flex flex-col lg:flex-row md:gap-5'>
                    <div className='flex flex-col items-center justify-center 
                            text-center gap-3 w-full lg:w-2/5 mb-10 lg:mb-0'>
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
                    <div className="w-full lg:w-3/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div
                                className='relative group w-full h-72 bg-cover bg-center 
                            overflow-hidden flex justify-center items-end'
                                style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1720012345702-967d04d787e1?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
                            >

                                <h2 className='text-white text-sm font-light mb-5'>
                                    Simple. Puff. <span className="italic font-serif">Enjoy</span>.
                                </h2>

                            </div>
                            <div
                                className='relative group w-full h-72 bg-cover bg-center 
                            overflow-hidden flex flex-col justify-end items-center'
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1675961409080-f74965e286ad?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
                            >
                                <h2 className="text-white text-sm font-light">HYLA</h2>
                                <h2 className='text-white text-sm font-light font-serif italic mb-4'>
                                    Taste Summer.
                                </h2>
                            </div>
                            <div
                                className='relative group w-full h-72 bg-cover bg-center 
                            overflow-hidden flex justify-center items-end'
                                style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1720012345702-967d04d787e1?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
                            >

                                <h2 className='text-white text-sm font-light mb-5'>
                                    Simple. Puff. <span className="italic font-serif">Enjoy</span>.
                                </h2>

                            </div>
                            <div
                                className='relative group w-full h-72 bg-cover bg-center 
                            overflow-hidden flex flex-col justify-end items-center'
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1675961409080-f74965e286ad?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
                            >
                                <h2 className="text-white text-sm font-light">HYLA</h2>
                                <h2 className='text-white text-sm font-light font-serif italic mb-4'>
                                    Taste Summer.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio