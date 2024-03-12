import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './AddSurvey.css';
import addIcon from './icon/fi-rr-plus.svg';
import addUser from './icon/fi-bs-user.svg';

const AddSurvey = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const fetchFormData = async () => {
            try {
                const surveySetId = location.state?.surveySetId;
                if (!surveySetId) {
                    console.error('Survey set ID is not available in the location state');
                    return;
                }

                const response = await fetch(`http://localhost:8080/FormData/surveySet/${surveySetId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch form data');
                }
                const responseData = await response.json();
                const { data, message, status } = responseData;
                console.log(message); 
                console.log(status);
                setFormData(data);
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        };
        fetchFormData();
    }, [location.state]);

    const handleAddButtonClick = () => {
      
        console.log('Add button clicked!');
        const surveySetId = location.state?.surveySetId; 
        navigate('/form-builder', { state: { surveySetId } }); 
    };

    const handleButtonClick = (surveySetId) => {
        alert(`Survey Set ID: ${surveySetId}`);
    };

    return (
        <div className="mainContainer">
            <h2 id="Usernames">Logged in As- Username (Admin)</h2>
            <div>
                <h2 id="textSurvey">Survey </h2>
            </div>
            <div className="secondContainer">
                <div className="thirdContainer"></div>
                <div className="containerSurveySet">
                    <div className="rectangle-box" onClick={handleAddButtonClick}>
                        <img id="addIcon" src={addIcon} alt="add" />
                    </div>
                    {formData && formData.map((survey) => (
                        <div className="rectangle-box" key={survey.id}>
                            <img id="addIcon" src={addUser} alt="add" onClick={() => handleButtonClick(survey.id)} />
                            <div>{survey.formTitle}</div>
                            <div>{survey.id}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddSurvey;
