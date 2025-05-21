import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'motion/react';
import personalData from '../data/personal.json';

const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5,
        },
    },
};

const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 120,
        },
    },
    hover: {
        scale: 1.2,
        color: "#60a5fa",
        transition: { duration: 0.2 },
    },
};

const iconMap = {
    FaLinkedin,
    FaXTwitter,
    FaGithub,
    FaEnvelope,
    FaGlobe
};

const Socials = () => {
    return (
        <motion.div
            variants={socialContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center space-x-4"
        >
            <div className="flex gap-6">
                {personalData.socials.map((social, index) => {
                    const IconComponent = iconMap[social.icon];
                    return (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Connect on ${social.name}`}
                            className="text-gray-400"
                            variants={socialIconVariants}
                            whileHover="hover"
                        >
                            {IconComponent ? <IconComponent size={28} /> : social.name}
                        </motion.a>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Socials;
