
// Installation.jsx
import React from 'react';

const Installation = () => {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-b from-[#09031C] to-[#1F0425]">
      <h1 className="text-violet-400 text-5xl font-bold mb-8">Neovim Installation Guide</h1>
      <div className="bg-[#25183C] p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <p className="text-lg text-gray-300 mb-6">
          Neovim is available on various platforms. Follow the instructions below to install it on your system:
        </p>
        <ul className="space-y-4 text-lg text-gray-300">
          <li>
            <div className="bg-[#2D1A4A] p-4 rounded-md shadow-md">
              <b>Arch Linux:</b> <code className="text-violet-400">sudo pacman -S neovim</code>
            </div>
          </li>
          <li>
            <div className="bg-[#2D1A4A] p-4 rounded-md shadow-md">
              <b>Ubuntu/Debian:</b> <code className="text-violet-400">sudo apt install neovim</code>
            </div>
          </li>
          <li>
            <div className="bg-[#2D1A4A] p-4 rounded-md shadow-md">
              <b>macOS:</b> <code className="text-violet-400">brew install neovim</code>
            </div>
          </li>
          <li>
            <div className="bg-[#2D1A4A] p-4 rounded-md shadow-md">
              <b>Windows:</b> Download from the <a href="https://neovim.io" className="text-violet-400 hover:underline">Neovim website</a>.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Installation;
