import React, { useState } from 'react';
import Logo from '../assets/LogoLerumo.png';
import Button from './Button';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io'; // For close icon

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="bg-gray-100">
            <div className="w-[90%] mx-auto py-1 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="w-24" />
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-3">
                        {navlinks.map((links) => (
                            <li key={links.id}>
                                <a
                                    href={links.link}
                                    className="font-semibold text-lg inline-block py-2 px-3 
                                    hover:text-[#414141] relative group hover:scale-105 duration-200"
                                >
                                    {links.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get In Touch Button */}
                <Button
                    title="Get in touch"
                    styles="hidden lg:block bg-blue 
                    text-white rounded-lg p-3 hover:bg-[#3880c9] hover:scale-105 duration-200"
                    link="/contacts"
                />

                {/* Hamburger Menu Icon (Mobile) */}
                <HiOutlineMenuAlt3
                    className="w-8 h-8 lg:hidden text-black cursor-pointer"
                    onClick={handleSidebarToggle}
                />

                {/* Sidebar Nav (Mobile) */}
                <div
                    className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                >
                    {/* Close Icon */}
                    <div className="flex justify-between items-center p-5">
                        <img src={Logo} alt="Logo" className="w-20" />
                        <IoMdClose
                            className="w-8 h-8 text-black cursor-pointer"
                            onClick={handleSidebarToggle}
                        />
                    </div>

                    {/* Sidebar Links */}
                    <ul className="mt-10 flex flex-col gap-5 px-5">
                        {navlinks.map((links) => (
                            <li key={links.id}>
                                <a
                                    href={links.link}
                                    className="font-semibold text-lg block py-2 
                                    hover:text-blue-500 duration-200"
                                    onClick={handleSidebarToggle} // Close sidebar on link click
                                >
                                    {links.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Get in touch button in Sidebar */}
                    <div className="mt-auto px-5">
                        <Button
                            title="Get in touch"
                            styles="w-full bg-blue text-white rounded-lg p-3 
                            hover:bg-[#3880c9] hover:scale-105 duration-200"
                            link="/contacts"
                        />
                    </div>
                </div>

                {/* Background overlay when sidebar is open */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={handleSidebarToggle} // Close sidebar if clicking outside
                    />
                )}
            </div>
        </nav>
    );
};

const navlinks = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Services',
        link: '/services',
    },
];

export default Navbar;
