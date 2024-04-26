import React from 'react'
import workOut1Image from '../assets/workout/workout1.png'
import workOut2Image from '../assets/workout/workout2.png'
import workOut3Image from '../assets/workout/workout3.png'
import ToggleButton from '../components/buttonComponents/ToggleButton'
import BottomNav from '../components/BottomNav'
import WorkoutGraph from '../components/WorkoutGraph'
function Tracker() {
    const upcomingWorkouts = [
        {
            workoutName : "Full body Workout",
            workoutTime : "Today 3pm",
            workoutImage : workOut1Image,
            workoutSelected : true
        },
        {
            workoutName : "Upper body Workout",
            workoutTime : "4 Feb, 3:30 pm",
            workoutImage : workOut2Image,
            workoutSelected : true
        }
    ]
    const caloriesData = [200, 300, 250, 400,300, 250, 400];

  // Sample workout data
  const workoutData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Workout Duration (minutes)',
        data: [30, 35, 40, 45, 50, 55, 60], // Sample workout duration data
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }
  return (
    <div className='text-gray-900 pb-20'>
        <div className='fixed flex py-5 bg-white top-0 left-0 right-0 px-5 justify-center items-center'>
            <svg class="h-8 w-8  text-gray-900 bg-gray-200 rounded-md p-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
            <h1 className='text-2xl font-bold  flex flex-col gap-5 w-full text-center'>Workout Tracker</h1>
        </div>
        <div className='px-5'>
            <div className='mt-5 w-full'>
                <WorkoutGraph caloriesData={caloriesData}/>
            </div>
            <div className='bg-gradient-to-r font-medium mt-5  border from-[#819DFF47] to-white flex gap-4 rounded-lg px-4 py-2'>
                <svg class="h-12 w-12 text-[#89A1FF]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />  <line x1="12" y1="9" x2="12" y2="13" />  <line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                <p>You've burned fewer calories than yesterday. Time to get moving! </p>
            </div>
            <div className='mt-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>Upcoming Workout</h1>
                    <p className='text-gray-400'>See more</p>
                </div>
                <div className='flex flex-col gap-5 mt-8'>
                    {
                        upcomingWorkouts.map((workout)=>{
                            return(
                                <div className='flex justify-between gap-5 p-5 rounded-xl'
                                    style={{ boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.2)' }}>
                                    <div className='flex gap-5'>
                                        <img className='h-16' src={workout.workoutImage}/>
                                        <div className='mt-1 space-y-1.5'>
                                            <p className='font-semibold'>{workout.workoutName}</p>
                                            <p className='text-gray-400 text-sm'>{workout.workoutTime}</p>
                                        </div>

                                    </div>
                                    <ToggleButton initialCheck={workout.workoutSelected}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='font-semibold text-xl'>What do you want to train</h1>
                <div className='bg-[#abc6ff] flex justify-between rounded-xl p-5 mt-5'>
                    <div>
                        <p className='font-medium'>Full Body Workout</p>
                        <div className='text-sm mt-1'>
                            <p>Arms</p>
                            <p>Chest</p>
                            <p>Back</p>
                            <p>Shoulder</p>
                        </div>
                    </div>
                    <img className='h-28' src={workOut3Image}/>
                </div>
            </div>
        </div>
        
        <BottomNav/>
    </div>
  )
}

export default Tracker