import React from 'react'
import Nav from '../Components/Navbar'
import Footer from './Footer'
import dra from './threedragon.jpeg'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <Nav />
      <div style={{display:"flex",justifyContent:"center"}}>
        <div className='pol'>
          <h1 style={{color:"black"}}>CivicFix Developers:</h1>
          <ul>
            <li style={{ WebkitTextStroke: "2px black", letterSpacing: "10px" }}>Maatu Ravi</li>
            <li style={{ WebkitTextStroke: "2px black", letterSpacing: "10px" }}>Saara Paambu</li>
            <li style={{ WebkitTextStroke: "2px black", letterSpacing: "10px" }}>Poona mani</li>
          </ul>
        </div>
        <div>
          <img src={dra} className='do'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact