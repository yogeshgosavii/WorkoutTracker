import React from 'react'
import joggingImage from '../assets/jogging-image.png'

function TrackGoal() {
  return (
    <div className='flex flex-col items-center'>
        <img className='w-11/12' src={joggingImage}/>
        <div className='mt-16'>
            <p className='text-2xl font-medium text-gray-950'> Track your goal</p>
            <p className='text-gray-500 mt-2 text-xl '>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
        </div>
    </div>
  )
}

export default TrackGoal