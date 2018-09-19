import React from 'react';
import Button from '../Button/Button';

import './Footer.css';

const Footer = ({ handlePrevClick, handleNextClick, prevDisabled, nextDisabled }) => {
  return (
    <footer className="footer">
      <div className="btn">
        <Button
          disabled={prevDisabled}
          onClick={() => handlePrevClick()}
          className="btn__btn-prev"
          label={'Zurück'}
        />

        <Button disabled={nextDisabled} onClick={() => handleNextClick()} label={'Weiter'} />
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  nextDisabled: false,
  prevDisabled: false,
};

export default Footer;
