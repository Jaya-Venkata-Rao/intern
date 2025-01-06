import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-full max-w-[1240px] mx-auto px-4 py-4 relative">
      {/* Static Pink Background for Mobile */}
      <div className="block md:hidden fixed top-0 left-0 w-full h-16 bg-[#e82d8d] z-40">
        <div className="flex justify-between items-center h-full max-w-[1240px] mx-auto px-4">
          <h1 className="text-xl font-bold text-white">
            Kingsukh <br /> Guest House
          </h1>
          <div onClick={handleNav} className="cursor-pointer z-50">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <h1 className="hidden md:block w-full text-xl font-bold text-white">
        Kingsukh <br /> Guest House
      </h1>
      <ul className="hidden md:flex text-white">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="p-4">Rooms</li>
        <li className="p-4">Gallery</li>
        <li className="p-4">Contact</li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`${
          nav
            ? 'fixed top-0 left-0 w-full h-[75%] bg-[#d40080]/85 text-center ease-in-out duration-500'
            : 'fixed top-[-100%]'
        } md:hidden z-30`}
      >
        
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Services</li>
          <li className="p-4 border-b border-gray-600">Rooms</li>
          <li className="p-4 border-b border-gray-600">Gallery</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;