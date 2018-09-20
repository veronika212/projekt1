import React from 'react';
import Button from '../Button/Button';

import './Footer.css';

const Footer = ({ handlePrevClick, handleNextClick, prevDisabled, nextDisabled }) => {
  return (
    <footer className="footer">
      <Button
        disabled={prevDisabled}
        onClick={() => handlePrevClick()}
        label={'Zurück'}
        className="footer__btn-prev"
      />

      <p className="footer__subtitle">Subtitle</p>

      <Button
        disabled={nextDisabled}
        onClick={() => handleNextClick()}
        label={'Weiter'}
        className="footer__btn-next"
      />
    </footer>
  );
};

Footer.defaultProps = {
  nextDisabled: false,
  prevDisabled: false,
};

export default Footer;
