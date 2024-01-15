import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AddCompany.css';
import addIcon from './icon/fi-rr-plus.svg';
import addUser from './icon/fi-bs-user.svg';

const AddCompany = () => {
  const navigate = useNavigate(); 
  const handleAddButtonClick = () => {
    console.log('Add button clicked!');
    
    navigate('/register-company');
  };
  return (
    <div className="mainContainer">
      <h2 id="Usernames">Logged in As- Username (Admin)</h2>
      <div>
        <h2 id="textCompany">Companies</h2>
      </div>
      <div className="secondContainer">
        <div className="thirdContainer"></div>

        <div className="containerCompany">
        <div className="rectangle-box" onClick={handleAddButtonClick}>
            <img id="addIcon" src={addIcon} alt="add" />
          </div>
          <div className="rectangle-box">
            <img id="addCompany" src={addUser} alt="add" />
            <p>Company Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addCompany" src={addUser} alt="add" />
            <p>Company Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addCompany" src={addUser} alt="add" />
            <p>Company Name</p>
          </div>
        </div>
        <div className="containerCompany">
          <div className="rectangle-box">
            <img id="addCompany" src={addUser} alt="add" />
            <p>Company Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addCompany" src={addUser} alt="add" />
            <p>Company Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addCompany" src={addUser} alt="add" />
            <p>Company Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addCompany" src={addUser} alt="add" />
            <p>Company Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;
