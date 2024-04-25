import React from 'react'

function Input({
    placeHolder,
    className,
    ...props
}) {
  return (
    <div>
        <input className={` border border-gray-100 focus:border-[#89A1FF] bg-gray-100 placeholder:font-semibold placeholder:text-gray-400 rounded-xl outline-none px-6 py-4 ${className}`} placeholder={placeHolder} />
    </div>
  )
}

export default Input