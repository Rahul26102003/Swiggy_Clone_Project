import React from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io" 
import { CiDiscount1 } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHelpBuoy } from "react-icons/io";
import { useState } from 'react';

export default function Header() {
    const [toggle,setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    return (
        <>
          <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu}
          style={{
            opacity : toggle ? 1 : 0, visibility : toggle ? 'visible' : 'hidden'
           }}
           ></div>
           <div onClick={(e) => {
            e.stopPropagation();
           }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
              style={{
                left : toggle ? '0%' : '-100%'
            }}
           >
            <div className='h-[30px] pt-5'>
            <input className='h-[30px] text-[30px] p-2' type="text" placeholder='Search for area, street no..' />
            </div>
           </div>
          <header className='p-[15px] shadow-xl'>
            <div className='max-w-[1500px] mx-auto flex items-center'>
                <div className='ms-[-25px] w-[110px]'>
                    <img src="images/logo.png" className='w-full' alt="" />
                </div>
                <div className='flex gap-1 font-[500]'>
                   <span className='font-bold border-b-[3px] border-black hover:text-[#fc8019] cursor-pointer hover:border-[#fc8019]'>Sector-65</span><h2></h2> Mohali, Punjab, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline text-[#fc8019] cursor-pointer'/>
                </div>
                <nav className='hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px]'>
                   <li className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'>
                    <IoIosSearch/>
                    Search
                   </li>
                   <li className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'> 
                    <CiDiscount1/>
                    Offer
                    <sup className='text-[#fc8019]'>New</sup>
                   </li>
                   <li className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'>
                    <IoIosHelpBuoy/>
                    Help
                   </li>
                   <li className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'>
                    <FaSignInAlt/>
                    Sign In
                   </li>
                   <li className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'>
                    <FaShoppingCart/>
                    Cart
                    <sup className='text-[#fc8019]'>(2)</sup>
                   </li>
                </nav>
            </div>
          </header>
        </>
    );
}