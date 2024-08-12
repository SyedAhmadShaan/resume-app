import React from 'react'

const Hobbies = () => {
    return (
        <div className='bg-white'>
    
            <h1 className='font-serif text-black'>Hobbies</h1>
            <hr />
            <h3 className='flex flex-col justify-start gap-5 mt-10 mb-5'>Here are some of the certifications I have achieved:</h3>
            <div className='flex flex-col gap-3 font-bold'>
                <button className='bg-green gap-3'>Coding</button>
                <button className='bg-yellow gap-3'>Watching Movies</button>
                <button className='bg-teal-500 gap-3'>Workout</button>
                <button className='bg-yellow'>Playing Video Games</button>
            </div>
        </div>
      )
}

export default Hobbies