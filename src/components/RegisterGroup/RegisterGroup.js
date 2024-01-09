
import React from 'react';
import './RegisterGroup.css';

const RegisterGroup = () => {
  return (
    <div className="container">
      <p className="heading">Register Group</p>

      <div className="input-container">
        <p className="input-label">Group Email</p>
        <input type="text" id="groupEmail" placeholder="Enter your Group email" />

        <p className="input-label">Group Name</p>
        <input type="text" id="groupName" placeholder="Enter your Group Name" />

        <p className="input-label">Address</p>
        <input type="text" id="groupAddress" placeholder="Enter your Group Address" />
      </div>

      <div className="proceed-container">
        <button type="button" className="proceed-button">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default RegisterGroup;
