import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from'./signup.module.css';
import gmail_icon from '../Logos/gmail_icon.png';
import fb_icon from '../Logos/fb_icon.png';
import twtx_icon from '../Logos/twtx_icon.webp';
import apple_icon from '../Logos/apple_icon.png';

function EmailErrorMessage({username, isValid}) {
    return <p className={styles.error_message}>Please enter a valid email.</p>
}

function PasswordErrorMessage({password, isValid}) {
    return <p className={styles.error_message}>Passwords must be at least 8 characters and 
    include at least one lowercase, uppercase, number, and special symbol (~|!@#$%^&*).</p>
}

function PasswordConfirmation({password, isValid}) {
    return <p className={styles.error_message}>Passwords do not match. </p>
}

export function SignUp() {

    // notes:
    // 1. creates state var and exp setting var default value to empty string
    //    const [var, function]=useState()
    // 2. onChange event detects change to input of var and assigns value using event.target.value then update
    //      state var using function
    //       ...onChange={(event)=>{
    //              const value = event.target.value;
    //              setEmail(value)
    //          }}/>
    // 3. display error message based on validity of input

    const [email, setEmail]=useState('')
    var checkEmail= new RegExp("^.+@.+\\..+")
    // checks email for @ and subsequent . (might have to update to make more accurate later)
    const isEmailValid= email.length===0 || checkEmail.test(email) // fix later

    const [password, setPassword]=useState('')
    var passRegex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")
    // regex to meet min 8 characters consisting of at least one lowercase, uppercase, number, and special symbol
    const isPasswordValid=password.length===0 || passRegex.test(password)

    const [passwordConfirmation, setPasswordConfirmation]=useState('')
    const passwordMatches=(passwordConfirmation===password)

    return (
        <div className={styles.signup_group}>
            <h1>SIGN UP</h1>
            <p className={styles.create_account_subtext}>create account</p>
            <form>
                <label>Email</label>
                    <input type="text" placeholder="asdf@gmail.com" onChange={(event)=>{
                        const value = event.target.value;
                        setEmail(value)
                    }}/>
                    {!isEmailValid && <EmailErrorMessage></EmailErrorMessage>}

                <label>Password</label>
                    <input type="text" placeholder="Password" onChange={(event)=>{
                        const value=event.target.value;
                        setPassword(value)
                    }}/>
                    {!isPasswordValid && <PasswordErrorMessage></PasswordErrorMessage>}

                <label>Confirm Password</label>
                    <input type="text" placeholder="Password" onChange={(event)=>{
                        const value=event.target.value;
                        setPasswordConfirmation(value)
                    }}/><br></br>
                    {!passwordMatches && <PasswordConfirmation></PasswordConfirmation>}

                <button className={styles.signup_button}>SIGN UP</button>
            </form>
            <p className={styles.login_subtext}>Already have an account?  
            <Link to="/LogIn" className={styles.login_button}>Log in here</Link></p>
            <p className={styles.alt_login_subtext}><span>OR SIGN UP WITH</span></p>
            <table>
                <tr className={styles.icons}>
                   <img src={gmail_icon} alt='gmail'></img>
                   <img src={fb_icon} alt='fb'></img>
                   <img src={twtx_icon} alt='twitter'></img>
                   <img src={apple_icon} alt='apple'></img>
                </tr>
            </table>
        </div>        
    )
}
