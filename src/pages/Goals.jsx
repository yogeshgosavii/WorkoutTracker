import React from 'react'
import Button from '../components/buttonComponents/Button'

function Goals() {
    const goals = [
        {
            goalText : "Weight Loss",
            goalSelected : false
        },
        {
            goalText : "Muscle Gain",
            goalSelected : false
        },
        {
            goalText : "Flexibility and Mobility",
            goalSelected : false
        },
        {
            goalText : "General Fitness",
            goalSelected : false
        },
        {
            goalText : "Event - specific training",
            goalSelected : false
        },
        {
            goalText : "Mindfulness and Mental Health",
            goalSelected : false
        }
    ]
  return (
    <div className='text-gray-900 p-5 flex flex-col justify-between h-screen'>
        <div>
            <h1 className='text-2xl font-bold mt-10 flex flex-col gap-5 w-full text-center'>What are your goals?</h1>
            <div className='mt-14'>
                {
                    goals.map((goal)=>{
                    return(
                        <div className='bg-gray-100 px-5 justify-between py-4 mt-4 rounded-xl flex items-center'>
                            <p className='font-semibold'>{goal.goalText}</p>
                            <label class=" relative flex items-center 
                                mr-3 rounded-full cursor-pointer" htmlFor="check">
                                <input type="checkbox"
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#89A1FF] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#89A1FF] checked:bg-[#89A1FF] checked:before:bg-[#89A1FF] "
                                onChange={()=>{goal.goalSelected = !goal.goalSelected}}
                                id="check"
                                />
                                <span
                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                    stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                        </div>
                    )
                    })
                }
            </div>
        </div>
        
        <Button>Confirm</Button>
    </div>
  )
}

export default Goals