import React from 'react';
import { problems } from '../../../utils/Problems.js';  
import ProblemCard from '../problem-component/ProblemCard.jsx';

const ProblemList = () => {
  return (
    <div className='flex flex-col items-center p-6 md:p-10 lg:p-12 text-white min-h-screen w-full'>
      <div className='flex flex-col items-center w-full'>
        <h1 className="text-violet-400 text-center mt-16 md:mt-24 lg:mt-32 text-4xl md:text-6xl lg:text-9xl arch">
          Problems
        </h1>
        <div className='grid gap-8 mt-12 md:mt-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full max-w-6xl'>
          {problems.map((problem) => (
            <ProblemCard
              key={problem.id}
              id={problem.id}
              title={problem.title}
              description={problem.description}
              difficulty={problem.difficulty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemList;

