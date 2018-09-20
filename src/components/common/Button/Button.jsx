import React from 'react';

import './Button.css';

const Button = ({ onClick, disabled, label, className }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  );
};
export default Button;
