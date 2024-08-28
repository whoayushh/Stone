import React from 'react'
import { MdOutlineContactPhone } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='bg-slate-200 h-10'>
        
        <ul className="flex flex-row justify-between w-full mr-10">
          <li id ="logo" className='text-3xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/">Stone seller</Link></li>

          <div className="flex flex-row gap-10 mr-4 ">
              
              <li className="flex hover:scale-105 items-center cursor-pointer"><Link  to="/about" className='flex items-center'><FcAbout size="1.5rem" />&nbsp;About us</Link></li>
              <li className="flex hover:scale-105 items-center cursor-pointer"><Link  to="/find" className='flex items-center'><FaMapMarkedAlt size="1.5rem" />&nbsp;Find us</Link></li>
              <li className="flex hover:scale-105 items-center cursor-pointer"><Link  to="/login" className='flex items-center'><MdLogin size="1.5rem" />&nbsp;Login/ Register</Link></li>
              
          </div>
        </ul>
        </div>
    </div>
  )
}

export default Navbar