import React from 'react';
import Button from '../Button/Button';

import './Footer.css';

const Footer = ({ handlePrevClick, handleNextClick, prevDisabled, nextDisabled }) => {
  return (
    <footer className="footer">
      <div className="footer-btn">
        <Button
          disabled={prevDisabled}
          onClick={() => handlePrevClick()}
          label={'Zurück'}
          className="footer-btn__btn-prev"
        />

        <Button
          disabled={nextDisabled}
          onClick={() => handleNextClick()}
          label={'Weiter'}
          className="footer-btn__btn-next"
        />
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  nextDisabled: false,
  prevDisabled: false,
};

export default Footer;
