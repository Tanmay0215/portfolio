import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
    };

    const listItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.1, color: '#60a5fa' }
    };

    return (
        <nav className="w-lg mx-auto bg-gray-800/40 backdrop-blur-md text-white p-3 z-10 sticky md:top-10 md:rounded-full">
            <div className="w-full px-5">
                <motion.ul
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    className="hidden md:flex items-center justify-around space-x-6"
                >
                    {navLinks.map((link) => (
                        <motion.li key={link.title} variants={listItemVariants} whileHover="hover">
                            <a href={link.path} className="hover:text-blue-300 transition-colors duration-300 text-sm font-medium">
                                {link.title}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-1 rounded-md"
                    >
                        {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden mt-3 origin-top bg-gray-700/95 backdrop-blur-md rounded-xl shadow-xl"
                    >
                        <ul className="flex flex-col items-center space-y-1 py-3 px-2">
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.title}
                                    className="w-full"
                                    variants={listItemVariants}
                                    whileHover="hover"
                                >
                                    <a
                                        href={link.path}
                                        className="block text-center w-full py-3 px-4 rounded-lg hover:bg-gray-600/70 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.title}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
