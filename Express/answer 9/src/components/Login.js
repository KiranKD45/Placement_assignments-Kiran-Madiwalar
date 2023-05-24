import React from 'react';
import './Login.css'
import { Link} from "react-router-dom";


function Login() {

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login-logo"
                    src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' 
                />
            </Link>

            <div className='login-container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password'  />

                    <button type='submit' className='login-signInButton'>Sign In</button>
                </form>

                <button className='login-registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login