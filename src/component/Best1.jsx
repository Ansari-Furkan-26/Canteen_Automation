import React from 'react';
import {Link} from "react-router-dom";

const Best1 = () => {
  return (
    <div className="relative w-80 rounded-3xl transition-transform transform hover:scale-95 overflow-hidden shadow-lg">
      {/* Background Image */}
      <Link to='/GeneralCanteen'><img src="https://i.pinimg.com/564x/87/25/c4/8725c416e9f93b663cc8f4e6b98f73ff.jpg"
        alt="Schezwan Fried Rice" className="w-full h-56 object-cover"/></Link>

      {/* Overlay */}
      <div className="absolute inset-0 top-36 bg-white"></div>


      {/* Price */}
      <div className="absolute bottom-4 left-4 text-black ">
        <h1 className='text-2xl font-bold'>Huma Caterers</h1>
        <h5 className='text-sm font-medium flex'>4.5 &nbsp;
          <img src="https://pngimg.com/uploads/star/star_PNG41474.png" className='h-4' alt="star" />&nbsp;
          <span className='text-[#9796A1]'>(100+)</span></h5>
      </div>

      
      
    </div>
  );
};

export default Best1;
