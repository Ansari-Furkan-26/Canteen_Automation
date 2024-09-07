import React from 'react'
import {Form, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCamera  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function EditProfile() {
  const [username, setUsername] = useState('Furqan Ansari'); // Autofill email here
  const [email, setEmail] = useState('22bit16@aiktc.ac.in');
  const [password, setPassword] = useState('123456789');

  // Handle input change
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  const handleInputChanges = (e) => {
    setEmail(e.target.value);
  };
  const handleInputChangess = (e) => {
    setPassword(e.target.value);
  };

   // State to hold the selected profile image
   const [profileImage, setProfileImage] = useState('https://i.pinimg.com/236x/6d/0e/05/6d0e052a59840858186a37ba74de24b3.jpg');

   // Handle image upload and update profile photo
   const handleImageChange = (e) => {
     const file = e.target.files[0];
     if (file) {
       setProfileImage(URL.createObjectURL(file)); // Create a local URL for the selected image
     }
   };

  return (
    <div className="w-full h-screen bg-[#FAF5FF] p-5">
        <div className='text-xl p-5'>
            <Link to="/Profile"><FontAwesomeIcon icon={faAngleLeft} /></Link>
            <center className='text-bg-[#534E55]'>Presonal Detail</center>
        </div>

        {/* User */}
        <div className='pt-10 '>
            <div className="flex flex-col items-center">
      {/* Display profile image or placeholder */}
      <div className="relative">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="h-36 rounded-full mx-auto block my-auto block border-2 shadow-lg"/>
        ) : (
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">No Image</div>
        )}

        {/* Camera icon overlay */}
        <label htmlFor="fileInput">
          <div className="absolute left-14 cursor-pointer">
          <FontAwesomeIcon icon={faCamera} className='h-4 p-2 bg-white rounded-full mx-auto block relative bottom-7 left-10 border-2' style={{color: "#b3b3b3",}} />
          </div>
        </label>
      </div>

      {/* Hidden file input */}
      <input id="fileInput" type="file" accept="image/*" className="hidden" onChange={handleImageChange}/>
    </div>

            <div className='text-center mt-5'>
                <h1 className='font-bold text-[#000000] text-2xl '>Furqan Ansari</h1>
                <h5 className='text-[#5B5B5E]'>Developer</h5>
            </div>
        </div>

        {/* User Details */}
        <Form className='mt-10 text-center'>
        <input className='w-64 p-2 bg-[#FAF5FF] font-medium text-xl text-black placeholder-gray-400 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500'
        placeholder={email === '' ? 'Username' : ''} type='name' value={username} onChange={handleInputChange}/>&nbsp;&nbsp;
          <input className='w-64 p-2 bg-[#FAF5FF] font-medium text-xl text-black placeholder-gray-400 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500'
        placeholder={email === '' ? 'Email Address' : ''} type='email' value={email} onChange={handleInputChanges}/>&nbsp;&nbsp;
        <input className='w-64 p-2 bg-[#FAF5FF] font-medium text-xl text-black placeholder-gray-400 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500'
        placeholder={email === '' ? 'Password' : ''} type='password' value={password} onChange={handleInputChangess}/>
        </Form>
    </div>
  )
}

export default EditProfile;