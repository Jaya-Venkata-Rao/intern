import React from 'react';
import Navbar from './Navbar';
import House from './house';

const Home = () => {
  return (
    <div>
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
      <House />
    </div>
  );
};

export default Home;