import React from 'react';
import outImage from '../assets/out.jpg'; 

const House = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
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
            <h1>
               About us 
            </h1>
          <h1 className="text-5xl font-bold mb-4">
            The Best Holidays Start Here!
          </h1>
          <p className="text-gray-700">
            Embark on a tranquil journey at our Kingsukh Guest House Enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi
            Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in
            the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis.
            Your ideal retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger
            long after your stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default House;