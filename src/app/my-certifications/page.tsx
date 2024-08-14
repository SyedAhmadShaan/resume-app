import Link from 'next/link'
import React from 'react'

const Certifications = () => {
    return (
        <div className='bg-grey'>
    
            <h1 className='font-serif text-teal-500 flex flex-col items-center'>Certifications</h1>
            <hr />
            <h2 className='bg-teal-500 text-white flex flex-col items-center gap-5 mt-10 mb-5'>Here are some of the certifications I have achieved:</h2>
            <div className='flex flex-col gap-3 font-bold items-center'>
                <button className='btn1 btn-outline gap-3'>
                    <Link href="https://www.udacity.com/certificate/e/cf86c978-0184-11ef-937d-7b1fe50dcf76" target='blank'>Introducing Generative AI with AWS | Udacity | 2024</Link> 
                    </button>
                <button className='btn1 btn-outline gap-3'>
                <Link href="https://www.credly.com/badges/6165d917-9627-47e1-aa5b-872172e31c2a/linked_in_profile" target='blank'>Google Data Anaytics Professional Certification | Coursera | 2024 </Link>
                    </button>
                <button className='btn1 btn-outline gap-3'>
                <Link href="https://digiskills.pk/images/verify/VerifyCertificate_Batch-01.jpg" target='blank'>Freelancing | DigiSkills | 2018 </Link>
                </button>
            </div>
        </div>
      )
}

export default Certifications