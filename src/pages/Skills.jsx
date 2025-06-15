import React, { useState } from 'react';
import skillsByCategory from '../data/skills';


const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(Object.keys(skillsByCategory)[0]);

    // Get all skills for mobile view
    const allSkills = Object.values(skillsByCategory).flat();

    return (
        <div className="py-20 px-4 min-h-screen text-gray-100">
            <h2 className="text-4xl md:text-5xl text-center mb-16 font-extrabold tracking-tight">
                My <span className="text-gray-400">Skills</span>
            </h2>

            {/* Category Tabs - Hidden on Mobile */}
            <div className="hidden md:flex justify-center mb-12 overflow-x-auto">
                <div className="inline-flex rounded-lg bg-gray-900/50 backdrop-blur-sm">
                    {Object.keys(skillsByCategory).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-4 text-sm font-medium rounded-lg transition-all duration-300 ${activeCategory === category
                                ? 'bg-gray-700/60 text-white shadow-lg'
                                : 'text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Skills Grid */}
            <div className="max-w-6xl mx-auto">
                {/* Mobile View - All Skills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:hidden">
                    {allSkills.map((skill) => (
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
                                    className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 object-contain"
                                />
                            )}
                            <p className="text-sm sm:text-base font-medium text-center text-gray-200">
                                {skill.name}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Desktop View - Categorized Skills */}
                <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-8">
                    {skillsByCategory[activeCategory].map((skill) => (
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
                                    className="w-20 h-20 mb-4 object-contain filter drop-shadow-md"
                                />
                            )}
                            <p className="text-base font-medium text-center text-gray-200">
                                {skill.name}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
