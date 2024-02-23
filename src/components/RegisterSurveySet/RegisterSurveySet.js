import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RegisterSurveySet.css";
import axios from "axios";

const RegisterSurveySet = () => {
  const location = useLocation();
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
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  
  const handleProceedButtonClick = async () => {
    try {
      const currentTimestamp = getCurrentTimestamp();
      // const currentTimestamp = '2024-02-21 14:17:32';
      console.log("time is "+ currentTimestamp);
      const response = await axios.post("http://localhost:8080/SurveySet", {
        name: surveySetName,
        groupName: groupName,
        creation_date: currentTimestamp,
      });

      console.log("SurveySet registration successful", response.data);
      navigate("/form-builder");
    } catch (error) {
      console.error("Error during SurveySet registration", error);
      alert("Registration failed. Please try again.");

    }
  };

  return (
    <div className="container">
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
