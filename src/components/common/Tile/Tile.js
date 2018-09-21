import React from 'react';

import './Tile.css';

const Tile = ({ handleOnClick, iconName, className, title }) => {
  return (
    <div onClick={handleOnClick} className={`tile ${className}`}>
      <span className={iconName} />
      <span className="tile__title">{title}</span>
    </div>
  );
};

export default Tile;
