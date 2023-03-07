import React,{useState} from 'react'
import Image from 'next/legacy/image'
import { APICall } from '../utils/apiCall'
import Link from 'next/link'

export const Login = () => {

    const [firstname,setFirstName] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    const [firstNameError,setFirstNameError] = useState(false)
    const [lastnameError,setLastnameError] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const [confirmPasswordError,setConfirmPasswordError] = useState(false)
    const [isRegistered,setIsRegistered] = useState(false)

    const registerBtnHandler = async () => {
        const response = await APICall("http://localhost:3000/register",{firstname,lastname,email,password,confirmpassword})
       if (response != null ) setIsRegistered(true)
    }
    const loginBtnHandler = async () => {
        const response = await APICall("http://localhost:3000/login",{email,password})
       if (response != null ) console.log('hi',response.firstname)
    }

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='h-screen w-screen z-10 fixed'>
            <Image
                src="/grocery.png"
                alt="background picture"
                  layout='fill'
                 
            />
        </div>
        {!isRegistered ? <div className='bg-white flex w-1/3 z-30 p-3 rounded-md items-center justify-center shadow-xl flex-col pb-10'>
            <p className='font-semibold text-2xl text-gray-800 font-sans mt-4'>Register</p>
            <div className='w-10/12 mt-5'>
                {firstNameError &&<p className='mb-1 text-red-500'>Please enter first name</p>}
                <input type="text" name="firstname" id="firstname" placeholder='First Name' value={firstname} onChange={(evt)=>setFirstName(evt.target.value)}  
                className='border focus:border-[#009f7f] focus:outline-none rounded w-full  p-3 font-mono' />
            </div>
            <div className='w-10/12 mt-5'>
                {lastnameError &&<p className='mb-1 text-red-500'>Please enter first name</p>}
                <input type="text" name="lastname" id="lastname" placeholder='Last Name' value={lastname} onChange={(evt)=>setLastname(evt.target.value)} 
                className='border focus:border-[#009f7f] focus:outline-none rounded w-full  p-3 font-mono' />
            </div>
            <div className='w-10/12 mt-5'>
                {emailError &&<p className='mb-1 text-red-500'>Please enter first name</p>}
                <input type="text" name="email" id="email" placeholder='Email' value={email} onChange={(evt)=>setEmail(evt.target.value)} 
                className='border focus:border-[#009f7f] focus:outline-none rounded w-full  p-3 font-mono' />
            </div>
            <div className='w-10/12 mt-5'>
                {passwordError && <p className='mb-1 text-red-500'>Please enter first name</p>}
                <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(evt)=>setPassword(evt.target.value)} 
                className='border focus:border-[#009f7f] focus:outline-none rounded w-full  p-3 font-mono' />
            </div>
            <div className='w-10/12 mt-5'>
                {confirmPasswordError && <p className='mb-1 text-red-500'>Please enter first name</p>}
                <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm Password' value={confirmpassword} onChange={(evt)=>setConfirmPassword(evt.target.value)} 
                className='border focus:border-[#009f7f] focus:outline-none rounded w-full  p-3 font-mono' />
            </div>
           <input type="button" value="REGISTER" onClick={registerBtnHandler}
           className='w-10/12 bg-[#009f7f] mt-10 p-3 rounded text-white font-bold font-mono text-xl cursor-pointer'/>
        </div>
        :
        <div className='bg-white flex w-1/3 z-30 p-3 rounded-md items-center justify-center shadow-xl flex-col pb-10'>
            <p className='font-semibold text-2xl text-gray-800 font-sans mt-4'>Login</p>
            <div className='w-10/12 mt-5'>
                {emailError &&<p className='mb-1 text-red-500'>Please enter first name</p>}
                <input type="text" name="email" id="email" placeholder='Email' value={email} onChange={(evt)=>setEmail(evt.target.value)} 
                className='border focus:border-[#009f7f] focus:outline-none rounded w-full  p-3 font-mono' />
            </div>
            <div className='w-10/12 mt-5'>
                {passwordError && <p className='mb-1 text-red-500'>Please enter first name</p>}
                <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(evt)=>setPassword(evt.target.value)} 
                className='border focus:border-[#009f7f] focus:outline-none rounded w-full  p-3 font-mono' />
            </div>
            <Link href="/home" className='w-10/12 bg-[#009f7f] mt-10 p-3 rounded text-white font-bold font-mono text-xl cursor-pointer items-center justify-center flex'>
                <input type="button" value="LOGIN" onClick={loginBtnHandler}
           /></Link>
        </div>
        }
    </div>
  )
}
