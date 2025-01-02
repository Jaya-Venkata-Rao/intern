import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);

  };
  return (
    <div className=" flex justify-between items-center  h-24 max-w-[1240px] mx-auto px-4 ">
      <h1 className="w-full text-3xl font-bold text-[green]">Education</h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="p-4">Rooms</li>
        <li className="p-4">Gallary</li>
        <li className="p-4">Contact</li>
        <li className="p-4"></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-full  border-r border-r-gray-900 bg-[#f04092] ease-in-out duration-500' : 'fixed left-[100%]'}>
        <h1 className="w-full p-4 text-3xl font-bold text-[white]">Hello, world</h1>

         <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Services</li>
            <li className="p-4 border-b border-gray-600">Rooms</li>
            <li className="p-4 border-b border-gray-600">Gallary</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
         </ul>
      </div>
    </div>
   
  )
}

export default Navbar
