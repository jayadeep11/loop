
import React from 'react';
import { FaGithub, FaDiscord, FaTwitter, FaGamepad } from 'react-icons/fa';
import logo from "../../assets/LoopLogo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white py-0 mt-52 w-full">
      <div className="max-w-auto mx-auto flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 px-6 md:px-12">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-6">
            {/* Replace with your logo */}
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-lg font-semibold">Loop</span>
          </div>
          <div className="flex space-x-6 text-2xl">
            <FaGithub />
            <FaGamepad />
            <FaDiscord />
            <FaTwitter />
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-sm font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Download</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Try Now</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Community</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">API Docs</a></li>
              <li><a href="#" className="hover:underline">Guides</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Release Notes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Contribute</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">GitHub</a></li>
              <li><a href="#" className="hover:underline">Open Issues</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        <p className="text-sm">Loop@2024 </p>
        <button className="mt-4 md:mt-0 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-300">
          Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
