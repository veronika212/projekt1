import React from 'react';

import './Tile.css';

const Tile = ({ handleOnClick, iconName, title }) => {
  return (
    <div onClick={handleOnClick} className="tile">
      <span className={iconName} />
      <span>{title}</span>
    </div>
  );
};

export default Tile;
