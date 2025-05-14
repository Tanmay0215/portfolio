const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <div>
        <h1 className="text-4xl md:text-6xl">
          Hi, I am <br />{' '}
          <span className="text-blue-400">Tanmay Gupta</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I am a passionate developer creating modern web experiences.
        </p>
      </div>
    </div>
  );
};

export default Home;
