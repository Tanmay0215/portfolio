import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden flex flex-col hover:shadow-gray-700/30 hover:scale-105 transition-all duration-300">
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-300 mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-700">
                    <div className="flex gap-4">
                        {project.projectUrl && project.projectUrl !== "#" && (
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-200 transition-colors duration-300 flex items-center gap-2"
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
                                className="text-gray-400 hover:text-gray-200 transition-colors duration-300 flex items-center gap-2"
                                aria-label={`View source code on GitHub for: ${project.title}`}
                            >
                                <FaGithub /> GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
