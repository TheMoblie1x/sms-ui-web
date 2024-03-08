import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllForm.css";

const FormDataById = ({ formData }) => {
  return (
    <div className="form-container">
      <h2> Title: {formData.formTitle}</h2>
        <p>Description: {formData.formDescription}</p>
        <p>Question Count: {formData.questionCount}</p>
        <p>Created At: {formData.createdAt}</p>
        <p>Updated At: {formData.updatedAt}</p>
        <p>Created By: {formData.createdBy}</p>
        <p>Published At: {formData.publishedAt}</p>
        <p>Tags: {formData.tags ? formData.tags.join(", ") : "None"}</p>
        <p>Category: {formData.category}</p>
        <p>Language: {formData.language}</p>
        <p>Is Scanned: {formData.isScanned ? "Yes" : "No"}</p>
        <h3>Questions:</h3>
        {formData.questions.map((question) => (
          <div key={question.id}>
            <h4>Question {question.questionNumber}</h4>
            <p>Title: {question.questionTitle}</p>
            <p>Type: {question.questionType}</p>
            <p>Options: {question.options || "None"}</p>
          </div>
        ))}
    </div>
  );
};

const FormById = () => {
  const [formData, setFormData] = useState(null);
  const formId = 1; 

  useEffect(() => {
    const fetchFormDataById = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/FormData/${formId}`);
        setFormData(response.data); 
      } catch (error) {
        console.error("Error fetching form data by ID:", error);
      }
    };

    fetchFormDataById();
  }, [formId]);

  return (
    <div>
      <h1>Form By ID</h1>
      {formData ? (
        <FormDataById formData={formData} />
      ) : (
        <p>Loading form data...</p>
      )}
    </div>
  );
};

export default FormById;
