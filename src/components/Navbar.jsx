import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle

const navLinks = [
    { title: 'Home', path: '/' }, // Assuming you might add routing later, adjust paths as needed
    { title: 'Projects', path: '#projects' }, // Or use actual routes if you implement react-router
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
        <nav className="bg-gray-800/40 backdrop-blur-md text-white p-3 sticky top-10 mx-auto max-w-5xl z-50 shadow-lg rounded-full">
            <div className="px-4">
                {/* Desktop Menu */}
                <motion.ul
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    className="hidden md:flex space-x-5" // Reduced space between items
                >
                    {navLinks.map((link) => (
                        <motion.li key={link.title} variants={listItemVariants} whileHover="hover">
                            <a href={link.path} className="hover:text-blue-300 transition-colors duration-300 text-sm"> {/* Reduced font size for links */}
                                {link.title}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Animated with AnimatePresence */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden mt-2 bg-gray-700/90 backdrop-blur-sm rounded-lg shadow-lg" // Reduced margin-top, adjusted rounding
                    >
                        <ul className="flex flex-col items-center space-y-3 py-3"> {/* Reduced padding and space-y */}
                            {navLinks.map((link) => (
                                <motion.li key={link.title} variants={listItemVariants} whileHover="hover">
                                    <a
                                        href={link.path}
                                        className="hover:text-blue-300 transition-colors duration-300 block py-2 text-sm" // Reduced font size for links
                                        onClick={() => setIsOpen(false)} // Close menu on click
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
