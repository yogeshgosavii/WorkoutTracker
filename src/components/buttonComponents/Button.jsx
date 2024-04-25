import React from 'react'

function Button({
    className,
    children,
    ...props
}) {
  return (
    <div>
        <button className={` bg-[#89A1FF] font-semibold w-full py-4 text-white text-xl rounded-xl ${className}`} {...props}>{children}</button>
    </div>
  )
}

export default Button