import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
    hover: {
        scale: 1.03,
        boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3 },
    },
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden flex flex-col"
            variants={cardVariants}
            custom={index} // For potential stagger in parent
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-700">
                    <div className="flex gap-4">
                        {project.projectUrl && project.projectUrl !== "#" && (
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                                aria-label={`View live project: ${project.title}`}
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                                aria-label={`View source code on GitHub for: ${project.title}`}
                            >
                                <FaGithub /> GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
