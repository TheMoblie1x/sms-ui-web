import React, { useState } from 'react';
import './Login.css';
import eyeIcon from './eye.svg';
import googleIcon from './google.svg';
import fbIcon from './fb.svg';
import appleIcon from './apple.svg';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <h1 className="heading1">Survey Management System</h1>
      <h1 className="heading2">Log in</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="password-input"
            placeholder="Enter your password"
            required
          />
          <img
            id="eye-icon"
            className="eye-icon"
            src={eyeIcon}
            alt="Toggle Password"
            onClick={togglePassword}
          />
        </div>

        <div className="forgot-password">
          <a href=" ">Forgot password?</a>
        </div>

        <button type="submit" className="login-button">
          Log in
        </button>

        <div className="sign-up">
          <p>Haven’t got an account? <a href=" ">Sign up</a></p>
        </div>

        <div className="social-login">
          <p>Or sign in with:</p>
          <div className="social-icons">
            <div className="icon-box">
              <a href="https://www.google.com">
                <img src={googleIcon} alt="Google" />
              </a>
            </div>

            <div className="icon-box">
              <a href="https://www.facebook.com">
              <img src={fbIcon} alt="Facebook" />
              </a>
            </div>
            <div className="icon-box">
              <a href="https://www.apple.com">
                <img src={appleIcon}  alt="Apple" />
              </a>
            </div>
          </div>
        </div>

        <div className="signup-container">
          <button type="button" className="login-btn">
            Log in
          </button>
          <button type="button" className="signup-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
