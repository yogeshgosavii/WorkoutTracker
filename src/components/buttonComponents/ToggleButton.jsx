import React, { useState } from 'react'

function ToggleButton({initialCheck}) {
    const [isChecked, setIsChecked] = useState(initialCheck)

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
  
    return (
      <>
        <label className='autoSaverSwitch  relative inline-flex cursor-pointer select-none items-center'>
          <input
            type='checkbox'
            name='autoSaver'
            className='sr-only'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`slider  flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
              isChecked ? 'bg-[#89A1FF]' : 'bg-[#CCCCCE]'
            }`}
          >
            <span
              className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                isChecked ? 'translate-x-6' : ''
              }`}
            ></span>
          </span>
        
        </label>
      </>
    )
  
}

export default ToggleButton