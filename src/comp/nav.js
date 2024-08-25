import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLogin } from "react-icons/md";

import './nav.css'

const Nav = () => {
  return (
    <div className='header'> 
    <div className='top_header'>
    <div className='icon'>
    <MdLocalShipping />  </div>
    <div className='info'>
        <p>Free shipping when  Shopping upto 100 $</p>
                  
    </div>
    <div className='mid_header'>
    <div className='logo'>
        <img src='images/logo.jpg' alt="Logo"></img>
        </div>
        <div className='searchbox'>
            <input type="text" value='' placeholder='search here .. '>
            </input>
            <button><AiOutlineSearch />            </button>

        </div>
<div className='user'>
    <div className='icon'>
    <MdLogin />


    </div>
    <div className='btn'>
        <button>Login</button>
    </div>

</div>
    </div>

    </div>
     </div>
  );
}


export default Nav