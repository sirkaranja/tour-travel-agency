import React from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'

export const Navbar = () => {
  return (
   <section className='navBarSection'>
    <div className="header">
      <div className="logoDiv">
        <a href="#" className="logo">
          <h1><SiYourtraveldottv className="icons" /></h1>
        </a>
      </div>
    </div>
   </section>
  )
}

export default Navbar
