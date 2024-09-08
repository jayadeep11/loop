import React from 'react';
import { problems } from '../../../utils/Problems.js';  
import ProblemCard from '../problem-component/ProblemCard.jsx';

const ProblemList = () => {
  return (
    <div className='flex flex-col items-center p-10 text-white min-h-screen w-full'>
        <div className='flex items-center justify-center flex-col'>
        <h2 className='text-[#BA99F3] text-4xl mb-10'>Problems</h2>
          <div className='grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl'>
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
