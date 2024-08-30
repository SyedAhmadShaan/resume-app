import React from 'react';
import Button from '../components/Button';

const Hobbies = () => {
  return (
    <div className='bg-white p-6 md:p-8 lg:p-12'>
      <h1 className='text-black text-3xl md:text-4xl font-display text-center mb-8'>Hobbies</h1>
      <hr className='border-teal-500 mb-8' />

      <h2 className='bg-grey text-black text-2xl md:text-3xl text-center py-4 px-6 rounded-lg shadow-lg mb-8'>
        In my free time I love:
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Button title='Coding' />
        <Button title='Watching Movies' />
        <Button title='Workout' />
        <Button title='Playing Video Games' />
      </div>
    </div>
  );
};


export default Hobbies;
