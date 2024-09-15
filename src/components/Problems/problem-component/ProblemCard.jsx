import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProblemCard = ({ id, title, description, difficulty }) => {
  let difficultyColor;
  let difficultyText;
  let textColor;

  switch (difficulty) {
    case 'easy':
      difficultyColor = 'bg-green-500';
      difficultyText = 'Easy';
      textColor = 'text-green-500';
      break;
    case 'medium':
      difficultyColor = 'bg-orange-400';
      difficultyText = 'Medium';
      textColor = 'text-orange-400';
      break;
    case 'hard':
      difficultyColor = 'bg-red-600';
      difficultyText = 'Hard';
      textColor = 'text-red-600';
      break;
    default:
      difficultyColor = 'bg-gray-300';
      difficultyText = 'Unknown';
  }

  return (
    <div className='bg-transparent shadow-md  border md:border-gray-600 rounded-lg p-2 md:p-4 flex flex-col items-start md:space-y-5 md:gap-2 cursor-pointer hover:transition-all duration-700 hover:shadow-violet-600 hover:shadow-md '>
      <div className='flex items-center space-x-2 md:space-x-4 justify-center'>

        <div className={`${difficultyColor} hidden rounded md:flex items-center justify-center p-1 md:text-md text-sm`}>
          {difficultyText}
        </div>
        <h2 className='text-sm md:text-lg font-semibold text-[#a370fb]'>
          <span>{id}{") "}</span>
          {title}
        </h2>
        <div className={`${textColor} md:hidden rounded flex items-center justify-center p-1 md:text-md text-sm`}>
          {difficultyText}
        </div>
        <Link to={`/problems/${id}`} className='text-violet-400 hover:text-violet-500 mt-2 text-[10px] md:text-sm md:hidden'>
          Read More
        </Link>
      </div>
      <p className='hidden md:flex md:text-[16px] text-gray-400  text-justify'>{description}</p>
    </div>
  );
};

export default ProblemCard;
