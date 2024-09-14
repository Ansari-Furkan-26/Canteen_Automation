import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function GeneralCanteen() {
  const [activeSection, setActiveSection] = useState('orderOnline');
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedReview, setEditedReview] = useState('');

  const showOrderOnline = () => setActiveSection('orderOnline');
  const showReview = () => setActiveSection('review');

  const handleAddReview = () => {
    if (newReview.trim() === '') return;
    setReviews([...reviews, newReview]);
    setNewReview('');
  };

  const handleEditReview = (index) => {
    setEditingIndex(index);
    setEditedReview(reviews[index]);
  };

  const handleSaveEdit = () => {
    if (editedReview.trim() === '') return;
    const updatedReviews = reviews.map((review, index) =>
      index === editingIndex ? editedReview : review
    );
    setReviews(updatedReviews);
    setEditingIndex(null);
    setEditedReview('');
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  // State to manage the count
  const [count, setCount] = useState(0);

  // Increment count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrement count
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="w-full h-screen bg-[#FAF5FF] text-white">
      <div className="bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] h-96 bg-cover bg-center bg-no-repeat">
        <div className='text-xl p-10'>
          <Link to="/Home">
            <FontAwesomeIcon icon={faAngleLeft} className='bg-white text-black p-3 shadow-lg rounded-xl' />
          </Link>
          <center className='text-3xl'>Huma Caterers</center>
          <p className="text-center mt-12">Explore all the most exciting dishes based on your taste and dietary preferences.</p>
        </div>
      </div>

      <div className='bg-[#FAF5FF]'>
        <div className='flex justify-between py-5 px-14'>
          <h1 
            className={`text-[#323643] cursor-pointer ${activeSection === 'orderOnline' ? 'text-2xl font-bold' : ''}`}
            onClick={showOrderOnline}
          >
            Order Online
          </h1>
          <h1 
            className={`text-[#323643] text-xl cursor-pointer ${activeSection === 'review' ? 'text-2xl font-bold' : ''}`}
            onClick={showReview}
          >
            Review
          </h1>
        </div>

        {/* Conditionally render the "Order Online" section */}
        {activeSection === 'orderOnline' && (
          <>
           <div className='bg-[#FAF5FF] py-5 px-14'>
            <div className='px-40 mt-5 flex'>
              <img className='h-36 rounded-3xl' src="https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg" alt="" />
              
              <div className='flex w-full justify-between'>
              <div className='my-auto block px-10'>
              <h1 className='font-semibold text-[#323643] text-xl'>Egg Roll</h1>
              <h2 className='font-semibold text-[#FE724C] text-lg'>25&#x20b9;</h2>
              <p className='text-[#7F7D92] mt-5'>Try our Egg Roll—crispy, savory perfection in every bite!</p>
              </div>
              <div className='my-auto pl-2 rounded-full flex items-center text-whihte bg-[#FE724C]'>
                <button onClick={handleDecrement} className='p-2 text-xl'>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className='mx-4 text-xl'>{count}</span>
                <button onClick={handleIncrement} className='p-2 text-xl px-3'>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>    
            </div>
            </div>

            <div className='px-40 mt-5 flex'>
              <img className='h-36 rounded-3xl' src="https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg" alt="" />
              
              <div className='flex w-full justify-between'>
              <div className='my-auto block px-10'>
              <h1 className='font-semibold text-[#323643] text-xl'>Egg Roll</h1>
              <h2 className='font-semibold text-[#FE724C] text-lg'>25&#x20b9;</h2>
              <p className='text-[#7F7D92] mt-5'>Try our Egg Roll—crispy, savory perfection in every bite!</p>
              </div>
              <div className='my-auto pl-2 rounded-full flex items-center text-whihte bg-[#FE724C]'>
                <button onClick={handleDecrement} className='p-2 text-xl'>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className='mx-4 text-xl'>{count}</span>
                <button onClick={handleIncrement} className='p-2 text-xl px-3'>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>    
            </div>
            </div>

            <div className='px-40 mt-5 flex'>
              <img className='h-36 rounded-3xl' src="https://i.pinimg.com/564x/2e/bc/ef/2ebcef9a393d0504293214c5ed256887.jpg" alt="" />
              
              <div className='flex w-full justify-between'>
              <div className='my-auto block px-10'>
              <h1 className='font-semibold text-[#323643] text-xl'>Egg Roll</h1>
              <h2 className='font-semibold text-[#FE724C] text-lg'>25&#x20b9;</h2>
              <p className='text-[#7F7D92] mt-5'>Try our Egg Roll—crispy, savory perfection in every bite!</p>
              </div>
              <div className='my-auto pl-2 rounded-full flex items-center text-whihte bg-[#FE724C]'>
                <button onClick={handleDecrement} className='p-2 text-xl'>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className='mx-4 text-xl'>{count}</span>
                <button onClick={handleIncrement} className='p-2 text-xl px-3'>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>    
            </div>
            </div>
            
           </div>
          </>
        )}

        {/* Conditionally render the "Review" section */}
        {activeSection === 'review' && (
          <div className='px-40 mt-5'>

            {/* Add new review input */}
            <div className='mt-5'>
              <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)} rows="4"
                className='w-full p-2 border border-[#ccc] shadow-sm rounded-lg text-[#323643] h-10' placeholder='Write your review...'/>
              <button onClick={handleAddReview} className='mt-2 px-4 shadow-lg py-2 bg-[#FE724C] text-white rounded-lg'>Add Review</button>
            </div>

            {/* List reviews */}
            <div className='mt-5'>
              {reviews.map((review, index) => (
                <div key={index} className='mb-4 p-4 flex text-black border rounded-lg'>
                    <>
                      <p>{review}</p>
                    </>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneralCanteen;
