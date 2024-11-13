import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Login")
    return (
        <div className='login-popup'>

            <from className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>

                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='your name' required />
                    }
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create acccount" : "Login"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Containing, i agree to the terms of use and pravacy policy.</p>
                </div>


                {currentState === "Login" ?
                    <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Clic Here</span></p>
                    : <p>Alerdy have an account? <span onCanPlay={()=>setCurrentState("Login")}>Login Here</span></p>

                }
            </from>
        </div>
    )
}

export default LoginPopup
