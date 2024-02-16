import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import eyeIcon from './eye.svg';
import googleIcon from './google.svg';
import fbIcon from './fb.svg';
import appleIcon from './apple.svg';
import axios from 'axios'; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/User', {
        email: email,
        password: password,
      });

      console.log('Login successful', response.data);
      navigate('/company');
    } catch (error) {
      console.error('Error during login', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  const validateInputs = () => {
    if (!email.trim()) {
      alert('Email cannot be empty');
      return false;
    }
    if (!password.trim()) {
      alert('Password cannot be empty');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      handleLogin();
    }
  };

  return (
    <div className="container">
      <h1 className="heading1">Survey Management System</h1>
      <h1 className="heading2">Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="password-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <a href="/">Forgot password?</a>
        </div>

        <button type="submit" className="login-button">
          Log in
        </button>

        <div className="sign-up">
          <p>
            Haven’t got an account? <a href="/">Sign up</a>
          </p>
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
                <img src={appleIcon} alt="Apple" />
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
