import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { BsFacebook, BsGoogle, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './styles.module.css'
import PersonIcon from '@mui/icons-material/Person';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import EmailIcon from '@mui/icons-material/Email';
import { ReactComponent as SignInSvg } from 'src/assets/svg/signin.svg';
import { ReactComponent as SignUpSvg } from 'src/assets/svg/signup.svg';

const Authentication = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignIn = () => {
        setIsSignUpMode(false);
    };

    const handleSignUp = () => {
        setIsSignUpMode(true);
    };

    return (
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="signin-signup">
                <form action="" className={` form sign-in-form ${isSignUpMode ? 'hidden' : ''}`}>
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <PersonIcon className='icon' />
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                        <LockPersonIcon className='icon' />
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" className="btn" />
                    <p className="social-text">Or Sign in with social platform</p>
                    <div className="social-media">
                        <IconButton aria-label="BsFacebook" className="social-icon">
                            <BsFacebook />
                        </IconButton>
                        <IconButton aria-label="BsTwitter" className="social-icon">
                            <BsTwitter />
                        </IconButton>
                        <IconButton aria-label="BsGoogle" className="social-icon">
                            <BsGoogle />
                        </IconButton>
                        <IconButton aria-label="BsLinkedin" className="social-icon">
                            <BsLinkedin />
                        </IconButton>

                    </div>
                    <p className="account-text">Don't have an account? <a href="#" id="sign-up-btn2">Sign up</a></p>
                </form>
                <form action="" className=" form sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <PersonIcon className='icon' />
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                        <EmailIcon className='icon' />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <LockPersonIcon className='icon' />
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Sign up" className="btn" />
                    <p className="social-text">Or Sign in with social platform</p>
                    <div className="social-media">
                        <IconButton aria-label="BsFacebook" className="social-icon">
                            <BsFacebook />
                        </IconButton>
                        <IconButton aria-label="BsTwitter" className="social-icon">
                            <BsTwitter />
                        </IconButton>
                        <IconButton aria-label="BsGoogle" className="social-icon">
                            <BsGoogle />
                        </IconButton>
                        <IconButton aria-label="BsLinkedin" className="social-icon">
                            <BsLinkedin />
                        </IconButton>
                    </div>
                    <p className="account-text">Already have an account? <a href="#" id="sign-in-btn2">Sign in</a></p>
                </form>
            </div>
            <div className="panels-container">
                <div className={`panel left-panel ${isSignUpMode ? 'hidden' : ''}`}>
                    <div className="content">
                        <h3>Member of Brand?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                        <button className="btn" id="sign-in-btn" onClick={handleSignIn}>Sign in</button>
                    </div>
                    <SignInSvg className="image" />
                </div>
                <div className={`panel right-panel ${isSignUpMode ? '' : 'hidden'}`}>
                    <div className="content">
                        <h3>New to Brand?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                        <button className="btn" id="sign-up-btn" onClick={handleSignUp} >Sign up</button>
                    </div>
                    <SignUpSvg className="image" />
                </div>
            </div>
        </div>
    );
};

export default Authentication