import React from 'react'
import cyclingImage from '../assets/cycling-image.png'
function GetBurn() {
  return (
    <div className='flex flex-col items-center'>
        <img className='w-11/12' src={cyclingImage}/>
        <div className='mt-16'>
            <p className='text-2xl font-medium text-gray-950'> Get Burn</p>
            <p className='text-gray-500 mt-2 text-xl '>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
        </div>
    </div>
  )
}

export default GetBurn