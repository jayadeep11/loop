import React from 'react';
import { useParams } from 'react-router-dom';
import { problems } from '../../../utils/Problems.js';

const ProblemPage = () => {
  const { id } = useParams(); // Get the problem ID from the URL
  const problem = problems.find(p => p.id === parseInt(id)); // Find the problem by ID

  if (!problem) {
    return <div>Problem not found</div>; // Handle case where problem is not found
  }

  return (
    <div className='p-6 md:p-10 lg:p-12 text-white min-h-screen'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-violet-400 mb-4'>{problem.title}</h1>
        <p className='text-lg md:text-xl mb-4'>{problem.description}</p>
        <p className='text-sm md:text-md text-gray-400'>Difficulty: {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}</p>
      </div>
    </div>
  );
};

export default ProblemPage;

