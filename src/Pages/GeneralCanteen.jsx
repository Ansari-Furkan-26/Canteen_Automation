import React from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function GeneralCanteen() {
  return (
    <div className="w-full h-screen bg-[#FAF5FF] text-white">
     <div className="bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] h-96 bg-cover bg-center bg-no-repeat">
        <div className='text-xl p-10 '>
            <Link to="/Home"><FontAwesomeIcon icon={faAngleLeft} className='bg-white text-black p-3 shadow-lg rounded-xl' /></Link>
            <center className='text-3xl'>Huma Caterers</center>
            <p className="text-center mt-12">Explore all the most exciting dishes based on your taste and dietary preferences.</p>
        </div>
     </div>

    <div className='bg-[#FAF5FF]'>
     <div className='flex justify-between py-5 px-14'>
        <h1 className='text-[#323643] text-2xl font-bold'>Order Online</h1>
        <h1 className='text-[#7D7D7D] text-xl'>Review</h1>
     </div>

     <div className='px-40 mt-5 flex'>
      <img className='h-36 rounded-3xl' src="https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg" alt="" />
      
      <div className='flex w-full'>
      <div className='my-auto block px-10'>
       <h1 className='font-semibold text-[#323643] text-xl'>Egg Roll</h1>
       <h2 className='font-semibold text-[#FE724C] text-lg'>25&#x20b9;</h2>
       <p className='text-[#7F7D92] mt-5'>Try our Egg Roll—crispy, savory perfection in every bite!</p>
      </div>
      <div className='my-auto pl-96'><FontAwesomeIcon icon={faPlus} className='bg-[#FE724C] p-2 rounded-full py-3.5 px-4 text-xl' style={{color: "#ffffff",}} /></div>
     </div>
     </div>

     <div className='px-40 mt-5 flex'>
      <img className='h-36 rounded-3xl' src="https://i.pinimg.com/564x/cf/22/4c/cf224c75997c3f00eabf4e632a6df9ef.jpg" alt="" />
      
      <div className='flex w-full'>
      <div className='my-auto block px-10'>
       <h1 className='font-semibold text-[#323643] text-xl'>Chicken Burger</h1>
       <h2 className='font-semibold text-[#FE724C] text-lg'>99&#x20b9;</h2>
       <p className='text-[#7F7D92] mt-5'>Enjoy the newly launched Chicken Burger with the Fries</p>
      </div>
      <div className='my-auto pl-96'><FontAwesomeIcon icon={faPlus} className='bg-[#FE724C] p-2 rounded-full py-3.5 px-4 text-xl' style={{color: "#ffffff",}} /></div>
     </div>
     </div>

     <div className='px-40 mt-5 flex'>
      <img className='h-36 rounded-3xl' src="https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg" alt="" />
      
      <div className='flex w-full'>
      <div className='my-auto block px-10'>
       <h1 className='font-semibold text-[#323643] text-xl'>Egg Roll</h1>
       <h2 className='font-semibold text-[#FE724C] text-lg'>25&#x20b9;</h2>
       <p className='text-[#7F7D92] mt-5'>Enjoy the newly launched Chicken Burger with the Fries</p>
      </div>
      <div className='my-auto pl-96'><FontAwesomeIcon icon={faPlus} className='bg-[#FE724C] p-2 rounded-full py-3.5 px-4 text-xl' style={{color: "#ffffff",}} /></div>
     </div>

     
     </div>
     
     <div className='px-40 mt-5 flex'>
      <img className='h-36 rounded-3xl' src="https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg" alt="" />
      
      <div className='flex w-full'>
      <div className='my-auto block px-10'>
       <h1 className='font-semibold text-[#323643] text-xl'>Egg Roll</h1>
       <h2 className='font-semibold text-[#FE724C] text-lg'>25&#x20b9;</h2>
       <p className='text-[#7F7D92] mt-5'>Enjoy the newly launched Chicken Burger with the Fries</p>
      </div>
      <div className='my-auto pl-96'><FontAwesomeIcon icon={faPlus} className='bg-[#FE724C] p-2 rounded-full py-3.5 px-4 text-xl' style={{color: "#ffffff",}} /></div>
     </div>

     
     </div>
     </div>

    </div>
  )
}

export default GeneralCanteen