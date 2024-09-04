import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex items-center  my-auto bg-gradient-to-b from-violet-500 via-violet-600 to-violet-700">
      <div className="flex items-center fixed w-50 h-screen p-2">
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

