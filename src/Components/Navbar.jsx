import Logo from '../assets/LogoLerumo.png'
import Button from './Button'
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
    return (
        <nav className="bg-[#efefef]">
            <div className="w-[90%] mx-auto py-1 flex justify-between items-center">
                <div className='flex items-center'>
                    <img src={Logo} alt="" className='w-24' />
                </div>
                {/* Nav Links */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-3'>
                        {navlinks.map((links) => (
                            <li key={links.id}>
                                <a href={links.link} className='font-semibold text-lg inline-block py-2 px-3 
                                hover:text-[#414141] relative group hover:scale-105 duration-200 '>
                                    {links.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Get In Touch Button */}
                <Button title="Get in touch"
                    styles="hidden lg:block bg-blue 
                    text-white rounded-lg p-3 hover:bg-[#3880c9] hover:scale-105 duration-200"
                />
                <HiOutlineMenuAlt3 className='w-8 h-8 lg:hidden text-black' />
                {/* Sidebar Nav */}

            </div>
        </nav>
    )
}

const navlinks = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },
    {
        id: 2,
        title: "About",
        link: "#"
    },
    {
        id: 3,
        title: "Services",
        link: "#"
    },
]

export default Navbar