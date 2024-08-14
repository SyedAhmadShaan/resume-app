
import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='bg-white'>
      <h1 className='font-serif text-teal-500 flex flex-col items-center'>Projects</h1>
      <hr className='mb-6' />
      <h2 className='bg-teal text-white flex flex-col items-center gap-5 mt-10 mb-5'>TypeScript + Node.js projects:</h2>

      <div className='flex flex-col gap-3 font-bold items-center'>
            <button className='btn1 btn-outline gap-3'>
              <Link href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Student_Management_System" target='blank'>
              Student Management System</Link></button>
            <button className='btn1 btn-outline p-4'>
              <Link href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Currency-Converter" target='blank'>Currency Converter</Link></button>
            <button className='btn1 btn-outline p-4'>
              <Link href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Simple-Calculator" target='blank'>Simple Calculator</Link></button>
            <button className='btn1 btn-outline p-4'>
              <Link href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Todo-list-app">ToDo List App</Link></button>
            <button className='btn1 btn-outline btn-lg p-4'>
              <Link href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Word-Counter">Word Counter</Link></button>
            <button className='btn1 btn-outline p-4'>
              <Link href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/cli-number-guessing-game">Number Guessing Game</Link></button>
            <button className='btn1 btn-outline p-4'>
              <Link href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/ATM">ATM</Link></button>
        </div>
        <h2 className='bg-teal text-white flex flex-col items-center gap-5 mt-10 mb-5'>Next.js + Tailwind CSS Projects:</h2>
        <div className='flex flex-col gap-3 font-bold items-center'>
            <button className='btn1 btn-outline gap-3'><Link href="https://github.com/SyedAhmadShaan/resume-app" target='blank'>Resume App</Link></button>
        </div>
    </div>
  )
}

export default Projects