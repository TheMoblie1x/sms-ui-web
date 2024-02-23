import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './AddSurveySet.css';
import addIcon from './icon/fi-rr-plus.svg';
import addUser from './icon/fi-bs-user.svg';

const AddSurveySet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const groupName = location.state && location.state.groupName; // Retrieve groupName from state


  const handleAddButtonClick = () => {
    console.log('Add button clicked!');
    
    navigate('/register-survey-set', { state: { groupName } }); // Pass groupName as state
    console.log(groupName);
  };


  return (
    <div className="mainContainer">
      <h2 id="Usernames">Logged in As- Username (Admin)</h2>
      <div>
        <h2 id="textSurveySet">Survey Sets</h2>
      </div>
      <div className="secondContainer">
        <div className="thirdContainer"></div>

        <div className="containerSurveySet">
        <div className="rectangle-box" onClick={handleAddButtonClick}>
            <img id="addIcon" src={addIcon} alt="add" />
          </div>
          <div className="rectangle-box">
            <img id="addSurveySet" src={addUser} alt="add" />
            <p>SurveySet Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addSurveySet" src={addUser} alt="add" />
            <p>SurveySet Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addSurveySet" src={addUser} alt="add" />
            <p>SurveySet Name</p>
          </div>
        </div>
        <div className="containerSurveySet">
          <div className="rectangle-box">
            <img id="addSurveySet" src={addUser} alt="add" />
            <p>SurveySet Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addSurveySet" src={addUser} alt="add" />
            <p>SurveySet Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addSurveySet" src={addUser} alt="add" />
            <p>SurveySet Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addSurveySet" src={addUser} alt="add" />
            <p>SurveySet Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSurveySet;
