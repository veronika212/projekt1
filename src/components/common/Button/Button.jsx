import React from 'react';

import './Button.css';

const Button = ({ onClick, disabled, label }) => {
  return (
    <button disabled={disabled} onClick={onClick} className="button">
      {label}
    </button>
  );
};
export default Button;
