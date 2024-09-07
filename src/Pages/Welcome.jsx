import React from "react";
import {Link} from "react-router-dom";

function Welcome() {

  return (
    <div className="w-full h-screen bg-[#FAF5FF] p-5 flex">
      <img className="rounded-3xl h-full" src="https://i.pinimg.com/564x/a5/84/72/a5847287e8fee4cd9b769b472022bcae.jpg" alt="Image" />
    
    <div className="my-auto mx-auto block ">
      <div className="text-center">
        <h1 className="text-[#534E55] text-4xl font-semibold mt-12">Discover your favorite meal here</h1>
        <p className="text-[#534E55] mt-12">Explore all the most exciting dishes based on your taste and dietary preferences.</p>
      </div>

      <div className="rounded-3xl mt-8 bg-[#F4F4F4] border-4 m-5">
      <Link to="/Register"><button className="bg-[#FFFFFF] rounded-2xl text-[#5B5B5E] py-7 w-1/2">Register</button></Link>
      <Link to="/Login"><button className=" text-[#979797] py-7 w-1/2">Sign in</button></Link>
      </div>
    </div>
      
    </div>    
  );
}

export default Welcome
