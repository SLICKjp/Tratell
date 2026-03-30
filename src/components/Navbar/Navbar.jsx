import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <ul className='nav-links-one'>
           <li>About Us</li>
           <li>Our Offer</li>
           <li>Customer Protection</li>
        </ul>
        <div className='navbar-logo'>
            TRATTEL
        </div>
         <ul className='nav-links-two'>
           <li>Contact</li>
           <li>Profile</li>
           
        </ul>
    </nav>
  )
}

export default Navbar