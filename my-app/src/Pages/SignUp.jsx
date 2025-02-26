import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
const SignUp = () => {
  return (
    <div className='hi'>
      <div className="sign">
        <div className="f">
          <h1 style={{color:"black"}}>Signup</h1>
        </div>
        <br />
        <form>
          <input className="in" type="text" placeholder="Name" required /><br /><br />
          <input className="in" type="email" placeholder="Email" required /><br /><br />
          <input className="in" type="password" placeholder="Password" required /><br /><br />
          <input className="in" type="password" placeholder="Confirm Password" required /><br /><br />
          
          <p>You already have an account? Just <Link to="/" style={{textDecoration:"none"}}>login</Link></p>
          
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms"> I agree to the <span style={{ color: 'blue' }}>terms and conditions</span></label><br /><br />
          
          <input className="but"style={{width:"22vw"}} type="submit" value="Signup" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;