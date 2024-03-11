import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './AddSurveySet.css';
import addIcon from './icon/fi-rr-plus.svg';
import addUser from './icon/fi-bs-user.svg';

const AddSurveySet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [surveySets, setSurveySets] = useState([]);
  
  const groupId = location.state && location.state.groupId;
  const groupName = location.state && location.state.groupName;


  console.log(groupId);

  useEffect(() => {
    const fetchSurveySets = async () => {
      try {
        const response = await fetch(`http://localhost:8080/SurveySetsByGroupId/${groupId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch survey sets');
        }
        const responseData = await response.json();
        const { data, message, status } = responseData;
        console.log(message); 
        console.log(status);
        setSurveySets(data); 
      } catch (error) {
        console.error('Error fetching survey sets:', error);
      }
    };
  
    if (groupId) {
      fetchSurveySets();
      console.log('Group ID:', groupId); 
      console.log('Group Name:', groupName); 
    }
  }, [groupId, groupName]); 
  
  
  const handleButtonClick = (surveySet) => {
    navigate('/add-survey', { state: { groupId: groupId, groupName: groupName, surveySetId: surveySet.surveySetId } });
  };
  
  
  const handleAddButtonClick = () => {
    navigate('/register-survey-set', { state: { groupId: groupId, groupName: groupName } });
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
  <button className="rectangle-box" key={surveySet.surveySetId} onClick={() => handleButtonClick(surveySet)}>
    <img id="addSurveySet" src={addUser} alt="add" />
    <p>Name: {surveySet.name}</p>
    <p>ID: {surveySet.surveySetId}</p>
  </button>
))}

        </div>
      </div>
    </div>
  );
};

export default AddSurveySet;
