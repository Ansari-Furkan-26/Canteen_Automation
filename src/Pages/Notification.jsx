import React from 'react'
import {Link} from "react-router-dom";


function Verify() {
  return (
    <div className="w-full h-screen bg-[#FAF5FF] p-5">
       <img className='mt-20' src="https://imagetolink.com/ib/torg7E1aE2.png" alt="img" />
       <img className='mt-10 m-2' src="https://imagetolink.com/ib/3bkSeITooB.png" alt="" />

       <h1 className='text-center mt-12'>Never Miss a Delicious Moment! </h1>

       <Link to="/Home"><button className='bg-[#0C0C0C] mt-8 mx-auto block content-center text-[#FFFFFF] py-3 px-8 rounded-3xl'>Turn on notification</button></Link>
    </div>
  )
}

export default Verify;