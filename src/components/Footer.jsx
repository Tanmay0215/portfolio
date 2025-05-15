import React from 'react';
import { motion } from 'motion/react';
import Socials from './Socials'; // Assuming you have a Socials component for social links

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }} // Delay to animate after content loads
            className="bg-gray-800 text-gray-400 py-8 text-center mt-auto"
        >
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-sm">
                    &copy; {currentYear} Tanmay Gupta. All rights reserved.
                </p>
                <div className="mt-4"><Socials /></div>
            </div>
        </motion.footer>
    );
};

export default Footer;
