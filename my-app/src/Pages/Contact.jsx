import React from 'react'
import Nav from '../Components/Navbar'
import Footer from './Footer'
import './Contact.css'
import loc from './location_.png'
import em from './email.png'
import ph from './phone.png'
const Contact = () => {
  return (
    <div>
      <Nav />
      <div style={{display:"flex",justifyContent:"center"}}>
        <div className='pol'>
            <div className='c-jk'>
                <h1 style={{color:"black",display:"flex",justifyContent:"center"}}>Get in Touch</h1>
                <div className='h-jk'>
                <label>Name</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <label>Message</label>
                <textarea></textarea>
                <button>Submit</button>
                </div>
            </div>
            <div className='d-jk'>
                <div style={{display:"flex",alignItems:"center",gap:"1vw"}}>
                <img src={loc} style={{height:"8vh",width:"4vw"}}/>
                <h2>Address</h2>
                </div>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;123,Vivekanandhar street,Dubai kurukusandhu,Dubai</p>
                <div style={{display:"flex",alignItems:"center",gap:"1vw"}}>
                <img src={ph} style={{height:"8vh",width:"4vw"}}/>
                <h2>Phone</h2>
                </div>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 1234567890</p>   
                <div style={{display:"flex",alignItems:"center",gap:"1vw"}}>
                <img src={em} style={{height:"8vh",width:"4vw"}}/>
                <h2>Email</h2>
                </div>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;civicfix@gmail.com</p>   
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact