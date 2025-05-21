import React from 'react';
import personalData from '../data/personal.json';
import Socials from '../components/Socials';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center max-w-3xl mx-auto space-y-8 text-left md:text-center p-4"
    >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          Hi, I am <br />{' '}
          <span className="text-blue-400">{personalData.name}</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-md md:text-xl text-gray-300"
        >
          {personalData.bio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Socials />
        </motion.div>
    </motion.div>
  );
};

export default Home;
