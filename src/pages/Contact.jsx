import React from 'react';
import personalData from '../data/personal.json';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Socials from '../components/Socials';

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 py-10">
            <div className="w-full max-w-3xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-100">
                    Get In <span className="text-gray-400">Touch</span>
                </h1>

                <div className="backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl shadow-2xl p-8 md:p-10">
                    {/* Contact Info Card */}
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12">
                        {/* Email Section */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-xl font-semibold text-gray-200 mb-4">Contact Details</h2>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${personalData.email}`}
                                    className="flex items-center justify-center md:justify-start text-gray-400 hover:text-gray-200 transition-colors duration-300 group"
                                >
                                    <FaEnvelope className="w-5 h-5 mr-3 group-hover:text-gray-200" />
                                    <span>{personalData.email}</span>
                                </a>
                                <div className="flex items-center justify-center md:justify-start text-gray-400">
                                    <FaMapMarkerAlt className="w-5 h-5 mr-3" />
                                    <span>{personalData.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-32 bg-gray-700/50"></div>

                        {/* Social Links */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-xl font-semibold text-gray-200 mb-4">Connect With Me</h2>
                            <div className="mt-2">
                                <Socials />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional Resume Link */}
                {personalData.resumeUrl && (
                    <a
                        href={personalData.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block backdrop-blur-sm bg-gray-800/40 hover:bg-gray-700/50 text-gray-200 px-6 py-3 rounded-lg border border-gray-700/50 transition-all duration-300 hover:scale-105"
                    >
                        View My Resume
                    </a>
                )}
            </div>
        </div>
    );
};

export default Contact;
