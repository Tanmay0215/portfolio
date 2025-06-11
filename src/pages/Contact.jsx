import React from 'react';
import personalData from '../data/personal.json';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="mx-auto p-5 min-h-screen py-10 md:py-20 bg-gradient-to-br from-black/30 via-gray-900 to-gray-800">
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-10 text-gray-100 text-shadow-2xl">
                Contact <span className="text-gray-400">Me</span>
            </h1>

            <div className="max-w-3xl mx-auto mb-10 p-6 bg-gray-800/50 rounded-lg shadow-xl text-center">
                <p className="text-gray-300 mb-2">
                    Feel free to reach out! You can email me directly at:
                </p>
                <a
                    href={`mailto:${personalData.email}`}
                    className="text-gray-400 hover:text-gray-200 text-lg font-medium transition-colors duration-300"
                >
                    <FaEnvelope className="inline-block mr-2" />
                    {personalData.email}
                </a>
            </div>

            <form className="max-w-3xl mx-auto space-y-5">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full p-2.5 bg-gray-700/20 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 placeholder-gray-400"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-2.5 bg-gray-700/20 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 placeholder-gray-400"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="w-full p-2.5 bg-gray-700/20 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 placeholder-gray-400"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-5 rounded-md cursor-pointer border-none transition-colors duration-300 text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
