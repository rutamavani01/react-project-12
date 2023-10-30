import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <NavLink><img src="https://i.ibb.co/kDVwgwp/logo.png" alt="RedStore" width="125px" /></NavLink>
        </div>
        <nav>
          <ul id="MenuItems" className='text-white'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/Product'}>Products</NavLink> </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="account.html">Account</a></li>
          </ul>
        </nav>
        <a href="cart.html"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt width="30px" height="30px" /></a>
        <img src="https://i.ibb.co/6XbqwjD/menu.png" alt className="menu-icon" onclick="menutoggle()" />
      </div>
    </div>
  </div>
  )
}

export default Header
