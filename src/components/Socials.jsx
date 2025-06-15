import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import personalData from '../data/personal.json';

const iconMap = {
    FaLinkedin,
    FaXTwitter,
    FaGithub,
    FaEnvelope,
};

const Socials = () => {
    return (
        <div className="flex justify-center items-center space-x-4">
            <div className="flex gap-6">
                {personalData.socials.map((social, index) => {
                    const IconComponent = iconMap[social.icon];
                    return (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Connect on ${social.name}`}
                            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
                        >
                            {IconComponent ? <IconComponent size={28} /> : social.name}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Socials;
