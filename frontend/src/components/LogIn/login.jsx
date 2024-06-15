import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import gmail_icon from '../Logos/gmail_icon.png';
import fb_icon from '../Logos/fb_icon.png';
import twtx_icon from '../Logos/twtx_icon.webp';
import apple_icon from '../Logos/apple_icon.png';

function EmailErrorMessage({username, isValid}) {
    return <p className={styles.error_message}>Please enter a valid email.</p>
}

// NOTE: I'm gonna add this later after you can compare input to passwords set by 
//    the users to see if they're correct
//
// function Password({password, isValid}) {
//     return <p className={styles.error_message}>Incorrect password </p>
// }

export function LogIn() {
    const [email, setEmail]=useState('')
    var checkEmail= new RegExp("^.+@.+\\..+")
    // checks email for @ and subsequent . 
    const isEmailValid=checkEmail.test(email)

    return (
        <div className={styles.login_group}>
            <h1>LOGIN</h1>
            <form>
                <label>Email</label>
                    <input type="text" placeholder="Email"onChange={(event)=>{
                        const value = event.target.value;
                        setEmail(value)
                    }}/>
                    {!isEmailValid && <EmailErrorMessage></EmailErrorMessage>}

                <label>Password</label>
                    <input type="text" placeholder="Password"/>

                    <p className={styles.pass_reset}>Forgot Password?</p>
                <button className={styles.login_button}>LOGIN</button>
            </form>
            <p className={styles.signup_text}> Don't have an account?
            <Link to="/SignUp" className={styles.signup_link}>Join us today!</Link></p>
            <p className={styles.alt_login_subtext}><span>LOGIN WITH</span></p>
            <table>
                <tr className={styles.icons}>
                   <img className='gmailLogo' src={gmail_icon} alt='gmail'></img>
                   <img className='fbLogo' src={fb_icon} alt='fb'></img>
                   <img className='twtLogo' src={twtx_icon} alt='twitter'></img>
                   <img className='appleLogo' src={apple_icon} alt='apple'></img>
                </tr>
            </table>
        </div>        
    )
}
