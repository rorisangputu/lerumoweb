import Button from '../Button'

const CallToAction = () => {
    return (
        <div className='bg-gray-100 py-16 lg:py-16 font-poppins'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col justify-center items-center text-center gap-5'>
                    <h1 className='text-5xl lg:text-[75px] max-w-2xl lg:leading-[5rem]'>That&apos;s all about us feel free to say Hi!</h1>
                    <p className='max-w-3xl text-xl lg:text-2xl text-gray-500'>
                        We are excited about the opportunity to learn more about business
                        and how we an help you achieve your goals in the digital world
                    </p>
                    <Button
                        title={"Get in touch"}
                        styles="text-blue text-xl hover:text-white border
                        border-blue rounded-xl py-3 md:py-4 px-3 hover:bg-[#3880c9]
                        hover:scale-105 duration-200"
                    />
                </div>
            </div>
        </div>
    )
}

export default CallToAction