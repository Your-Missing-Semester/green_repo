import React from 'react';
import './login.css';
import gmail_icon from './gmail_icon.png';
import fb_icon from './fb_icon.png';
import apple_icon from './apple_icon.png';
import twtx_icon from './twtx_icon.webp';

export function LogInError() {
    return (
        <div className="loginGroup">
            <h1>SIGN IN</h1>
            <form>
                <label>Email</label>
                    <input className='inputBox' type="text" />
                    
                    <p className="errorMessage"> <div className='errorSymbol'></div>Invalid email</p>
                <label>Password</label>
                    <input className='inputBox' type="text" />
                    <p className="errorMessage"> Incorrect password </p>
                    <p className="longErrorMessage"> Your email and password do not match or 
                    you don't have an account with us. Please <span className='reset'>reset your password </span> 
                    or <span className='reset'>create a new account.</span></p>
                    <p className='passReset'>Forgot Password?</p>
                <button className='loginButton'>LOGIN</button>
                <button className='signupButton'>SIGN UP</button>
            </form>
            <p className='altLoginSubtext'><span>LOGIN WITH</span></p>
            <table>
                <tr className='icons'>
                   <img className='gmailLogo' src={gmail_icon} alt='gmail'></img>
                   <img className='fbLogo' src={fb_icon} alt='fb'></img>
                   <img className='twtLogo' src={twtx_icon} alt='twitter'></img>
                   <img className='appleLogo' src={apple_icon} alt='apple'></img>
                </tr>
            </table>
        </div>        
    )
}
