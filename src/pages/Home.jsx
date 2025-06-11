import React from 'react';
import personalData from '../data/personal.json';
import Socials from '../components/Socials';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 pt-20 md:pt-4 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100">
          Hi, I am <br />{' '}
          <span className="text-gray-400">{personalData.name}</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          {personalData.bio}
        </p>
      </div>
      <div className="mt-10">
        <Socials />
      </div>
    </div>
  );
};

export default Home;
