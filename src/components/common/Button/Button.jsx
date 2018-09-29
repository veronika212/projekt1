import React from 'react';

import './Button.css';

const Button = ({ onClick, disabled, label, className, glyphBefore, glyphAfter }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`button ${className}`}>
      {glyphBefore && (
        <span
          className={`glyphicon ${glyphBefore}`}
          style={{ marginRight: '10px' }}
          aria-hidden={true}
        />
      )}
      {label}
      {glyphAfter && (
        <span
          className={`glyphicon ${glyphAfter}`}
          style={{ marginLeft: '10px' }}
          aria-hidden={true}
        />
      )}
    </button>
  );
};
export default Button;
