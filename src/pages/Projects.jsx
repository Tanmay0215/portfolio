import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <div className="py-20 px-4 min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-16 font-extrabold tracking-tight text-gray-100">
        My <span className="text-gray-400">Projects</span>
      </h2>
      {projectsData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">No projects to display at the moment. Check back soon!</p>
      )}
    </div>
  );
};

export default Projects;
