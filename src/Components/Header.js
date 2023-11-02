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
          <ul id="MenuItems" className='text-white '>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/Product'}>Products</NavLink> </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <NavLink>Account</NavLink>
            </li>
            <li> <NavLink to={'/Login'}>user</NavLink> </li>
            <li> <NavLink to={'/AdminLogin'}>Admin</NavLink> </li>
            <li><NavLink to={'/Product'}><img className='m-3' src="https://i.ibb.co/PNjjx3y/cart.png" alt width="30px" height="30px" /></NavLink></li>
            <li><NavLink to={'/Login'}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg></NavLink></li>
          </ul>
        </nav>
       
        
        <img src="https://i.ibb.co/6XbqwjD/menu.png" alt className="menu-icon" onclick="menutoggle()" />
      </div>
    </div>
  </div>
  )
}

export default Header
