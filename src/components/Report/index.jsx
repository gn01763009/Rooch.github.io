import React, { useEffect, useLayoutEffect } from 'react'
import Pointer from './pointer'
import { useNavigate } from 'react-router-dom';

function Report() {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='w-screen gap-5'>
      <h1 className="text-5xl font-bold text-center mb-6">Acceptance Rate</h1>
      <div className="w-1/2 mx-auto">
        <Pointer Value="70" />
      </div>
      <div className="flex flex-wrap justify-between w-full gap-5 mt-20">
          <div className="border flex flex-col items-center gap-3 p-3 py-8 rounded-2xl flex-1 animate__animated animate__fadeInUp">
              <h3 className="text-2xl font-bold text-center mb-6">Hard Skill</h3>
              <Pointer Value="70" />
              <div className="text-lg font-bold text-center mt-6">Nice</div>
              <ul className='list-disc ml-4 leading-7'>
                <li>Solid understanding of operating system operations.</li>
                <li>Proficient in applying streaming technologies.</li>
                <li>Provides comprehensive and detail-oriented answers.</li>
              </ul>
              <div className="text-lg font-bold text-center mt-6">Improvement</div>
              <ul className='list-disc ml-4 leading-7'>
                <li>Difficulty in understanding questions with changing formats.</li>
                <li>Not familiar with memory operations.</li>
                <li>Lack of familiarity with object-oriented concepts.</li>
              </ul>
          </div>
          <div className="border flex flex-col items-center gap-3 p-3 py-8 rounded-2xl flex-1 animate__animated animate__fadeInUp">
              <h3 className="text-2xl font-bold text-center mb-6">Soft Skill</h3>
              <Pointer Value="50" />
              <div className="text-lg font-bold text-center mt-6">Nice</div>
              <ul className='list-disc ml-4 leading-7'>
                <li>Solid understanding of operating system operations.</li>
                <li>Proficient in applying streaming technologies.</li>
                <li>Provides comprehensive and detail-oriented answers.</li>
              </ul>
              <div className="text-lg font-bold text-center mt-6">Improvement</div>
              <ul className='list-disc ml-4 leading-7'>
                <li>Difficulty in understanding questions with changing formats.</li>
                <li>Not familiar with memory operations.</li>
                <li>Lack of familiarity with object-oriented concepts.</li>
              </ul>
          </div>
          <div className="border flex flex-col items-center gap-3 p-3 py-8 rounded-2xl flex-1 animate__animated animate__fadeInUp">
              <h3 className="text-2xl font-bold text-center mb-6">Attitude</h3>
              <Pointer Value="90" />
              <div className="text-lg font-bold text-center mt-6">Nice</div>
              <ul className='list-disc ml-4 leading-7'>
                <li>Demonstrates a highly positive and friendly attitude, showcasing exceptional professionalism.</li>
                <li>Greets the interview with a friendly and open attitude, showing enthusiasm for new challenges and learning opportunities.</li>
              </ul>
              <div className="text-lg font-bold text-center mt-6">Improvement</div>
              <ul className='list-disc ml-4 leading-7'>
                <li>Exhibits a slightly overly modest attitude, needs to showcase skills and accomplishments with more confidence.</li>
              </ul>
          </div>
      </div>
      <div className='flex justify-around my-8'>
        <button onClick={() => {navigate('/loading')}} className="w-1/3 p-3 btn-secondary rounded-md">
          Try Again
        </button>
        <button onClick={() => {navigate('/lists')}} className="w-1/3 p-3 btn-secondary rounded-md">
          Try Other Jobs
        </button>
      </div>
    </div>
  )
}

export default Report