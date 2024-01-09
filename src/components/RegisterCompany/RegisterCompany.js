
import React from 'react';
import './RegisterCompany.css';

const RegisterCompany = () => {
  return (
    <div className="container">
      <p className="heading">Register Company</p>

      <div className="input-container">
        <p className="input-label">Company Email</p>
        <input type="text" id="compnayEmail" placeholder="Enter your Company email" />

        <p className="input-label">Company Name</p>
        <input type="text" id="compnayName" placeholder="Enter your Company Name" />

        <p className="input-label">Address</p>
        <input type="text" id="compnayAddress" placeholder="Enter your Company Address" />
      </div>

      <div className="proceed-container">
        <button type="button" className="proceed-button">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default RegisterCompany;
