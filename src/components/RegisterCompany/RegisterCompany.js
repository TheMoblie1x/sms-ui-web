
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './RegisterCompany.css';

const RegisterCompany = () => {
  const navigate = useNavigate();

  const handleProceedButtonClick = () => {
    console.log('Proceed button clicked!');
    
    navigate('/add-group');
  };

  return (
    <div className="container">
      <p className="heading">Register Company</p>

      <div className="input-container">
        <p className="input-label">Company Email</p>
        <input type="text" id="companyEmail" placeholder="Enter your Company email" />

        <p className="input-label">Company Name</p>
        <input type="text" id="companyName" placeholder="Enter your Company Name" />

        <p className="input-label">Address</p>
        <input type="text" id="companyAddress" placeholder="Enter your Company Address" />
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
