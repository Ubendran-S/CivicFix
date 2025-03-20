import React, { useState } from 'react';
import Nav from '../Components/Navbar';
import './Report.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const Report = () => {
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [mobile,setMobile]=useState("");
    const [issue,setIssue]=useState("");
    const [issuename,setIssuename]=useState("");
    const navigate =useNavigate("");
    console.log(name)
    console.log(address)
    console.log(mobile)
    console.log(issue)
    console.log(issuename)
  return (
    <div  style={{display:"flex",flexDirection:"column"}}>
        <Nav/>
        <div className='main' >
          <div className='one'>
            <h1 style={{color:"rgb(0,52,105)"}}>Report an Issue</h1><hr/>
            <label htmlFor="">Name of the Reporter:</label>
            <input type='text' placeholder={"Type your name here"} onChange={(e)=>(setName(e.target.value))}></input>
            <label htmlFor="">Address of the Reporter:</label>
            <input type='text' placeholder={"Enter your address"}  onChange={(e)=>(setAddress(e.target.value))} style={{display:'flex',height:''}}></input>
            <label htmlFor="">Mobile Number of the Reporter:</label>
            <input type="text" placeholder={"Enter your mobile number"}onChange={(e)=>(setMobile(e.target.value))}/>
            <label htmlFor="sel">Type of Issue:</label>
            <select className="sel" onChange={(e) => setIssue(e.target.value)} >
                <option value="">-- Select Issue Type --</option>
                <option value="pothole">Pothole</option>
                <option value="streetlight">Broken Streetlight</option>
                <option value="graffiti">Graffiti</option>
                <option value="trash">Illegal Dumping</option>
                <option value="sidewalk">Damaged Sidewalk</option>
                <option value="other">Other</option>
            </select>
            <label htmlFor=''>Title of the Issue:</label>
            <input type='text' placeholder={"Brief description of the issue"}onChange={(e)=>(setIssue(e.target.value))}></input>
            <label htmlFor="">Description of the issue:</label>
            <textarea placeholder='Enter the description of the issue' style={{height:"100px"}}onChange={(e)=>(setIssue(e.target.value))}></textarea>
            <label htmlFor="">Pin the location in the map:</label>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe 
                  class="gmap_iframe" 
                  width="100%" 
                  height="400" 
                  frameborder="0" 
                  scrolling="no" 
                  marginheight="0" 
                  marginwidth="0" 
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=University of Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed">
                </iframe>
              </div>
            </div>
            <label htmlFor="">Issue Location:</label>
            <input type='text' placeholder={"Enter the location of issue spoted"} style={{display:'flex',height:''}}></input>
            <label >Upload images of the reported issues:</label>
            <input type='file'></input>
            <button style={{marginBottom:"30px"}}type='submit'onClick={()=>{navigate('/thankyou')}}>Submit Report</button>
          </div>
        </div>
          <Footer/>
    </div>
  )
}

export default Report