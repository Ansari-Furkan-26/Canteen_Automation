import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import { Player } from '@lottiefiles/react-lottie-player'; // Import Lottie player

const OrderDetail = () => {
  const [showModal, setShowModal] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false); // To show celebration animation
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Example data for the ordered items
  const orderedItems = [
    {
      id: 1,
      name: 'Egg Roll',
      price: 20.00,
      quantity: 2,
      reviews: 4.8,
      imageUrl: 'https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg', // Replace with the actual image URL
    },
    {
      id: 2,
      name: 'Aloo Tikki Roll',
      price: 25.00,
      quantity: 1,
      reviews: 4.5,
      imageUrl: 'https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg', // Replace with the actual image URL
    }
  ];

  // Total price calculation
  const totalPrice = orderedItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleSuccessfulClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmitFeedback = () => {
    setFeedbackSubmitted(true);
    setShowModal(false);
    setShowAnimation(true);

    // Automatically hide the animation after 3 seconds
    setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full h-screen bg-[#FAF5FF]">
      <div className="w-full p-4">
        <div className='text-xl p-5'>
          <Link to="/Cart"><FontAwesomeIcon icon={faAngleLeft} /></Link>
          <center className='text-bg-[#534E55] font-bold'>Order detail</center>
        </div>

        <p className="text-center font-semibold text-2xl mt-1">Thank You for Your Order!</p>
        <p className="text-center text-sm text-gray-500 mt-1">Your payment has been successfully processed.</p>
        
        <div className='p-12'>
          <h3 className="font-semibold text-2xl mb-2">Ordered Items</h3>

          {orderedItems.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-32 h-20 object-cover rounded-lg"/>
                <div className="ml-4">
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.reviews} reviews</p>
                  <p className="text-lg font-semibold text-red-500">{item.price.toFixed(2)} Rs</p>
                </div>
              </div>
              <p className="font-semibold">{item.quantity}</p>
            </div>
          ))}

          {/* Booking ID and Time */}
          <div className="mt-4">
            <p className="text-lg">Booking ID: <span className="font-semibold">#1100919544</span></p>
            <div className="flex justify-between mt-2">
              <p className="text-sm">08/08/2024</p>
              <p className="text-sm">10:50</p>
            </div>
          </div>

          {/* Total and Successful button */}
          <div className="mt-6">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Total</p>
              <p className="text-xl font-semibold">{totalPrice} Rs</p>
            </div>
            <button
              className="bg-black text-white py-2 px-10 rounded-lg mt-4"
              onClick={handleSuccessfulClick}
            >
              Successful
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button className="absolute top-2 right-2 text-black" onClick={closeModal}>
              &times;
            </button>
            <h3 className="text-lg font-semibold text-center mb-2">Feedback</h3>
            <p className="text-center text-sm mb-4">
              How are you feeling? Your input is valuable in helping us better understand your needs and tailor our service accordingly.
            </p>
            <div className="flex justify-around mb-4">
              <span className="text-2xl">😡</span>
              <span className="text-2xl">😐</span>
              <span className="text-2xl">🙂</span>
              <span className="text-2xl">😄</span>
            </div>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-lg"
              rows="3"
              placeholder="Add a comment... it will not stored"
            ></textarea>
            <button
              className="w-full bg-black text-white py-2 rounded-lg mt-4"
              onClick={handleSubmitFeedback}
            >
              Submit Now
            </button>
          </div>
        </div>
      )}

      {/* Celebration Animation */}
      {/* {showAnimation && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Player autoplay loop={false} src="https://lottie.host/b104e9fc-2e53-43b5-8392-8ab317b3c19e/AHeeSOeUxp.json" // Use the Lottie animation URL or file path
            style={{ height: '300px', width: '300px' }}
          >
          </Player>
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

        </div>
      )} */}
    </div>
  );
};

export default OrderDetail;
