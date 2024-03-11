import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AddCompany.css';
import addIcon from './icon/fi-rr-plus.svg';
import addUser from './icon/fi-bs-user.svg';

const AddCompany = () => {
  const navigate = useNavigate(); 
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleCompanyClick = (companyId) => {
    console.log('Company clicked:', companyId);
    navigate('/add-group', { state: { companyId: companyId } });
  };
  
  
  

  const fetchCompanies = async () => {
    try {
      const response = await fetch('http://localhost:8080/Companies');
      if (!response.ok) {
        throw new Error('Failed to fetch companies');
      }
      const responseData = await response.json();
      const { data } = responseData; 
      console.log('Fetched companies:', data); 
      setCompanies(data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const handleAddButtonClick = () => {
    console.log('Add button clicked!');
    navigate('/register-company');
  };

  console.log('Companies state:', companies); 

  return (
    <div className="mainContainer">
      <h2 id="Usernames">Logged in As- Username (Admin)</h2>
      <div>
        <h2 id="textCompany">Companies</h2>
      </div>
      <div className="secondContainer">
        <div className="thirdContainer"></div>

        <div className="containerCompany">
          <button className="rectangle-box" onClick={handleAddButtonClick}>
            <img id="addIcon" src={addIcon} alt="add" />
          </button>
          {companies.map((company, index) => (
  <button className="rectangle-box" key={index} onClick={() => handleCompanyClick(company.companyId)}>
    <img id="addCompany" src={addUser} alt="add" />
    <p>Name: {company.name}</p>
    <p>ID: {company.companyId}</p>
  </button>
))}

        </div>
      </div>
    </div>
  );
};

export default AddCompany;
