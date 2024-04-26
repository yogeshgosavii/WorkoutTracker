import React, { useState } from 'react'

function PasswordInput({
    placeHolder,
    className,
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`flex justify-between gap-5   bg-gray-100 placeholder:font-semibold pr-6  rounded-xl border border-gray-100 focus-within:border-[#89A1FF]  ${className}`} {...props}>
        <input type={showPassword?'text':'password'} className='bg-gray-100 rounded-xl pl-6 py-4  w-full outline-none placeholder:font-medium'  placeholder={placeHolder} />
        <div className='flex justify-center  items-center'>
        {
            showPassword?
            <svg onClick={(e)=>{e.preventDefault() ;setShowPassword(false)}} class="h-8 w-8 cursor-pointer text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
            </svg> 
            :
            <svg onClick={(e)=>{e.preventDefault() ; setShowPassword(true)}} class="h-8 w-8 cursor-pointer text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
        }
        </div>
       
    </div>
  )
}

export default PasswordInput