import React from 'react';

const Hero = () => {
  return (
    <section className="bg-violet-600 text-white min-h-screen flex flex-col items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-4">
        
        {/* Left: Illustration */}
        <div className="md:w-1/2">
          <img 
            src="https://media.istockphoto.com/id/1689739403/photo/infinite-loop-metaverse-web3-digital-artificial-intelligence-technology.jpg?s=2048x2048&w=is&k=20&c=7VNtxYx9Vlo-pmMEDOCPPCezZkfgpC6AZj679eYOa9c=" 
            alt="Illustration" 
            className="w-full h-auto"
          />
        </div>

        {/* Right: Heading */}
        <div className="md:w-1/2 text-center md:text-right mt-6 md:mt-0">
          <h1 className="text-4xl md:text-9xl  font-bold leading-tight">
            Welcome to Loop
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Learn technologies like Docker, Arch Linux, Neovim, DSA, and more!
          </p>
        </div>
      </div>

      {/* Topics Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 px-4">
        {['Problems', 'Arch Linux', 'Neovim', 'DSA', 'Docker', 'Web Development'].map((topic) => (
          <div 
            key={topic} 
            className="bg-violet-700 p-10 rounded-xl text-center shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-violet-800"
          >
            <h2 className="text-3xl font-bold mb-4">{topic}</h2>
            <p className="text-lg">
              Explore {topic} and master new skills in this area!
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

