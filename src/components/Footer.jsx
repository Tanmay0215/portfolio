import React from 'react';
import { motion } from 'motion/react';
import Socials from './Socials';
import personalData from '../data/personal.json';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/50 text-gray-400 py-3 text-center"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-4"><Socials /></div>
                <hr />
                <p className="mt-3 text-sm p-2">
                    &copy; {currentYear} {personalData.name}. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
