import React from 'react';
import '../style.css';

const Tag = ({ text, color }) => {
  return <span className={`tag ${color}`}>{text}</span>;
};

export default Tag;
