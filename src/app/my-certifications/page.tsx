import Link from 'next/link';
import React from 'react';
import Button from '../components/Button';

const Certifications = () => {
  return (
    <div className='bg-white p-6 md:p-8 lg:p-12'>
      <h1 className='text-black text-3xl md:text-4xl font-display text-center mb-8'>Certifications</h1>
      <hr className='border-teal-500 mb-8' />

      <h2 className='bg-grey text-black text-2xl md:text-3xl text-center py-4 px-6 rounded-lg shadow-lg mb-8'>
        Some of the certifications I have achieved:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Button
          href="https://www.udacity.com/certificate/e/cf86c978-0184-11ef-937d-7b1fe50dcf76"
          title="Introducing Generative AI with AWS | Udacity | 2024"
        />
        <Button
          href="https://www.credly.com/badges/6165d917-9627-47e1-aa5b-872172e31c2a/linked_in_profile"
          title="Google Data Analytics Professional | Coursera | 2024"
        />
        <Button
          href="https://digiskills.pk/images/verify/VerifyCertificate_Batch-01.jpg"
          title="Freelancing | DigiSkills | 2018"
        />
      </div>
    </div>
  );
};


export default Certifications;
