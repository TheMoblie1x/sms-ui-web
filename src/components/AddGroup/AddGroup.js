import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AddGroup.css';
import addIcon from './group-ico.svg';
import plusIcon from './fi-rr-plus.svg';

const AddGroup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const companyId = location.state && location.state.companyId;
  const [groupList, setGroupList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(`http://localhost:8080/company/${companyId}/Group`);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        const { data } = responseData;

        if (!data || data.length === 0) {
          setGroupList([]);
        } else {
          setGroupList(data);
          setErrorMessage('');
        }
      } catch (error) {
        setErrorMessage(error.message);
        console.error('Error fetching groups:', error);
      }
    };

    if (companyId) {
      fetchGroups();
    }
  }, [companyId]);

  const handleGroupButtonClick = (group) => {
    navigate('/add-survey-set', { state: { groupId: group.groupId, groupName: group.name } });
  }
  
  
  const handlePlusIconClick = () => {
    console.log('Plus icon clicked!');
    navigate('/register-group', { state: { companyId: companyId } });
  };

  return (
    <div className="mainContainer">
      <h2 id="Usernames">Logged in As- Username (Admin)</h2>
      <div>
        <h2 id="textGroup">Group Name</h2>
      </div>
      <div className="secondContainer">
        <div className="thirdContainer"></div>

        <div className="containerGroup">
          <div className="rectangle-box" onClick={handlePlusIconClick}>
            <img id="addIcon" src={plusIcon} alt="add" />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          {companyId && !errorMessage && groupList.map((group, index) => (
           <button className="rectangle-box" key={index} onClick={() => handleGroupButtonClick(group)}>
           <img id="addIcon" src={addIcon} alt="add" />
           <p>{group.name}</p>
           <p>Group ID: {group.groupId}</p>
         </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
