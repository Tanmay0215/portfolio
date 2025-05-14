import React from 'react'

const Projects = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl md:text-4xl text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Project Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl mb-2 text-blue-400">Project Title 1</h3>
          <p className="text-gray-300 mb-4">A brief description of the project. What it does, technologies used, etc.</p>
          <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">View Project &rarr;</a>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl mb-2 text-blue-400">Project Title 2</h3>
          <p className="text-gray-300 mb-4">Another cool project I worked on. Focused on X, Y, and Z.</p>
          <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">View Project &rarr;</a>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
};

export default Projects;
