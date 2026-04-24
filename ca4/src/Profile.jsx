import React from 'react'
import image from '../public/favicon.svg'

const Profile = () => {
  return (
    <div className='container'>
        <div style={{display:"flex",justifyContent:"center"}}>
            <img src={image}/>
        </div>
        <div>
            <h1>Kushal</h1>
            <h2>20231CSE0656</h2>
            <h3>6CSE02</h3>
        </div>
    </div>
  )
}

export default Profile
