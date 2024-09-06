import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen items-center  my-auto bg-gradient-to-b from-[#09031C] to-[#1F0425]">
      <div className="flex items-center fixed w-50 h-screen p-2 z-10">
        <Sidebar />
      </div>
      <div className="flex-grow w-full h-screen ">
        {/* Outlet will render the current route's component */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

