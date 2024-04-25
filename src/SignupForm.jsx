import React from 'react'
import Input from './components/inputCompnents/Input'
import PasswordInput from './components/inputCompnents/PasswordInput'
import googleLogo from "./assets/logo/googleLogo.png"
import facebookLogo from "./assets/logo/facebookLogo.png"
import { Link } from 'react-router-dom'
import Button from './components/buttonComponents/Button'
function SignupForm() {
  return (
    <div className='p-5 flex h-dvh flex-col text-gray-900'>
      <h1 className='text-2xl font-bold mt-5'>Create an account</h1>
      <div className='mt-10 flex justify-between flex-col flex-1'>
        <div className='space-y-5'>
          <Input className={"w-full"} placeHolder={"First name"}/>
          <Input className={"w-full"} placeHolder={"Last name"}/>
          <Input className={"w-full"} type="email" placeHolder={"Email"}/>
          <PasswordInput placeHolder={"Password"}/>
          <div className='flex  items-start'>
            
            <label class=" relative flex items-center  mt-1.5
             mr-3 rounded-full cursor-pointer" htmlFor="check">
              <input type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#89A1FF] checked:bg-[#89A1FF] checked:before:bg-[#89A1FF] "
                id="check" />
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
          <p className=' cursor-pointer text-gray-400'>By proceeding, I agree to all <span className='text-[#89A1FF]'>T&C</span> and  <span className='text-[#89A1FF]'>Privacy Policy</span></p>

          </div>
        </div>
        <Button className={"mt-10"}>Create an account</Button>
        
        
      </div>
      <div className='text-center mt-5'>
        <div class=" w-full flex items-center justify-center">
          <div class="h-px bg-gray-400 w-full"></div>
          <span class="bg-white px-2 text-gray-400">Or</span>
          <div class="h-px bg-gray-400 w-full"></div>
        </div>
        <div className='flex  mt-8'>
          <div className="flex w-full justify-center gap-5">
            <div className="p-3 rounded-lg border border-gray-400 aspect-square">
              <img className='w-full h-full object-cover' src={googleLogo} alt="Google Logo"/>
            </div>
            <div className="p-3 rounded-lg border border-gray-400 aspect-square">
              <img className='w-full h-full object-contain' src={facebookLogo} alt="Facebook Logo"/>
            </div>
          </div>
        </div>
        <p className='mt-8 mb-5'>Don't have an account ? <Link to={"/login"} className='text-[#89A1FF] cursor-pointer'>Create an account</Link></p>
      </div>
    </div>
  )
}

export default SignupForm