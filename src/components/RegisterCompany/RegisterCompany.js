import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterCompany.css';
import axios from 'axios';

const RegisterCompany = () => {
  const navigate = useNavigate();
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const handleProceedButtonClick = async () => {
    try {
      const response = await axios.post('http://localhost:8080/Company', {
        email: companyEmail,
        name: companyName,
        address: companyAddress,
      });

      console.log('Company registration successful', response.data);
      navigate('/add-group');
    } catch (error) {
      console.error('Error during company registration', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <p className="heading">Register Company</p>

      <div className="input-container">
        <p className="input-label">Company Email</p>
        <input
          type="text"
          id="companyEmail"
          placeholder="Enter your Company email"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
        />

        <p className="input-label">Company Name</p>
        <input
          type="text"
          id="companyName"
          placeholder="Enter your Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <p className="input-label">Address</p>
        <input
          type="text"
          id="companyAddress"
          placeholder="Enter your Company Address"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        />
      </div>

      <div className="proceed-container">
        <button type="button" className="proceed-button" onClick={handleProceedButtonClick}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default RegisterCompany;
