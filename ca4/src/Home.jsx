import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <h1>Studente Dash Boards Home pages</h1>
        <p>Save your student detailsherer</p>
        <NavLink to={"/Profile"} className='button'>Profile</NavLink>
    </div>
  )
}

export default Home
