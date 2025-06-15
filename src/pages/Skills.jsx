import React from 'react';
import skills from '../data/skills';


const Skills = () => {
    return (
        <div className="py-20 px-4 min-h-screen text-gray-100">
            <h2 className="text-4xl md:text-5xl text-center mb-16 font-extrabold tracking-tight">
                My <span className="text-gray-400">Skills</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
                {skills.map((skill) => (
                    <a
                        key={skill.name}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900/30 hover:bg-gray-700/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700/70 transition-all duration-300 flex flex-col items-center justify-center aspect-square no-underline hover:scale-105 hover:shadow-gray-500/30"
                    >
                        {skill.image && (
                            <img
                                src={skill.image}
                                alt={`${skill.name} icon`}
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 sm:mb-4 object-contain filter drop-shadow-md"
                            />
                        )}
                        <p className="text-sm sm:text-base font-medium text-center text-gray-200">{skill.name}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Skills;
