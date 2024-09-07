import React from 'react'
import {Form, Link} from "react-router-dom";
import { useState } from 'react';

const RegistrationForm = ({ onRegister }) =>{
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const handleSubmit = (event) => {
            event.preventDefault();
            // Call the onRegister function passed via props
            onRegister({ name, email, password });
        };

  return (
    <div className="h-screen bg-[#FAF5FF] p-5">
          <div className='pt-10'>
              <Link to="/Index"> <h1 className='text-center text-3xl font-bold text-[#534E55]'> Welcome!</h1></Link>
              <p className='text-center text-2xl text-[#808080] mt-4'>Sign up to continue</p>
          </div>

          <Form onSubmit={handleSubmit} className='mt-10 text-center'>
              <input className='p-5 w-96 bg-[#FFFFFF] rounded-2xl  drop-shadow-md' placeholder='Enter username' type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br />
              <input className='p-5 w-96 mt-4 bg-[#FFFFFF] rounded-2xl drop-shadow-md' placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
              <input className='p-5 w-96 mt-4 bg-[#FFFFFF] rounded-2xl drop-shadow-md' placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              <br />

              <Link to="/Verify"><button className='p-5 w-96 mt-6 bg-[#FE724C] rounded-2xl drop-shadow-md' type="submit">
                  <h1 className='text-center text-white font-medium text-lg'>GET OTP</h1>
              </button></Link>
          </Form>

          <Link to="/Login"><h2 className='text-center mt-6'>Already have an account? &nbsp;
              <span className='text-[#FE724C]'>Login</span></h2></Link>
         
        <div className=' mt-4 text-center'>
            <h1 className='text-center'>&nbsp; Or continue with &nbsp;</h1>
        </div>

          <div className='text-center mt-4'>
              GOOGLE
          </div>
    </div>
  )
}

export default RegistrationForm;