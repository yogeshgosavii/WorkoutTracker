import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import { Link } from 'react-router-dom';

function Schedule() {
  const [currentDate, setCurrentDate] = useState("Feb 2024");
  const [selectedDay, setselectedDay] = useState("Mon");
  const workouts = [
    { time: '07:30 AM', name: 'Ab Workout', completed: false },
    { time: '09:00 AM', name: 'Upperbody Workout', completed: false },
    { time: '03:00 PM', name: 'LowerBody Workout', completed: true },
    // Add more workout objects as needed
  ];

  const timeSlots = [];
  for (let hour = 1; hour <= 12; hour++) {
    const time = `${hour < 10 ? '0' + hour : hour}`;
    timeSlots.push(time + ':00 AM');
  }

  for (let hour = 1; hour <= 12; hour++) {
    const time = `${hour < 10 ? '0' + hour : hour}`;
    timeSlots.push(time + ':00 PM');
  }

  const convertTo24Hour = (time) => {
    const [hour, minute, period] = time.split(/[:\s]/);
    if (period === "PM" && hour !== "12") {
      return `${parseInt(hour) + 12}:${minute}`;
    } else if (period === "AM" && hour === "12") {
      return `00:${minute}`;
    } else {
      return `${hour}:${minute}`;
    }
  };
  const days= [
    {
        day : "Sun",
        date : "5"
    },
    {
        day : "Mon",
        date : "6"
    },
    {
        day : "Tue",
        date : "7"
    },
    {
        day : "Wed",
        date : "8"
    },
    {
        day : "Thu",
        date : "9"
    }
  ]


  return (
    <div className='p-5 text-gray-900 font-sans'>
        <div className='fixed  flex flex-col bg-white py-5 top-0 left-5 right-5'>
         <div className='flex  justify-center  w-full'>
            <svg class="h-8 w-8  text-gray-900 bg-gray-200 rounded-md p-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="15 6 9 12 15 18" /></svg>
            <h1 className='text-2xl font-bold flex flex-col gap-5 w-full text-center'>Workout Schedule</h1>
        </div>
        <div className='flex gap-2 items-center justify-center mt-3'>
            <svg class="h-8 w-8  text-gray-900 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="15 6 9 12 15 18" /></svg>
            <p className='font-semibold'>{currentDate}</p>
            <svg class="h-8 w-8 text-gray-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="9 6 15 12 9 18" /></svg>
        </div>
        <div className='flex gap-2 mt-5'>
            {
                days.map((day)=>{
                    return(
                        <div onClick={()=>{setselectedDay(day.day)}} className={`  w-full items-center rounded-lg p-4 text-center  ${selectedDay == day.day ?"bg-gradient-to-r text-white from-[#D1DBFF] to-[#8DA4FF]":null}`}>
                            <p className='text-sm font-semibold'>{day.day}</p>
                            <p className='text-2xl font-semibold'>{day.date}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
       
     
      <div className="flex flex-col mt-52 pb-16 overflow-y-auto">
        {timeSlots.map((time, index) => (
          <div key={index} className="flex items-center gap-5 border-b">
            <p className='py-4'>{time}</p>
            {workouts.map((workout) => {
              const workoutHour = parseInt(workout.time.split(':')[0]);
              const workoutMinutes = parseInt(workout.time.split(':')[1]);
              if (workout.time === time) {
                return (
                  <div key={workout.time} className={`rounded-full h-fit flex gap-2 px-4 py-1.5 font-semibold ${workout.completed ? "bg-gray-200" : "bg-gradient-to-r text-white from-[#E9B1E0] to-[#D3A4F4]"}`}>
                    <p>{workout.name},</p>
                    <p>{workout.time}</p>
                  </div>
                )
              } else if (workoutHour === index && workoutMinutes === 30) {
                return (
                  <div key={workout.time} className={`rounded-full h-fit flex gap-2 px-4 py-1.5 font-semibold -mt-14 ${workout.completed ? "bg-gray-200" : "bg-gradient-to-r text-white from-[#E9B1E0] to-[#D3A4F4]"}`}>
                    <p>{workout.name},</p>
                    <p>{workout.time}</p>
                  </div>
                )
              }
              return null;
            })}
          </div>
        ))}
         <Link to={"/add-workout"}  className='fixed  cursor-pointer right-10 bottom-36 border bg-gradient-to-r p-5 rounded-full from-[#E9B1E0] to-[#D3A5F2]'>
            <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
          </Link>
      </div>
      <BottomNav />
    </div>
  );
}

export default Schedule;
