import React, { useState } from 'react';
import { problems } from '../../../utils/Problems.js';
import ProblemCard from '../problem-component/ProblemCard.jsx';
import MessageCard from '../problem-component/MessageCard.jsx';

const ProblemList = () => {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('All Difficulty');

  const filteredProblems = problems
    .filter((problem) => problem.title.toLowerCase().includes(search.toLowerCase()))
    .filter((problem) => difficulty === 'All Difficulty' || problem.difficulty === difficulty.toLowerCase());

  return (
    <div className='flex flex-col items-center p-6 md:p-10 lg:p-12 text-white min-h-screen w-full'>
      <div className='flex flex-col items-center w-full'>
        <div className='w-full flex justify-center mb-8'>
          <MessageCard />
        </div>
        
        <div className='flex flex-col md:flex-row justify-evenly items-center w-full mb-8'>
          <h1 className="text-violet-400 text-2xl md:text-3xl lg:text-4xl font-bold">
            Problems
          </h1>

          <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center'>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full md:w-60 h-10 md:h-12 p-3 bg-transparent border-b-2 border-b-violet-500 text-white placeholder:text-gray-400 text-sm md:text-base outline-none"
            />            
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full md:w-48 h-10 md:h-12 p-2 bg-transparent border-b-2 border-b-violet-500 text-gray-400 text-sm md:text-base focus:outline-none"
            >
              <option>All Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
        </div>

        <div className='grid gap-6 md:gap-8 mt-4 md:mt-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl'>
          {filteredProblems.map((problem) => (
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
