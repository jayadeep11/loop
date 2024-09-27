import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ icon, name, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex items-center cursor-pointer p-2 hover:bg-violet-500 rounded-md" onClick={handleClick}>
      <span className="text-2xl">{icon}</span>
      <span className="ml-2">{name}</span>
    </div>
  );
};

export default NavItem;
