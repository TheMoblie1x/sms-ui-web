import React, { useState } from "react";
import "./FormBuilder.css";
import moveIcon from "./move.png";

const FormBuilder = () => {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [questionCount, setQuestionCount] = useState(1);

  const [questions, setQuestions] = useState([
    { type: "text", title: "Question Title", options: [] },
  ]);
  const [optionInputWidth, setOptionInputWidth] = useState(200);

  const handleFormTitleChange = (e) => {
    setFormTitle(e.target.value);
  };

  const handleFormDescriptionChange = (e) => {
    setFormDescription(e.target.value);
  };

  const handleQuestionCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setQuestionCount(count);
    setQuestions(
      Array.from({ length: count }, (_, index) => ({
        type: "text",
        title: `Question ${index + 1} Title`,
        options: [],
      }))
    );
  };

  const handleQuestionTypeChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[index].type = e.target.value;
    setQuestions(newQuestions);
  };

  const handleQuestionTitleChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[index].title = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (e, index, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[index].options[optionIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const addOption = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push("");
    setQuestions(newQuestions);

    setOptionInputWidth((prevWidth) => Math.max(prevWidth - 0, 80));
  };

  const removeOption = (index, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[index].options.splice(optionIndex, 1);
    setQuestions(newQuestions);
  };

  const questionElements = questions.map((question, index) => (
    <div key={index} className="Question-card">
      <div className="icon-container">
        <img src={moveIcon} id="move-icon" alt="Move Icon" />
      </div>
      <div className="Question-content">
        <select
          value={question.type}
          onChange={(e) => handleQuestionTypeChange(e, index)}
        >
          <option value="text">Text</option>
          <option value="radio">Radio</option>
          <option value="checkbox">Checkbox</option>
        </select>
        <input
          type="text"
          value={question.title}
          onChange={(e) => handleQuestionTitleChange(e, index)}
        />
        {question.type !== "text" && (
          <>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option-container">
                <input
                  type="text"
                  id={`option${index + 1}-${optionIndex + 1}`}
                  name={`option${index + 1}-${optionIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(e, index, optionIndex)}
                  className="new-option-input"
                  style={{ width: `${optionInputWidth}px` }}
                />
                <button
                  id="removeOption"
                  onClick={() => removeOption(index, optionIndex)}
                  className="remove-option-button"
                >
                  Remove Option
                </button>
              </div>
            ))}
            <button id="addOption" onClick={() => addOption(index)}>
              Add Option
            </button>
          </>
        )}
      </div>
    </div>
  ));

  return (
    <div>
      <div className="main-container">
        <h1>Form Builder</h1>

        <div className="inner-container">
          <div className="most-inner-container">
            <div className="form-container">
              <div className="form-title">
                <div className="title-content">
                  <input
                    type="text"
                    id="formTitle"
                    name="formTitle"
                    value={formTitle}
                    onChange={handleFormTitleChange}
                    placeholder="Form Title"
                    style={{ fontSize: "2em", fontWeight: "bold" }}
                  />
                </div>
                <hr />
                <textarea
                  id="formDescription"
                  name="formDescription"
                  value={formDescription}
                  onChange={handleFormDescriptionChange}
                  placeholder="Form Description (Optional)"
                  rows="4"
                  cols="50"
                />
                <div className="title-content">
                  <h4
                    id="question-Type"
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    Question Count
                  </h4>
                  <select
                    id="questionCountDropdown"
                    name="questionCountDropdown"
                    value={questionCount}
                    onChange={handleQuestionCountChange}
                    style={{ display: "inline-block" }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 8, 10].map((count) => (
                      <option key={count} value={count}>
                        {count}
                      </option>
                    ))}
                  </select>
                </div>
                {questionElements}
              </div>
            </div>
          </div>
        </div>

        <div className="top-buttons">
          <button id="publish-buttons">Publish</button>
          <button id="save-buttons">Save</button>
        </div>
      </div>

      <div className="bottom-navbar">
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Published
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help
        </a>
      </div>
    </div>
  );
};

export default FormBuilder;
