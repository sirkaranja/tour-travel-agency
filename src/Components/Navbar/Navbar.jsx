
import React, { useState } from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export const Navbar = () => {
//code to toggle show navbar
const [active, setActive] = useState('navBar')
const showNav =()=>{
  setActive('navBar activeNavbar')
}

//code to close navbar
const closeNav =()=>{
  setActive('navBar')
}

//  background to header

const [transparent, setTransparent]= useState('header')
const addBg =()=>{
  if(window.scrollY >= 10){

    setTransparent('header activeHeader')
  }
  else{
    setTransparent('header')
  }
}
window.addEventListener('scroll', addBg)

  return (
   <section className='navBarSection'>
    <div className={transparent}>
      
      <div className="logoDiv">
        <a href="#" className="logo">
          <h1 className='flex'><SiYourtraveldottv className="icons" />
          Tripero
          </h1>
        </a>
      </div>
      <div className={active}>
        <ul className="navlists flex">

          <li className="navItem">
            <a href="#" className="navLink">Home</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Products</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Resources</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Contact</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Blog</a>
          </li>
          <div className="headerBtns flex">
            <button className='btn loginBtn'>
              <a href="#">Login</a>
            </button>
            <button className='btn'>
            <a href="#">Sign Up</a>
            </button>
          </div>
        </ul>
        <div onClick={closeNav} className="closeNavbar">
          < AiFillCloseCircle  className='icons'/>
        </div>
      </div>
      <div onClick={showNav} className="toggleNavbar">
       <TbGridDots  className='icons'/>
      </div>
    </div>
   </section>
  )
}

export default Navbar
