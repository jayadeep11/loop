import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MessageCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    {
      title: 'Explore Our Extensive DSA Question Bank!',
      url: '/dsa-questions',
    },
    {
      title: 'Discover In-Depth Roadmaps for Your Learning Journey!',
      url: '/roadmaps',
    },
    {
      title: 'Stay Updated with the Latest Arch Linux Articles!',
      url: '/arch-linux',
    },
    {
      title: 'Master Neovim with Our Expert Guides and Tutorials!',
      url: '/neovim',
    },
    {
      title: 'Enjoy New Features: Interactive Drawing Board & Chat Rooms!',
      url: '/new-features',
    },
   ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [messages.length]);

  return (
    <div className="relative w-full h-28  max-w-md md:mx-auto md:h-48 bg-gray-900 rounded-lg overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out absolute top-0 left-0 w-full h-full md:relative"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {messages.map((message, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full flex items-center justify-center ">
            <div className="w-full h-full p-6 rounded-lg shadow-lg text-white flex items-center justify-center flex-col">
              <p className="md:text-xl text-[10px] font-semibold">{message.title}</p>
              <Link to={message.url} className="text-violet-400 hover:text-violet-500 mt-2 text-[10px] md:text-sm">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {messages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${index === currentIndex ? 'bg-yellow-600' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageCard;

