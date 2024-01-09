// AddGroup.js

import React from 'react';
import './AddGroup.css';
import addIcon from './group-ico.svg'; 
import plusIcon from './fi-rr-plus.svg'; 




const AddGroup = () => {
  return (
    <div className="mainContainer">
      <h2 id="Usernames">Logged in As- Username (Admin)</h2>
      <div>
        <h2 id="textGroup">Group Name</h2>
      </div>
      <div className="secondContainer">
        <div className="thirdContainer"></div>

        <div className="containerGroup">
          <div className="rectangle-box">
            <img id="addIcon" src={plusIcon} alt="add" />
          </div>
          <div className="rectangle-box">
            <img id="addIcon" src={addIcon} alt="add" />
            <p>Group Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addIcon" src={addIcon} alt="add" />
            <p>Group Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addIcon" src={addIcon} alt="add" />
            <p>Group Name</p>
          </div>
        </div>
        <div className="containerGroup">
          <div className="rectangle-box">
            <img id="addIcon" src={addIcon} alt="add" />
            <p>Group Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addIcon" src={addIcon} alt="add" />
            <p>Group Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addIcon" src={addIcon} alt="add" />
            <p>Group Name</p>
          </div>
          <div className="rectangle-box">
            <img id="addIcon" src={addIcon} alt="add" />
            <p>Group Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
