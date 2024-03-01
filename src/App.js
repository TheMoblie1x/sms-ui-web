
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import AddCompany from './components/AddCompany/AddCompany';
import RegisterCompany from './components/RegisterCompany/RegisterCompany';
import AddGroup from './components/AddGroup/AddGroup';
import RegisterGroup from './components/RegisterGroup/RegisterGroup';
import FormBuilder from './components/FormBuilder/FormBuilder';
import AddSurveySet from './components/AddSurveySet/AddSurveySet';
import RegisterSurveySet from './components/RegisterSurveySet/RegisterSurveySet'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FormBuilder />} />
      <Route path="/" element={<Login />} />
      <Route path="/company" element={<AddCompany />} />
      <Route path="/register-company" element={<RegisterCompany />} />
      <Route path="/add-group" element={<AddGroup />} />
      <Route path="/register-group" element={<RegisterGroup />} />
      <Route path="/add-survey-set" element={<AddSurveySet />} />
      <Route path="/register-survey-set" element={<RegisterSurveySet />} />
      <Route path="/form-builder" element={<FormBuilder />} /> {}
    </Routes>
  );
};

export default App;
