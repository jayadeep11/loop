import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [menuOpen, setMenuOpen] = useState(false); // Manage menu state

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true); // For demo purposes, set to true immediately
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false); // For demo purposes, set to false immediately
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

  return (
    <section className="relative bg-gradient-to-b from-[#09031B] to-[#1F0431] text-white min-h-screen flex flex-col items-center justify-center">
      {/* Profile Menu or Login Button */}
      <div className="absolute top-16 right-16 flex items-center">
        {isLoggedIn ? (
          <div className="relative">
            <img
              src={`https://ui-avatars.com/api/?name=User&background=6B46C1&color=FFFFFF&size=128`}
              alt="profile"
              className="w-12 h-12 rounded-full cursor-pointer border-2 border-white shadow-lg"
              onClick={toggleMenu}
            />
            {menuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                >
                  Logout
                </button>
                <button
                  onClick={handleSettings}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                >
                  Settings
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Login
          </button>
        )}
      </div>

      {/* Centered Heading */}
      <div className="text-center">
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

