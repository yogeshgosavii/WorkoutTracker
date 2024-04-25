import React from 'react'
import Input from './components/inputCompnents/Input'
import googleLogo from "./assets/logo/googleLogo.png"
import facebookLogo from "./assets/logo/facebookLogo.png"
import Button from './components/buttonComponents/Button'
import PasswordInput from './components/inputCompnents/PasswordInput'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <div className='p-5 flex h-screen flex-col'>
      <h1 className='text-2xl font-bold mt-5'>Welcome Back</h1>
      <div className='mt-10 flex justify-between flex-col flex-1'>
        <div className='space-y-5'>
          <Input className={"w-full"} placeHolder={"Email"}/>
          <PasswordInput placeHolder={"Password"}/>
          <p className=' cursor-pointer hover:text-[#89A1FF] underline text-gray-400'>Forget your password?</p>
        </div>
        <Button>Sign In</Button>
        
        
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
        <p className='mt-8'>Don't have an account ? <Link to={"/signup"} className='text-[#89A1FF]'>Create an account</Link></p>
      </div>
    </div>
  )
}

export default LoginForm