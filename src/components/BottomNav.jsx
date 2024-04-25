import React, { useState } from 'react'

function BottomNav() {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
      // Handle navigation or any other actions based on the selected tab
    };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-4 px-4">
        <button
            className={`flex flex-col items-center focus:outline-none ${activeTab === 'home' ? 'text-[#89A1FF]' : 'text-gray-400'}`}
            onClick={() => handleTabClick('home')}
        >
            <svg class="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  </svg>
        </button>
        <button
            className={`flex flex-col items-center focus:outline-none ${activeTab === 'activity' ? 'text-[#89A1FF]' : 'text-gray-400'}`}
            onClick={() => handleTabClick('activity')}
        >
            <svg class="h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />  <polyline points="17 2 12 7 7 2" /></svg>        
        </button>

        <button onClick={()=>{handleTabClick('search')}} className='  transform   -mt-14 bg-gradient-to-r p-5 rounded-full from-white to-[#89A1FF]'>
            <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        </button>

        <button
        className={`flex flex-col items-center focus:outline-none ${activeTab === 'photo' ? 'text-[#89A1FF]' : 'text-gray-400'}`}
        onClick={() => handleTabClick('photo')}
        >
            <svg class="h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />  <circle cx="12" cy="13" r="4" /></svg>
        </button>
        <button
        className={`flex flex-col items-center focus:outline-none ${activeTab === 'profile' ? 'text-[#89A1FF]' : 'text-gray-400'}`}
        onClick={() => handleTabClick('profile')}
        >
        <svg class="h-8 w-8 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        </button>
    </div>
  )
}

export default BottomNav