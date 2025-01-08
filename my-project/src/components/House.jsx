import React from 'react';
import outImage from '../assets/out.jpg';

const House = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8 pt-20">
      <div className="flex flex-col md:flex-row items-center max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image on the top (mobile) or left (desktop) */}
        <div className="w-full md:w-1/2">
          <img
            src={outImage}
            alt="Kingsukh Guest House"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the bottom (mobile) or right (desktop) */}
        <div className="w-full text-2xl md:w-1/2 p-8">
          <h1>About us</h1>
          <h1 className="text-5xl font-bold mb-4 mt-4">
            The Best Holidays Start Here!
          </h1>
          <p className="text-gray-700 mb-6 mt-8"> {/* Added mb-6 for margin-bottom */}
            Embark on a tranquil journey at our Kingsukh Guest House Enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi
            Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in
            the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis.
            Your ideal retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger
            long after your stay.
          </p>
          <div className='text-xl font-bold text-blue-800'>
          <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
          </div>
          <h6 className='text-blue-500 font-bold text-xl'>
          <a href="tel:+919007062180"> Contact us: +91 9007062180 </a>
          </h6>
          
          {/* Centered Button */}
          <div className="flex justify-center"> {/* Flex container to center the button */}
            <button className="bg-pink-600 text-white mt-6 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition duration-300 ">
              Book Now 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;