import React from 'react';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Verify from './Pages/Verify';
import Notification from './Pages/Notification';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import GeneralCanteen from './Pages/GeneralCanteen';

import LocomotiveScroll from 'locomotive-scroll';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Welcome /></>,
    },
    {
      path: "/Welcome",
      element: <><Welcome /></>,
    },
    {
      path: "/Register",
      element: <><Register/></>,
    },
    {
      path: "/Login",
      element: <><Login/></>,
    },
    {
      path: "/Verify",
      element: <><Verify/></>,
    },
    {
      path: "/Notification",
      element: <><Notification/></>,
    },
    {
      path: "/Home",
      element: <><Home/></>,
    },    
    {
      path: "/Profile",
      element: <><Profile/></>,
    },   
    {
      path: "/EditProfile",
      element: <><EditProfile/></>,
    },    
    {
      path: "/GeneralCanteen",
      element: <><GeneralCanteen/></>,
    },
  ]);

  return (
    <div className='w-full min-h-screen bg-[#F1F1F1] text-black'>
        <RouterProvider router={router} />
    </div>
    
  )
}

export default App;