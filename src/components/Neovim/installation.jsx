// Installation.jsx
import React from 'react';

const Installation = () => {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-b from-[#09031C] to-[#1F0425]">
      <h1 className="text-violet-400 text-6xl font-extrabold mb-10 shadow-md">Neovim Installation Guide</h1>
      <div className="bg-[#25183C] p-8 rounded-lg shadow-2xl max-w-3xl w-full transition-transform transform hover:scale-105">
        <p className="text-lg text-gray-300 mb-8">
          Neovim is available on various platforms. Follow the instructions below to install it on your system:
        </p>
        <ul className="space-y-6 text-lg text-gray-300">
          <li>
            <div className="bg-[#2D1A4A] p-5 rounded-md shadow-md border border-[#3E2A59] hover:border-violet-400 transition-colors">
              <b>Arch Linux:</b> <code className="text-violet-400">sudo pacman -S neovim</code>
            </div>
          </li>
          <li>
            <div className="bg-[#2D1A4A] p-5 rounded-md shadow-md border border-[#3E2A59] hover:border-violet-400 transition-colors">
              <b>Ubuntu/Debian:</b> <code className="text-violet-400">sudo apt install neovim</code>
            </div>
          </li>
          <li>
            <div className="bg-[#2D1A4A] p-5 rounded-md shadow-md border border-[#3E2A59] hover:border-violet-400 transition-colors">
              <b>macOS:</b> <code className="text-violet-400">brew install neovim</code>
            </div>
          </li>
          <li>
            <div className="bg-[#2D1A4A] p-5 rounded-md shadow-md border border-[#3E2A59] hover:border-violet-400 transition-colors">
              <b>Windows:</b> Download from the{' '}
              <a href="https://neovim.io" className="text-violet-400 hover:underline">Neovim website</a>.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Installation;

