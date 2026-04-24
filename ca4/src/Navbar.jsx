import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <NavLink to={"/"} className={({isActive})=>isActive?"aa isA":"aa"}>Home</NavLink>
      <NavLink to={"/profile"} className={({isActive})=>isActive?"aa isA":"aa"}>Profile</NavLink>
      <NavLink to={"/contact"} className={({isActive})=>isActive?"aa isA":"aa"}>Contact</NavLink>
    </div>
  )
}

export default Navbar
