import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '#projects' },
    { title: 'Skills', path: '#skills' },
    { title: 'Contact', path: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="md:w-2xl mx-auto bg-gray-800/40 backdrop-blur-md text-white p-3 z-10 sticky hidden md:flex md:top-10 md:rounded-full">
            <div className="w-full px-5">
                <ul className="hidden md:flex items-center justify-around space-x-6">
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <a
                                href={link.path}
                                className="hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 p-1 rounded-md"
                    >
                        {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-3 origin-top backdrop-blur-md rounded-xl shadow-xl">
                    <ul className="flex flex-col items-center space-y-1 py-3 px-2">
                        {navLinks.map((link) => (
                            <li key={link.title} className="w-full">
                                <a
                                    href={link.path}
                                    className="block text-center w-full py-3 px-4 rounded-lg hover:bg-gray-600/70 hover:text-gray-200 transition-colors duration-200 text-sm font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
