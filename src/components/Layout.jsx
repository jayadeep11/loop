// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen  justify-center items-center mx-auto bg-timber-green-900  relative">
        <Outlet />
    </div>
  );
};

export default Layout;
