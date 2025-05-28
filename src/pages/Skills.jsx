import React from 'react';
import { motion as m } from 'motion/react';
import skills from '../data/skills';


const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        },
    },
};

const skillItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
    hover: {
        scale: 1.05,
        boxShadow: "0px 8px 25px -3px rgba(0, 0, 0, 0.2), 0px 4px 10px -3px rgba(60, 130, 240, 0.3)",
        transition: { duration: 0.2, ease: "easeOut" }
    }
};

const Skills = () => {
    return (
        <m.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            className="py-20 px-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100"
        >
            <m.h2
                variants={titleVariants}
                className="text-4xl md:text-5xl text-center mb-16 font-extrabold tracking-tight"
            >
                My <span className="text-blue-400">Skills</span>
            </m.h2>

            <m.div
                variants={gridContainerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto"
            >
                {skills.map((skill, index) => (
                    <m.a
                        key={skill.name}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={skillItemVariants}
                        whileHover="hover"
                        className="bg-gray-800/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700/40 transition-all duration-300 flex flex-col items-center justify-center aspect-square no-underline" // Added no-underline
                    >
                        {skill.image && (
                            <m.img
                                src={skill.image}
                                alt={`${skill.name} icon`}
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 sm:mb-4 object-contain filter drop-shadow-md"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 + 0.5, duration: 0.3 }}
                            />
                        )}
                        <p className="text-sm sm:text-base font-medium text-center text-gray-200">{skill.name}</p>
                    </m.a>
                ))}
            </m.div>
        </m.div>
    );
};

export default Skills;
