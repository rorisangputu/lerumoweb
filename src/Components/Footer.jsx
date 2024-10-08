import { Link } from 'react-router-dom';
import Logo from '../assets/LogoLerumo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-100 py-7'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <div className='h-32 w-32'>
                            <img src={Logo} alt="" className='w-full h-full' />
                        </div>
                        <div className='flex gap-7'>
                            <Link to="/" className='text-lg hover:text-gray-400'>Home</Link>
                            <Link to="/about" className='text-lg hover:text-gray-400'>About</Link>
                            <Link to="/services" className='text-lg hover:text-gray-400'>Services</Link>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                        <p className='text-lg font-medium text-gray-600'>&copy; 2024 Lerumo Tech. All rights reserved.</p>
                        <div className='flex gap-7'>
                            <a href=""><FaFacebook className='h-7 w-7' /></a>
                            <a href=""><FaInstagram className='h-7 w-7' /></a>
                            <a href=""><FaTwitter className='h-7 w-7' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer