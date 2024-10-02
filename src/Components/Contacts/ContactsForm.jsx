import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactsForm = () => {
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
        <div className='w-full bg-gray-100'>
            <div className='w-[90%] mx-auto py-10'>
                <div className='w-full md:h-[75vh] flex flex-col md:flex-row items-center justify-center gap-10'>
                    <div className='md:w-1/2'>
                        <h1 className='text-3xl md:text-5xl font-light'>Contact Us</h1>
                        <p className='font-poppins text-blue text-2xl md:text-4xl text-blue-900 italic'>We Want To Help You.</p>
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

                {/* Address and Operation Times Section */}
                <div className='w-full h-full mt-10 flex flex-col md:flex-row justify-between gap-7'>
                    <div className='md:w-1/2 h-[40vh] md:h-[50vh] py-10 md:py-1'>
                        <iframe
                            title="location-map"
                            className="w-full h-full rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581440.3240952096!2d27.6093915!3d-26.2041028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b5ef5f6e659%3A0xa7474f8f99e93a6a!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1657568213457!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className='md:w-1/2 flex flex-col gap-3'>
                        <h1 className='text-2xl md:text-4xl font-semibold'>Contact Details</h1>
                        <p className='text-lg'>Email: Lerumo.it@gmail.com</p>
                        <p className='text-lg'>No: (+27) 61-548-6843</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsForm;
