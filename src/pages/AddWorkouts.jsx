import React from 'react'
import TimeSelector from '../components/TimeSelector'
import Input from '../components/inputCompnents/Input'
import Button from '../components/buttonComponents/Button'

function AddWorkouts({workoutList}) {
  return (
    <div className=' h-dvh flex flex-col p-5 '>
        <div className='flex justify-center w-full'>
            <svg class="h-8 w-8  text-gray-900 bg-gray-200 rounded-md p-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="15 6 9 12 15 18" /></svg>
            <h1 className='text-2xl font-bold flex flex-col gap-5 w-full text-center'>Add Workout</h1>
        </div>
        <div className='mt-16 flex flex-col h-full justify-between'>
            <div>
                <Input placeHolder={"Workout name"} className={"w-full"}/>
                <TimeSelector className={"mt-5"}/>
            </div>
            <Button className={"mt-8"}>Add</Button>
        </div>
  </div>
  )
}

export default AddWorkouts