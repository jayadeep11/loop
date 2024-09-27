// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#09031C] to-[#1F0425]">
      {/* Top Bar */}
      <div className="w-full fixed top-0 left-0 z-10 p-10 bg-transparent">
        <Navbar />
      </div>
      {/* Main content area */}
      <div className="flex-grow mt-16 p-4">
        {/* Outlet will render the current route's component */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

