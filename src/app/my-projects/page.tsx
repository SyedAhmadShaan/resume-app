import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';

const Projects = () => {
  return (
    <div className="bg-white p-6 md:p-8 lg:p-12">
      <h1 className="text-black text-3xl md:text-4xl font-display text-center mb-8">Projects</h1>
      <hr className="border-teal-400 mb-8" />

      <section>
        <h2 className="bg-teal-600 text-black text-2xl md:text-3xl text-center py-3 rounded-md shadow-md mb-8">
          TypeScript + Node.js Projects:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Button 
            href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Student_Management_System"
            title="Student Management System"
          />
          <Button 
            href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Currency-Converter"
            title="Currency Converter"
          />
          <Button 
            href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Simple-Calculator"
            title="Simple Calculator"
          />
          <Button 
            href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Todo-list-app"
            title="ToDo List App"
          />
          <Button 
            href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Word-Counter"
            title="Word Counter"
          />
          <Button 
            href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/cli-number-guessing-game"
            title="Number Guessing Game"
          />
          <Button 
            href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/ATM"
            title="ATM"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="bg-teal-600 text-black text-2xl md:text-3xl text-center py-3 rounded-md shadow-md mb-8">
          Next.js + Tailwind CSS Projects:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Button 
            href="https://github.com/SyedAhmadShaan/resume-app"
            title="Resume App"
          />
        </div>
      </section>
    </div>
  );
};


export default Projects;
