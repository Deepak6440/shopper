import React from 'react'
import "../Pages/CSS/LoginSignup.css"

function LoginSignup() {
  return (
    <div className='loginsingup'>
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password'/>
            </div>
            <button>Continue</button>
            <div className="loginsignup-login">Already Have an account? <span> Login Here</span></div>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By contiuning, i agree to use the terms of use & privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup