import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/get-started");
  };

  return (
    <section className="bg-gradient-to-b from-[#09031B] to-[#1F0431] text-white min-h-screen flex flex-col items-center justify-center">
      {/* Centered Heading */}
      <div className="text-center ">
        <h1 className="arch text-6xl md:text-8xl font-bold mb-4">Welcome to Loop</h1>
        <p className="text-lg md:text-2xl mt-2 text-[#C1C1E0]">
          Master technologies like Docker, Arch Linux, Neovim, DSA, and more!
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex space-x-8">
        <button
          onClick={handleClick}
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
        >
          Get Started
        </button>
        <button className="bg-transparent border border-violet-600 hover:bg-violet-700 hover:text-white text-violet-600 font-bold py-3 px-8 rounded-full transition-all duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;

