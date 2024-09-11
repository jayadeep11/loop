import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Importing arrow icon from react-icons

const HeroSection = () => {
  return (
    <section className="min-h-screen mt-12 flex flex-col items-center  justify-center text-center  px-6">
      <div className="max-w-2xl">
        <h1 className="text-7xl md:text-9xl font-black text-white mb-4 leading-tight arch">
          Neovim
        </h1>
        <p className="text-lg md:text-xl text-violet-200 mb-10 font-medium">
          The Hyperextensible, Power-packed Text Editor <br /> Tailored for Elite Developers.
        </p>
        <a
          href="https://neovim.io"
          className="inline-block bg-violet-600 hover:bg-violet-500 text-white py-3 px-8 rounded-lg text-base md:text-lg font-semibold uppercase tracking-wide transition duration-300 ease-in-out shadow-lg"
        >
         neovim.io 
        </a>
      </div>
      <div className="mt-24">
        <FaArrowDown className="text-white text-4xl animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;

