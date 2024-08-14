import React from 'react'

const Hobbies = () => {
    return (
        <div className='bg-white'>
    
            <h1 className='font-serif text-teal-500 flex flex-col items-center'>Hobbies</h1>
            <hr />
            <h2 className='bg-teal text-white flex flex-col items-center gap-5 mt-10 mb-5'>In my free time I love:</h2>
            <div className='flex flex-col items-center gap-3 font-bold'>
                <button className='btn1 btn-outline bg-green gap-3'>Coding</button>
                <button className='btn1 btn-outline bg-yellow gap-3'>Watching Movies</button>
                <button className='btn1 btn-outline bg-teal-500 gap-3'>Workout</button>
                <button className='btn1 btn-outline bg-yellow gap-3'>Playing Video Games</button>
            </div>
        </div>
      )
}

export default Hobbies