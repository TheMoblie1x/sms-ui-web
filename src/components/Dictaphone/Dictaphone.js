

import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import micIcon from './mic.png';
import './Dictaphone.css';

const Dictaphone = ({ onTranscriptChange }) => {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleStopListening = () => {
    onTranscriptChange(transcript);
    resetTranscript();
  };

  return (
    <div className="dictaphone-container">
      <button onClick={SpeechRecognition.startListening}><img src={micIcon} id="mic-icon" alt="Mic Icon" /></button>
      
      <button onClick={handleStopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <h5>{transcript}</h5>
    </div>
  );
};

export default Dictaphone;
