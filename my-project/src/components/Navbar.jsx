import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-full max-w-[1240px] mx-auto px-4 py-4 relative">
      <h1 className="w-full text-xl font-bold text-[white]">
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

      {/* Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-50">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav
            ? 'fixed top-0 left-0 w-full h-screen bg-[#d40080] md:bg-[#f01880] ease-in-out duration-500'
            : 'fixed top-[-100%]'
        }`}
      >
        <h1 className="w-full p-4 text-xl font-bold text-[white] bg-[#d40080] md:bg-[#f01882]">
          Kingsukh <br /> Guest House
        </h1>
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
