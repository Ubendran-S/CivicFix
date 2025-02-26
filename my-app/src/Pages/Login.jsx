import React from 'react'
import { useState } from 'react';
import './Login.css'
import logo from './logo.png';
import {Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate =useNavigate()
  const handleLogin = () => {
    if((email==="ubendran1611@gmail.com"&&password==='ubendran1611')||(email==="srimanmani16@gmail.com"&& password==="sriman16")||(email==="rdmusic@gmail.com" &&password==="rdmusic16")){
      navigate('/home')
    }
    else{
      document.getElementById("loki").innerHTML="User not found!!";
    }
  };

  return (
    <div className='con'>
      <div className='container'>
      <div className='cap'>
        <h1 style={{ color:"white",fontSize:"50px" }}>
        <img src={logo} alt="" style={{ height: "60px" }} />
        CivicFix
        </h1>
          <div className='figo'>
          <h1>Your neighborhood, your responsibility - Login to make a difference!</h1>
          </div>
      </div>
        <div className='login'>
        <div className="fp" style={{borderRadius:"10px"}}>
          <h1 style={{color:"black",fontSize:"xx-large"}}>Welcome Back To CivicFix</h1><hr />
        </div>
        <br />
        <div>
          <input className="mail" onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Username or Email" required />
          <br /><br />
          <input className="pass" onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required />
          <br /><br />
          <Link style={{ color: "blue", fontSize: "medium" }} >
            Forget password?
          </Link>
          <br /><br />
          <p>You don't have an account?</p>
          <Link to='/signup'style={{ color: "blue", fontSize: "medium" }} >
            SignUp
          </Link>
          <p id="loki" style={{color:"red"}}></p>
          <br />
          <button className="but" onClick={handleLogin}>Login</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
