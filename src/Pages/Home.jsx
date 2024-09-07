import React from 'react'
import {Link} from "react-router-dom";
import Popular1 from '../component/Popular1';
import Popular2 from '../component/Popular2';
import Popular3 from '../component/Popular3';
import Popular4 from '../component/Popular4';
import Popular5 from '../component/Popular5';
import Best1 from '../component/Best1';
import Best2 from '../component/Best2';
import Best3 from '../component/Best3';
import Best4 from '../component/Best4';
import Best5 from '../component/Best5';


function Home() {
  return (
    <div className="w-full h-screen bg-[#FAF5FF] p-5">
    <div className='flex justify-between'>
      <div  className='p-2'>
        <h3 className='text-[#5B5B5E] text-xl font-medium'>Hello, Furqan</h3>
        <h1 className='text-[#323643] text-2xl font-bold'>What would you like to order?</h1>
        </div> 
      <div className=' pt-3'>
      <Link to="/Profile"> <img className='h-20 rounded-full border-2' src="https://i.pinimg.com/236x/6d/0e/05/6d0e052a59840858186a37ba74de24b3.jpg" alt="Profile" /></Link>
      </div>
    </div>

    
    <form class="max-w-md mx-auto pt-5">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-zinc-900 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-[#FFFFFF] dark:border-[#E6E6E6] dark:placeholder-black-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find for food..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </form>

    <div className='bg-[#98B867] mt-5 justify-between rounded-3xl flex mx-64'>
    <div className='text-white p-5 my-auto block'>
      <h1 className='font-semibold'>Refresh Your Day with Today's Special: Mojito!</h1>
      <h2 className='text-s'>Get your hands on refreshing Mojito — just a tap away</h2>
    </div>

    <div className='relative'>
      <img className='bottom-9 relative' src="https://i.ibb.co/Jq2XyJx/Mojito.png" alt="" />
    </div>
    </div>

    <div className='pt-5 p-2 font-semibold text-[#323643] text-2xl'>
      <h1>Popular Items</h1> 

      <div className='flex justify-between gap-5 pt-5 '>
        <Popular1 />
        <Popular2 />
        <Popular3 />
        <Popular4 />
        <Popular5 />
      </div>
    </div>

    <div className='pt-5 p-2 font-semibold text-[#323643] text-2xl'>
      <h1>Best Seller</h1> 

      <div className='flex justify-between gap-5 pt-5'>
        <Best1 />
        <Best2 />
        <Best3 />
        <Best4 />
        <Best5 />
      </div>
    </div>

    </div>
  )
}

export default Home