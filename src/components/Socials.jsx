import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'motion/react';

const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Stagger the animation of children icons
            delayChildren: 0.5, // Delay before starting children animation
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
        color: "#60a5fa", // Tailwind blue-400 for hover
        transition: { duration: 0.2 },
    },
};

const Socials = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/tanmay-gupta-0215/',
            icon: <FaLinkedin size={28} />,
        },
        {
            name: 'Twitter',
            url: 'https://x.com',
            icon: <FaTwitter size={28} />,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/yourusername', // Remember to replace with actual GitHub profile
            icon: <FaGithub size={28} />,
        },
        {
            name: 'Email',
            url: 'mailto:tanmaygupta.0215@gmail.com',
            icon: <FaEnvelope size={28} />,
        },
    ];

    return (
        <motion.div
            variants={socialContainerVariants}
            initial="hidden"
            animate="visible"
            className="py-8 text-center"
        >
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl mb-6"
            >
                Connect with Me
            </motion.h3>
            <div className="flex justify-center items-center gap-6">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Connect on ${social.name}`}
                        className="text-gray-400" // Base color, hover color handled by framer-motion
                        variants={socialIconVariants}
                        // initial and animate for icons are handled by parent's staggerChildren
                        whileHover="hover"
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default Socials;
