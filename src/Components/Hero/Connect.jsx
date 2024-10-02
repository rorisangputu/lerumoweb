import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Connect = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when form is submitted

        emailjs
            .sendForm('service_zsqv07o', 'template_xj31qer', form.current, {
                publicKey: '6Pbua8ueAgAzFgwdB',
            })
            .then(
                () => {
                    setLoading(false); // Stop loading
                    setIsSent(true); // Show success message
                },
                (error) => {
                    setLoading(false); // Stop loading on error
                    setErrorMessage('Failed to send the message. Please try again.'); // Show error message
                    console.error('FAILED...', error.text);
                }
            );
    };
    return (
        <div className='bg-gray-50 py-10'>
            <div className='w-[90%] mx-auto flex items-center justify-center'>
                {/* Contact Form Section */}
                <div className='w-full md:h-[75vh] flex flex-col md:flex-row items-center justify-center gap-10'>
                    <div className='md:w-1/2 flex flex-col gap-2 items-center justify-center '>
                        <h1 className='text-3xl md:text-5xl font-light'>Contact Us</h1>
                        <p className='font-poppins text-center font-semibold text-2xl md:text-4xl text-blue'>We Want To Help You.</p>
                    </div>
                    {/* Form or Success Message */}
                    {isSent ? (
                        <div className='text-center'>
                            <h2 className='text-2xl font-medium text-green-500'>Your message has been sent successfully!</h2>
                        </div>
                    ) : (
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2 border p-4 gap-4'>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <input type='text' name="fromName" placeholder='Name' className='w-full md:w-[48%] p-3 border rounded' required />
                                <input type='email' name="fromEmail" placeholder='Email' className='w-full md:w-[48%] p-3 border rounded' required />
                            </div>
                            <textarea name="message" placeholder='Message' className='w-full p-3 border rounded' rows={6} required></textarea>

                            <button type='submit' value="Send" className='bg-black text-white p-4 rounded font-medium hover:bg-gray-800' disabled={loading}>
                                {loading ? 'Sending...' : 'Submit'}
                            </button>
                            {errorMessage && <p className='text-red-500 mt-2'>{errorMessage}</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Connect