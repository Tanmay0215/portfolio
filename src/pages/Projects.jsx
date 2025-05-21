import React from 'react';
import { motion } from 'motion/react';
import ProjectCard from '../components/ProjectCard'; // Import the ProjectCard component
import projectsData from '../data/projects.json'; // Import project data

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger animation for each card
    },
  },
};

const Projects = () => {
  return (
    <motion.div
      className="py-12 px-4 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold">My Projects</h2>
      {projectsData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">No projects to display at the moment. Check back soon!</p>
      )}
    </motion.div>
  );
};

export default Projects;
