import React from 'react'
import { Link } from 'react-router-dom'
import './Sign_Up.css'
export default function Sign_Up() {
    return (
        <>
            <div className="container" style={{ marginTop: "5%" }}>
                <div className='form-wrapper'>
                    <div className='signup-text'>
                        <h1>Sign Up</h1>
                        <div className="signup-text1" style={{ textAlign: "left" }}>
                            <p>Already a member?</p>
                            <span
                            ><Link to="/login" style={{ color: "#2190ff" }}>
                                    Login</Link
                                ></span
                            >
                        </div>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <label for="role">Role:</label>
                            <input type="text" required name="role" id="role" className='form-control' />
                        </div>
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="text" required name="name" id="name" className='form-control' />
                        </div>
                        <div className="form-group">
                            <label for="number" >Phone number:</label>
                            <input type="text" required pattern="[0-9]{10}" title="Please enter a 10-digit phone number"
                                name="number" id="number" className='form-control' />
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}" required name="email" id="email" className='form-control' />
                        </div>
                        <div className="form-group">
                            <label for="password">Password:</label>
                            <input type="password" required name="password" id="password" className='form-control' />
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="signup-btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="signup-btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}


