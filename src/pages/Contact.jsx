import React from 'react';
import personalData from '../data/personal.json';
import { motion } from 'motion/react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto p-5 min-h-screen pt-24 md:pt-28"
        >
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-center text-3xl md:text-4xl font-bold mb-10"
            >
                Contact Me
            </motion.h1>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-10 p-6 bg-gray-800 rounded-lg shadow-xl text-center"
            >
                <p className="text-gray-300 mb-2">
                    Feel free to reach out! You can email me directly at:
                </p>
                <a
                    href={`mailto:${personalData.email}`}
                    className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors duration-300"
                >
                    <FaEnvelope className="inline-block mr-2" />
                    {personalData.email}
                </a>
            </motion.div>

            <motion.form
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="space-y-5"
            >
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Name:</label>
                    <input type="text" id="name" name="name" required className="w-full p-2.5 bg-gray-700/20 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" placeholder="Your Name" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email:</label>
                    <input type="email" id="email" name="email" required className="w-full p-2.5 bg-gray-700/20 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" placeholder="Your Email" />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message:</label>
                    <textarea id="message" name="message" rows="5" required className="w-full p-2.5 bg-gray-700/20 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-md cursor-pointer border-none transition-colors duration-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Send Message
                </button>
            </motion.form>
        </motion.div>
    );
};

export default Contact;
