import React from 'react';
import './signup.css';
import gmail_icon from './gmail_icon.png';
import fb_icon from './fb_icon.png';
import apple_icon from './apple_icon.png';
import twtx_icon from './twtx_icon.webp';

export function SignUp() {
    return (
        <div className="signup-group">
            <h1>SIGN UP</h1>
            <p className='createAccount-subtext'>create account</p>
            <form>
                <label>Email</label>
                    <input type="text" />
                <label>Password</label>
                    <input type="text" />
                <label>Confirm Password</label>
                    <input type="text" /><br></br>
                <button className='signup-button'>SIGN UP</button>
            </form>
            <p className='login-subtext'>Already have an account? <span className='login-button'>Login here</span></p>
            <p className='altLogin-subtext'><span>OR SIGN UP WITH</span></p>
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
