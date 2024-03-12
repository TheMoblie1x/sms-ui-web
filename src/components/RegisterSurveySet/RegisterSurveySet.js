import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RegisterSurveySet.css";
import axios from "axios";

const RegisterSurveySet = () => {
  const location = useLocation();
  const groupId = location.state && location.state.groupId;
  const navigate = useNavigate();
  const groupName = location.state && location.state.groupName;
  const [surveySetName, setSurveySetName] = useState("");

  const getCurrentTimestamp = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

console.log(getCurrentTimestamp());

  
const handleProceedButtonClick = async () => {
  try {
    const currentTimestamp = getCurrentTimestamp();
    const response = await axios.post("http://localhost:8080/SurveySet", {
      name: surveySetName,
      groupName: groupName,
      creationDate: currentTimestamp,
      groupId:groupId,
    });

    console.log("SurveySet registration successful", response.data);

    const surveySetId = response.data.data; 

    console.log("SurveySet ID:", surveySetId);

    navigate("/add-survey", { state: { surveySetId } });
  } catch (error) {
    console.error("Error during SurveySet registration", error);
    alert("Registration failed. Please try again.");
  }
};

console.log("Group Name:", groupName);


  return (
    <div className="rss-container">
      <p className="heading">Register Survey Set</p>

      <div className="input-container">
        <p className="input-label">Group name</p>
        <input
          type="text"
          id="SurveySetGroup"
          placeholder="Group name"
          value={groupName}
          readOnly={true}
        />

        <p className="input-label">Survey Set Name</p>
        <input
          type="text"
          id="SurveySetName"
          placeholder="Enter your Survey Set Name"
          value={surveySetName}
          onChange={(e) => setSurveySetName(e.target.value)}
        />

        <p className="input-label">Date and Time</p>
        <input
          type="text"
          id="SurveySetTime"
          placeholder="Time of creation"
          value={getCurrentTimestamp()}
          readOnly={true}
        />
      </div>

      <div className="proceed-container">
        <button
          type="button"
          className="proceed-button"
          onClick={handleProceedButtonClick}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default RegisterSurveySet;
