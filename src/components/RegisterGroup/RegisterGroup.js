import React, { useState } from 'react';
import './RegisterGroup.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const RegisterGroup = ({ companyId: propCompanyId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const companyId = propCompanyId || (location.state && location.state.companyId);
  console.log("company id in Register Group is  " + companyId);
  const [groupEmail, setGroupEmail] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupAddress, setGroupAddress] = useState('');

  const handleProceedButtonClick = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/company/${companyId}/Group`, {
        email: groupEmail,
        name: groupName,
        address: groupAddress,
      });

      console.log('Group registration successful', response.data);
      navigate('/add-survey-set', { state: { groupName } }); // Pass groupName as state
    } catch (error) {
      console.error('Error during group registration', error);
      alert('Registration failed. Please try again.');
      navigate('/add-survey-set'); 
    }
  };

  return (
    <div className="container">
      <p className="heading">Register Group</p>

      <div className="input-container">
        <p className="input-label">Group Email</p>
        <input
          type="text"
          id="groupEmail"
          placeholder="Enter your Group email"
          value={groupEmail}
          onChange={(e) => setGroupEmail(e.target.value)}
        />

        <p className="input-label">Group Name</p>
        <input
          type="text"
          id="groupName"
          placeholder="Enter your Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />

        <p className="input-label">Address</p>
        <input
          type="text"
          id="groupAddress"
          placeholder="Enter your Group Address"
          value={groupAddress}
          onChange={(e) => setGroupAddress(e.target.value)}
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

export default RegisterGroup;
