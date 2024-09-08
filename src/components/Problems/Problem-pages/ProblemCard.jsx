import React from 'react';

const ProblemCard = ({ id, title, description, difficulty }) => {
  return (
    <div className='bg-gray-800 rounded-lg p-6 flex flex-col justify-between h-full w-full max-w-[300px]'>
      <h3 className='text-lg font-bold text-white truncate'>{title}</h3>
      <p className='text-gray-400 flex-1 overflow-hidden text-ellipsis mt-2 text-sm'>{description}</p>
      <span className='text-xs text-[#BA99F3] mt-4'>{difficulty}</span>
    </div>
  );
};

export default ProblemCard;

