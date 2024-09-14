import React from 'react'
import {Form, Link} from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const RegistrationForm = ({ onRegister }) =>{
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const handleSubmit = (event) => {
            event.preventDefault();
            // Call the onRegister function passed via props
            onRegister({ name, email, password });
        };


        const [showPassword, setShowPassword] = useState(false);
        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
          };

  return (
    <div className="h-screen bg-[#FAF5FF] p-5">
          <div className='pt-10'>
              <Link to="/Index"> <h1 className='text-center text-3xl font-bold text-[#534E55]'> Welcome!</h1></Link>
              <p className='text-center text-2xl text-[#808080] mt-4'>Sign up to continue</p>
          </div>

        <div className='flex justify-center items-center'>
          <Form onSubmit={handleSubmit} className='mt-10 text-center'>
              <input className='p-5 w-96 bg-[#FFFFFF] rounded-2xl focus:outline-none drop-shadow-md' placeholder='Enter username' type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br />
              <input className='p-5 w-96 mt-4 bg-[#FFFFFF] rounded-2xl focus:outline-none drop-shadow-md' placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
              <div className='flex mt-4 w-96 bg-[#FFFFFF] rounded-2xl drop-shadow-md'>
                <input className='py-1 pb-5 px-5 w-96 mt-4 bg-[#FFFFFF] my-auto focus:outline-none rounded-2xl border-transparent' placeholder='Password' type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <span className="cursor-pointer my-auto px-5 text-[#808080]" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /></span>
              </div>
              <br />

              <Link to="/Verify"><button className='p-5 w-96 mt-6 bg-[#FE724C] rounded-2xl drop-shadow-md' type="submit">
                  <h1 className='text-center text-white font-medium text-lg'>GET OTP</h1>
              </button></Link>
          </Form>
          </div>
          
          <Link to="/Login"><h2 className='text-center mt-6'>Already have an account? &nbsp;
              <span className='text-[#FE724C]'>Login</span></h2></Link>
         
        <div className=' mt-4 text-center'>
            <h1 className='text-center'>&nbsp; Or continue with &nbsp;</h1>
        </div>

        {/* Further Update */}
          {/* <div className='text-center mt-4'>
              GOOGLE
          </div> */}
    </div>
  )
}

export default RegistrationForm;