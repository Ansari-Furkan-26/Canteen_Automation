import React from 'react';

const Popular4 = () => {
  return (
    <div className="relative w-80 rounded-3xl overflow-hidden transition-transform transform hover:scale-95 shadow-lg">
      {/* Background Image */}
      <img src="https://i.pinimg.com/564x/fe/6e/b7/fe6eb7893435d993b0311852bec35347.jpg"
        alt="Schezwan Fried Rice" className="w-full h-80 object-cover"/>

    {/* Overlay */}
    <div className="absolute inset-0 top-26 bg-gradient-to-t from-black via-transparent to-white-0"></div>


      {/* Content */}
      <div className="absolute top-4 left-4 text-white">
        <h1 className="text-2xl font-medium">Bread Pakora</h1>
      </div>

      {/* Price */}
      <div className="absolute bottom-16 left-4 text-white text-2xl font-medium">15 &#x20b9;</div>

      {/* Buy Now Button */}
      <div className="absolute bottom-4 left-4">
        <button className="bg-[#BDBDBD] opacity-50 text-black font-bold text-lg py-2 px-6 rounded-full">Buy Now</button>
      </div>

      {/* Favorite Heart Icon (Placeholder) */}
        <div className="absolute bottom-4 right-4">
        <button className="text-white">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>

        </button>
      </div>
      
    </div>
  );
};

export default Popular4;
