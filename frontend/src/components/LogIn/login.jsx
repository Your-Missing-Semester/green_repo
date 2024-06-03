import React from 'react';
import './login.css';
import gmail_icon from './gmail_icon.png';
import fb_icon from './fb_icon.png';
import apple_icon from './apple_icon.png';
import twtx_icon from './twtx_icon.webp';

export function LogIn() {
    return (
        <div className="loginGroup">
            <h1>SIGN IN</h1>
            <form>
                <label>Email</label>
                    <input type="text" />
                <label>Password</label>
                    <input type="text" />
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
