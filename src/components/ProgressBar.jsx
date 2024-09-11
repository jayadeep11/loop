import React, { useState, useEffect } from 'react';

const VerticalProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  // Throttle scroll event handler using requestAnimationFrame for better performance
  useEffect(() => {
    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full w-1 bg-gray-200">
      {/* Smooth Progress Bar */}
      <div
        className="bg-violet-500"
        style={{
          height: `${scrollProgress}%`,
          width: '100%',
          transition: 'height 0.3s ease-out', // Smoother transition
        }}
      />
    </div>
  );
};

export default VerticalProgressBar;

