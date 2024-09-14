import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import {Form, Link} from "react-router-dom";
import { useState } from 'react';


function Login() {
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

  return (
    <div className="w-full h-screen bg-[#FAF5FF] p-5">
          <div className='pt-16'>
              <Link to="/Index"> <h1 className='text-center text-3xl font-bold text-[#534E55]'> Hello Again!</h1></Link>
              <p className='text-center text-2xl text-[#808080] mt-4'>Welcome back you’ve been missed!</p>
          </div>

          <div className='flex justify-center items-center'>
          <Form className='mt-12 text-center'>
              <input className='p-5 bg-[#FFFFFF] rounded-2xl w-96 drop-shadow-md' placeholder='Enter username' type='name'></input><br />
              <div className='flex mt-4 w-96 bg-[#FFFFFF] rounded-2xl drop-shadow-md'>
                <input className='py-1 pb-5 px-5 w-96 mt-4 bg-[#FFFFFF] my-auto focus:outline-none rounded-2xl border-transparent' placeholder='Password' type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <span className="cursor-pointer my-auto px-5 text-[#808080]" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /></span>
              </div>
              <p className='text-center text-[#5B5B5E] mt-4'>Recovery Password</p>

              <Link to="/Home"><button className='p-5 mt-8 bg-[#FE724C] rounded-2xl drop-shadow-md' type='submit'>
                  <h1 className='text-center text-white w-80 font-medium text-lg'>SIGN IN</h1>
              </button></Link>
          </Form>
          </div>

          <Link to="/Register"><h2 className='text-center mt-6'>Not a Member? &nbsp;
              <span className='text-[#FE724C]'>Register Now</span></h2></Link>
              
              <div className=' mt-4 text-center p-3'>
              <h1 className='text-center'>&nbsp; Or continue with &nbsp;</h1>
          </div>

          <div className='text-center mt-4'>
              GOOGLE
          </div>
    </div>
  )
}

export default Login