
import React from 'react'
import Links from 'next/Link'

const Projects = () => {
  return (
    <div className='bg-white'>

        <h1 className='font-serif text-black'>Projects</h1>
        <hr />
        <h3 className='flex flex-col justify-start gap-5 mt-10 mb-5'>Here are some of the projects I have worked on:</h3>
        <div className='flex flex-col gap-3 font-bold'>
            <button className='bg-green gap-3'><Links href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Currency-Converter">Currency Converter</Links></button>
            <button className='bg-yellow gap-3'><Links href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Simple-Calculator">Simple Calculator</Links></button>
            <button className='bg-teal-500 gap-3'><Links href="https://github.com/SyedAhmadShaan/Batch-57/tree/main/learn-typescript/Node%20Projects/Student_Management_System">Student Management System</Links></button>
            <button className='bg-yellow gap-3'><Links href="https://syedahmadshaan.github.io/html-portfolio/">HTML Portfolio</Links></button>
        </div>
    </div>
  )
}

export default Projects