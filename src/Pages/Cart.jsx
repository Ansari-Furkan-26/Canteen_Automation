import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  // Initial state of cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Egg Roll',
      price: 20.00,
      quantity: 2,
      reviews: 4.8,
      imageUrl: 'https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Aloo Tikki Roll',
      price: 25.00,
      quantity: 1,
      reviews: 4.5,
      imageUrl: 'https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg', // Replace with actual image URL
    }
  ]);

  // Function to increase quantity
  const increaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Function to decrease quantity
  const decreaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen w-full h-screen bg-[#FAF5FF]">
      <div className="w-full p-4">
      <div className='text-xl p-5'>
            <Link to="/Home"><FontAwesomeIcon icon={faAngleLeft} /></Link>
            <center className='text-bg-[#534E55] font-bold'>My Cart</center>
      </div>
        
        <div className='p-12'>
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img src={item.imageUrl} alt={item.name} className="w-32 h-20 object-cover rounded-lg"/>
              <div className="ml-4">
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-ss text-gray-500">{item.reviews} reviews</p>
                <p className="text-lg font-semibold text-red-500">{item.price.toFixed(2)} Rs</p>
              </div>
            </div>

            <div className="flex items-center my-auto px-1 bg-red-500 text-white rounded-full ">
              <button className="px-2 py-1 text-lg" onClick={() => decreaseQuantity(item.id)}>
              <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className="mx-4 text-lg">{item.quantity}</span>
              <button className="px-2 py-1 text-lg" onClick={() => increaseQuantity(item.id)}>
              <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        ))}
        
        <div className="mt-24">
          <p className="text-sm text-[#5B5B5E]">Note: No Order Cancellations After Confirmation</p>

          <div className="flex justify-between mt-4">
            <p className="text-md font-semibold">Sub total</p>
            <p className="text-md font-semibold">{calculateTotal()} Rs</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-md font-semibold">Taxes & Fees</p>
            <p className="text-md font-semibold">0.00 Rs</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-xl font-semibold">Total</p>
            <p className="text-xl font-semibold">{calculateTotal()} Rs</p>
          </div>
          <Link to='/OrderDetail'><button className="bg-black text-white py-2 px-10 rounded-lg mt-4">Checkout</button></Link>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
