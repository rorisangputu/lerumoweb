import React from 'react'

const Connect = () => {
    return (
        <div className='bg-gray-50 py-10'>
            <div className='w-[90%] mx-auto flex items-center justify-center'>
                {/* Contact Form Section */}
                <div className='w-full md:h-[75vh] flex flex-col md:flex-row items-center justify-center gap-10'>
                    <div className='md:w-1/2 flex flex-col gap-2 items-center justify-center '>
                        <h1 className='text-3xl md:text-5xl font-light'>Contact Us</h1>
                        <p className='font-poppins text-center font-semibold text-2xl md:text-4xl text-blue'>We Want To Help You.</p>
                    </div>
                    <form className='flex flex-col w-full md:w-1/2 border p-4 gap-4 drop-shadow-md'>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <input type='text' placeholder='Name' className='w-full md:w-[48%] p-3 border rounded' />
                            <input type='email' placeholder='Email' className='w-full md:w-[48%] p-3 border rounded' />
                        </div>
                        <textarea placeholder='Message' className='w-full p-3 border rounded' rows={6}></textarea>
                        <button type='submit' className='bg-blue text-white p-4 rounded font-medium hover:bg-gray-800'>
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Connect