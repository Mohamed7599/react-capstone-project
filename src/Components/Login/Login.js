import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className='form-wrapper'>
                <div className='login-text'>
                    <h1>Login</h1>
                    <div className="login-text1">
                        <p>Don't have an account?</p>
                        <span
                        ><Link to="/signup" style={{ color: "#2190ff" }}>
                                Sign Up</Link
                            ></span
                        >
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}" name="email" required id="email" className='form-control' />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" required name="password" id="password" className='form-control' />
                    </div>
                    <div className='login-btn-group'>
                        <button type="submit" className="form-login-btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



