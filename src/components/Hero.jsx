import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeNotification } from "./Notification";
import { Link } from "react-router-dom";
import { FaChrome } from "react-icons/fa"; // Import Google Chrome icon
import Neovim from "../components/Neovim/Neovim"
import problempage from "../components/Problems/Problem-pages/ProblemList";
import drawboardpage from "../components/Draw/DrawBoard";

import problems from "../assets/problems.png"
import neovim from "../assets/Neovim.png"
import secondux from "../assets/second.jpg"
import drawboard from "../assets/whiteboard.png"

const Hero = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    navigate("/get-started");
  };

  const handleNotificationClose = () => {
    setNotificationVisible(false);
  };

  return (
    <section className="relative bg-transparent text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 mt-16">

      {/* Notification */}
      {notificationVisible && (
        <ThemeNotification
          message={
            <span>
              For a better experience, switch to the violet theme in Google Chrome{" "}
              <FaChrome className="inline-block text-xl ml-2" />
            </span>
          }
          onClose={handleNotificationClose}
        />
      )}

      {/* Centered Heading */}
      <div className="text-center">
        <h1 className="arch text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
          Welcome to Loop
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
          Master technologies like Docker, Arch Linux, Neovim, DSA, and more!
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
        <button
          onClick={handleClick}
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 text-base sm:text-lg"
        >
          Get Started
        </button>
        <button className="bg-transparent border border-violet-600 hover:bg-violet-700 hover:text-white text-violet-600 font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 text-base sm:text-lg">
          Learn More
        </button>
      </div>



      <div className="flex flex-col w-[90%] lg:gap-32 gap-16 mt-16">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 justify-center">
          <div className="w-full lg:w-1/2 bg-[#b492eb]  rounded-[3rem] lg:h-[28rem] h-[24rem] p-8 text-white flex flex-col items-end relative overflow-hidden">
            <Link to='/neovim' className="text-[3.4rem] font-extrabold text-black cursor-pointer">Neovim</Link>
            <img
              src={neovim}
              alt="neovim image"
              className="md:w-[90%] w-full absolute top-36 left-10 lg:left-12 lg:top-32 lg:w-auto lg:h-[90%] h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:translate-y-6"
            />
          </div>

          <div className="w-full lg:w-3/4 bg-[#94d6ca] rounded-[3rem] lg:h-[28rem] h-[24rem] p-8 text-white flex flex-col items-end relative overflow-hidden">
            <Link to='/problems' className="text-[3.4rem] font-extrabold text-black cursor-pointer">Problems</Link>
            <img
              src={problems}
              alt="problems image"
              className="md:w-[90%] w-full absolute top-36 left-10 lg:left-16 lg:top-32 lg:w-auto lg:h-[90%] h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:translate-y-6"
            />
          </div>
        </div>


        {/* second Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-center">

          <div className="w-full lg:w-3/4 bg-[#7092e2] rounded-[3rem] lg:h-[28rem] h-[24rem] p-8 text-white flex flex-col items-end relative overflow-hidden">
            <Link to='/draw' className="text-[3.4rem] font-extrabold text-black">Draw Board</Link>
            <img
              src={drawboard}
              alt="mountain image"
              className="md:w-[90%] w-full absolute top-36 left-10 lg:left-16 lg:top-32 lg:w-auto lg:h-[90%] h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:translate-y-6"
            />
          </div>

          <div className="w-full lg:w-1/2 bg-[#e0dcb0]  rounded-[3rem] lg:h-[28rem] h-[24rem] p-8 text-white flex flex-col items-end relative overflow-hidden">
            <h2 className="text-[3.4rem] font-extrabold text-black">HELP SCOUT</h2>
            <img
              src={secondux}
              alt="mountain image"
              className="md:w-[90%] w-full absolute top-36 left-10 lg:left-12 lg:top-32 lg:w-auto lg:h-[90%] h-full object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:translate-y-6"
            />
          </div>

        </div>

      </div>


    </section>
  );
};

export default Hero;

