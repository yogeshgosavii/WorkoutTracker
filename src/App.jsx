import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import TrackGoal from './startComponent/TrackGoal';
import GetBurn from './startComponent/GetBurn';
import { Link } from 'react-router-dom';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();


  const handleStartClick = () => {
    if(currentPage>=startComponents.length-1){
      navigate("/login")    
    }
    setCurrentPage(currentPage+1);
  };

  const startComponents = [
    <TrackGoal/>,
    <GetBurn/>
  ]

  const progress = currentPage * 100/startComponents.length; // 25% progress per click
  const circumference = 2 * Math.PI * 45; 
  const offset = circumference - (progress / 100) * circumference;

  return (
    <>
      <div className='p-5 h-dvh flex flex-col'>
        <Link to={"/login"} className='flex justify-end text-[#9FB2FF] underline text-xl underline-offset-4'>Skip</Link>
        <div className=' flex-1 flex justify-center items-center'>
          {startComponents[currentPage]}
        </div>
        <div className='flex justify-end'>
        <div className='relative rounded-full'>
          <svg className="-rotate-90 w-24 h-24">
            <circle className="stroke-current text-[#89A1FF]" cx="50%" cy="50%" r="38%" strokeWidth="2.5%" fill="transparent"
              strokeDasharray={`${circumference}`} strokeDashoffset={offset}></circle>
          </svg>
          <button onClick={handleStartClick} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r p-3 rounded-full from-white to-[#89A1FF]'>
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
