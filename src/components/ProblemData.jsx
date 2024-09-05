import React from 'react';
import ProblemPage from './ProblemPage';

const problemData = {
  title: 'Two Sum',
  description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
  intuition: 'A hash map can be used to store the difference between the target and each number as you iterate through the array.'
};

const ProblemView = () => {
  return (
    <div>
      <ProblemPage 
        title={problemData.title} 
        description={problemData.description} 
        intuition={problemData.intuition}
      />
    </div>
  );
};

export default ProblemView;

