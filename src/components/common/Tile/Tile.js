import React from 'react';

import './Tile.css';

const Tile = ({ handleOnClick, iconName, className, title, selected }) => {
  return (
    <div
      onClick={handleOnClick}
      className={`tile ${className} ${selected === true ? 'active' : null}`}
    >
      <span className={iconName} />
      <span className="tile__title">{title}</span>
    </div>
  );
};

export default Tile;
