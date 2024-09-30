import Button from '../Button'

const CallToAction = () => {
    return (
        <div className='bg-gray-100 py-10 font-poppins'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col justify-center items-center text-center gap-5'>
                    <h1 className='text-[75px] max-w-2xl leading-[5rem]'>That&apos;s all about us feel free to say Hi!</h1>
                    <p className='max-w-3xl text-2xl text-gray-500'>
                        We are excited about the opportunity to learn more about business
                        and how we an help you achieve your goals in the digital world
                    </p>
                    <Button
                        title={"Get in touch"}
                        styles="text-blue text-xl hover:text-white border
                        border-blue rounded-xl py-4 px-3 hover:bg-[#3880c9]
                        hover:scale-105 duration-200"
                    />
                </div>
            </div>
        </div>
    )
}

export default CallToAction