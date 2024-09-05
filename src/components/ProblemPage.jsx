import React from 'react';

const ProblemPage = ({ title, description, intuition }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      {/* Problem Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
      
      {/* Problem Statement */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-violet-600">Problem Statement</h3>
        <p className="text-gray-600 mt-4">{description}</p>
      </section>
      
      {/* Intuition */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-violet-600">Intuition</h3>
        <p className="text-gray-600 mt-4">{intuition}</p>
      </section>
    </div>
  );
};

export default ProblemPage;

