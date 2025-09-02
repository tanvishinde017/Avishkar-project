import React from 'react';
import '../style.css';

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${value}%` }}></div>
    </div>
  );
};


export default ProgressBar;
