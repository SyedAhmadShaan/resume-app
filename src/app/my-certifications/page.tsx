import React from 'react'

const Certifications = () => {
    return (
        <div className='bg-white'>
    
            <h1 className='font-serif text-black'>Certifications</h1>
            <hr />
            <h3 className='flex flex-col justify-start gap-5 mt-10 mb-5'>Here are some of the certifications I have achieved:</h3>
            <div className='flex flex-col gap-3 font-bold'>
                <button className='bg-green gap-3'>Introducing Generative AI with AWS | Udacity | 2024</button>
                <button className='bg-yellow gap-3'>Google Data Anaytics Professional Certification | Coursera | 2024</button>
                <button className='bg-teal-500 gap-3'>Freelancing | DigiSkills | 2018</button>
            </div>
        </div>
      )
}

export default Certifications