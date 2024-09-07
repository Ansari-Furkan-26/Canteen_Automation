import React from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare  } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'; 
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return (
    <div className="w-full h-screen bg-[#FAF5FF] p-5">
        <div className='text-xl p-5'>
            <Link to="/Home"><FontAwesomeIcon icon={faAngleLeft} /></Link>
            <center className='text-bg-[#534E55]'>My Profile</center>
        </div>

        {/* User */}
        <div className='p-10 flex justify-between'>
            <div className='mx-12 flex gap-5 '>
            <img className='h-20 rounded-full my-auto block border-2' src="https://i.pinimg.com/236x/6d/0e/05/6d0e052a59840858186a37ba74de24b3.jpg" alt="Profile" />
            <div className='my-auto block'>
                <h1 className='font-bold text-[#000000] text-2xl '>Furqan Ansari</h1>
                <h5 className='text-[#5B5B5E]'>Developer</h5>
            </div>
            <div className='my-auto block'>
            <Link to="/EditProfile"><FontAwesomeIcon icon={faPenToSquare} className='text-[#AAB9C5] hover:text-sky-900'/></Link>
            </div>
            </div>

            <div className='px-24'>
                <h1 className='text-[#AAB9C5]'>My status</h1>
                <div className='mt-4 flex gap-12'>
                    <div className='bg-[#0C0C0C] text-[#FFFFFF] hover:scale-95 py-2 px-10 rounded-3xl shadow-lg'><FontAwesomeIcon icon={faMars} style={{color:"#FFF"}} /> Male</div>
                    <div className='bg-[#EFDAC1] text-[#0C0C0C] hover:scale-95 py-2 px-10 rounded-3xl shadow-lg'><FontAwesomeIcon icon={faGraduationCap} /> Student</div>
                    <div className='bg-[#47FF9B] text-[#404040] hover:scale-95 py-2 px-10 rounded-3xl shadow-lg'><FontAwesomeIcon icon={faBurger} />  Foodie</div>
                </div>
            </div>
        </div>

        {/* Menu */}
        <div className='px-14 mt-10'>
            <div className='bg-[#FFFFFF] p-1 my-1 border cursor-pointer	rounded-xl flex justify-between shadow-lg hover:bg-[#DADADA] hover:border-2'>
                <div className='flex gap-5 '>
                    <FontAwesomeIcon icon={faSpinner} className='py-2 pl-5'/><h1 className='my-auto block'>Recent Order</h1>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='p-2'/>
            </div>
            <div className='bg-[#FFFFFF] p-1 my-1 border cursor-pointer	rounded-xl flex justify-between shadow-lg hover:bg-[#DADADA] hover:border-2'>
            <div className='flex gap-5 '>
                <FontAwesomeIcon icon={faCartShopping} className='py-2 pl-5'/> <h1 className='my-auto block'>My Cart</h1>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='p-2'/>
            </div>
            <div className='bg-[#FFFFFF] p-1 my-1 border cursor-pointer	rounded-xl flex justify-between shadow-lg hover:bg-[#DADADA] hover:border-2'>
            <div className='flex gap-5 '>
                <FontAwesomeIcon icon={faBell} className='py-2 pl-5'/><h1 className='my-auto block'>Notification</h1>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='p-2'/>  
            </div>
            <div className='bg-[#FFFFFF] p-1 my-1 border cursor-pointer rounded-xl flex justify-between shadow-lg hover:bg-[#DADADA] hover:border-2'>
            <div className='flex gap-5 '>
                <FontAwesomeIcon icon={faGlobe} className='py-2 pl-5' /><h1 className='my-auto block'>Language</h1>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='p-2'/>
            </div>
            <div className='bg-[#FFFFFF] p-1 my-1 border cursor-pointer	rounded-xl flex justify-between shadow-lg hover:bg-[#DADADA] hover:border-2'>
            <div className='flex gap-5 '>
                <FontAwesomeIcon icon={faCircleInfo} className='py-2 pl-5'/><h1 className='my-auto block'>Help & FAQs</h1>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='p-2'/>
            </div>
            <div className='bg-[#FFFFFF] p-1 my-1 border cursor-pointer	rounded-xl flex justify-between shadow-lg hover:bg-[#DADADA] hover:border-2'>
            <div className='flex gap-5 '>
                <FontAwesomeIcon icon={faNewspaper} className='py-2 pl-5'/><h1 className='my-auto block'>Terms & Condition</h1>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className='p-2'/>
            </div>
        </div>

        {/* Account Detail */}
        <div className='text-[#AAB9C5] flex justify-between py-10 px-10 text-bottom'>
            <h1>My Account</h1>
            <p>Created Date: 07-09-2024</p>
        </div>
    </div>
  )
}

export default Profile;