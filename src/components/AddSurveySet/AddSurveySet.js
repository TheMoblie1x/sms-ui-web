import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './AddSurveySet.css';
import addIcon from './icon/fi-rr-plus.svg';
import addUser from './icon/fi-bs-user.svg';

const AddSurveySet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [surveySets, setSurveySets] = useState([]);

  useEffect(() => {
    const fetchSurveySets = async () => {
      try {
        const response = await fetch(`http://localhost:8080/SurveySetsByGroupName/${location.state.groupName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch survey sets');
        }
        const responseData = await response.json();
        setSurveySets(responseData.data);
      } catch (error) {
        console.error('Error fetching survey sets:', error);
      }
    };
    fetchSurveySets();
  }, [location.state.groupName]);

  const handleAddButtonClick = () => {
    console.log('Add button clicked!');
    navigate('/register-survey-set', { state: { groupName: location.state.groupName } }); 
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
          {surveySets.map(surveySet => (
            <div className="rectangle-box" key={surveySet.surveySetId}>
              <img id="addSurveySet" src={addUser} alt="add" />
              <p>{surveySet.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddSurveySet;
