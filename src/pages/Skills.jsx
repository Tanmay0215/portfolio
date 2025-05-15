import React from 'react';
import { motion } from 'motion/react';

const skillCategories = [
    {
        name: 'Frontend',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vite'],
    },
    {
        name: 'Backend',
        skills: ['Node.js', 'Express.js', 'Python', 'Django'],
    },
    {
        name: 'Databases',
        skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
        name: 'Tools & Others',
        skills: ['Git', 'GitHub', 'VS Code', 'ESLint', 'Figma'],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 10,
        },
    },
    hover: {
        scale: 1.1,
        color: '#60a5fa', // Tailwind blue-400
        transition: { duration: 0.2 },
    },
};

const Skills = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="py-12 px-4 min-h-screen"
        >
            <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {skillCategories.map((category) => (
                    <motion.div
                        key={category.name}
                        variants={categoryVariants}
                        className="bg-gray-800 p-6 rounded-lg shadow-xl"
                    >
                        <h3 className="text-2xl text-blue-400 mb-6 font-semibold">{category.name}</h3>
                        <motion.ul
                            variants={containerVariants} // Re-use for staggering skill items
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-3"
                        >
                            {category.skills.map((skill) => (
                                <motion.li
                                    key={skill}
                                    variants={skillItemVariants}
                                    whileHover="hover"
                                    className="bg-gray-700 px-4 py-2 rounded-md text-gray-200 text-sm cursor-default"
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
