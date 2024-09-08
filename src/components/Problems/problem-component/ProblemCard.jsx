import React from 'react';
import { motion } from 'framer-motion';

const ProblemCard = ({id, title, description, difficulty }) => {
  let difficultyColor;
  let difficultyText;

  switch (difficulty) {
    case 'easy':
      difficultyColor = 'bg-green-500';
      difficultyText = 'Easy';
      break;
    case 'medium':
      difficultyColor = 'bg-orange-400';
      difficultyText = 'Medium';
      break;
    case 'hard':
      difficultyColor = 'bg-red-600';
      difficultyText = 'Hard';
      break;
    default:
      difficultyColor = 'bg-gray-300';
      difficultyText = 'Unknown';
  }

  return (
    <div className='bg-transparent shadow-md  border border-gray-600 rounded-lg p-4 flex flex-col items-start space-y-5 gap-2 cursor-pointer hover:transition-all duration-700 hover:shadow-violet-600 hover:shadow-md'>
      <div className='flex items-center space-x-4 justify-center'>
        <div className={`${difficultyColor} rounded flex items-center justify-center p-1`}>
            {difficultyText}
        </div>
        <h2 className='text-lg font-semibold text-[#a370fb]'>
          <span>{id}{") "}</span>
          {title}</h2>
      </div>
      <p className='text-[16px] text-gray-400  text-justify'>{description}</p>
    </div>
  );
};

export default ProblemCard;
