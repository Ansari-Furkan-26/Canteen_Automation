import React from 'react';

const Best2 = () => {
  return (
    <div className="relative w-80 rounded-3xl transition-transform transform hover:scale-95 overflow-hidden shadow-lg">
      {/* Background Image */}
      <img src="https://i.pinimg.com/564x/ee/da/72/eeda7228b2b93703b7e1320f9e9e9ba6.jpg"
        alt="Schezwan Fried Rice" className="w-full h-56 object-cover"/>

      {/* Overlay */}
      <div className="absolute inset-0 top-36 bg-white"></div>


      {/* Price */}
      <div className="absolute bottom-4 left-4 text-black ">
        <h1 className='text-2xl font-bold'>Huma Juice Center</h1>
        <h5 className='text-sm font-medium flex'>4.5 &nbsp;
          <img src="https://pngimg.com/uploads/star/star_PNG41474.png" className='h-4' alt="star" />&nbsp;
          <span className='text-[#9796A1]'>(100+)</span></h5>
      </div>
      
    </div>
  );
};

export default Best2;
