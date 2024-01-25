

import React from "react";
import { Route, Routes } from 'react-router-dom';
// import Login from './components/Login/Login';
import AddCompany from './components/AddCompany/AddCompany';
import RegisterCompany from './components/RegisterCompany/RegisterCompany';
import AddGroup from './components/AddGroup/AddGroup';
import RegisterGroup from './components/RegisterGroup/RegisterGroup';
import FormBuilder from './components/FormBuilder/FormBuilder';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <FormBuilder />} />
      <Route path="/add-company" element={<AddCompany />} />
      <Route path="/register-company" element={<RegisterCompany />} />
      <Route path="/add-group" element={<AddGroup />} />
      <Route path="/register-group" element={<RegisterGroup />} />
    </Routes>
  );
};


// function App() {
//   return (
//     <div className="App">
//       <FormBuilder />
//     </div>
//   );
// }

export default App;
