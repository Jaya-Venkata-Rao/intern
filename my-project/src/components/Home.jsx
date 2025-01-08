import React from 'react';
import Navbar from './Navbar';
import House from './house';

const Home = () => {
  return (
    <div>
      {/* Background image section with Navbar */}
      <div className="w-full min-h-[120vh] bg-cover bg-center bg-[url('assets/ayodhya.webp')] relative">
        <Navbar />
        <div className="px-6 py-28">
          <h3 className='text-center text-2xl py-10 text-white/75'>Simple - Unique - Friendly</h3>
          <h1 className='text-center text-white text-7xl font-bold'>
            Make Yourself At Home <br /> In Our{' '}
            <span className="text-pink-600">Guest House</span>.
          </h1>
        </div>
      </div>

      {/* White background div with button */}
      <div className="w-[90%] bg-white py-10 rounded-lg shadow-lg mt-[-50px] relative z-10 mx-auto">
        <div className="container mx-auto px-4 flex justify-center">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>

      {/* House component */}
      <House />
    </div>
  );
};

export default Home;