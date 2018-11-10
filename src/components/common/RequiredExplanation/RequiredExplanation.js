import React from 'react';

import './RequiredExplanation.css';

const RequiredExplanation = ({ className }) => {
  return (
    <p className={`subtitle ${className}`}>
      <span className="star">*</span>
      Pflichtfeld
    </p>
  );
};
export default RequiredExplanation;
