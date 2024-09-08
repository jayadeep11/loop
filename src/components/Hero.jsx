import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeNotification } from "./Notification";
import { FaChrome } from "react-icons/fa"; // Import Google Chrome icon

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
    <section className="relative bg-transparent text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">

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
    </section>
  );
};

export default Hero;

