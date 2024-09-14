import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const RecentOrder = () => {
  // Example data for the ordered items
  const orderedItems = [
    {
      id: 1,
      name: 'Egg Roll',
      date: '9/9/24',
      quantity: 2,
      imageUrl: 'https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg',
    }
  ];

  return (
    <div className="min-h-screen w-full h-screen bg-[#FAF5FF]">
      <div className="w-full p-4">
        {/* Header */}
        <div className='text-xl p-5'>
          <Link to="/Profile"><FontAwesomeIcon icon={faAngleLeft} /></Link>
          <center className='text-bg-[#534E55] font-bold'>Order detail</center>
        </div>

        {/* Ordered Items */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Ordered Items</h2>
          {orderedItems.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              {/* Image and details */}
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm font-medium text-[#7D7D7D] mt-2">Paid on {item.date}</p>
                </div>
              </div>

              {/* Quantity */}
              <Link to="/OrderDetail"><FontAwesomeIcon icon={faAngleRight} /></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
