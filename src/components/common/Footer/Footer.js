import React from 'react';
import Button from '../Button/Button';
import RequiredExplanation from '../RequiredExplanation/RequiredExplanation';

import './Footer.css';

const Footer = ({ handlePrevClick, handleNextClick, prevDisabled, nextDisabled, className }) => {
  return (
    <footer className="footer">
      <Button
        disabled={prevDisabled}
        onClick={() => handlePrevClick()}
        label={'Zurück'}
        className={`footer__btn-prev ${className}`}
      />

      <RequiredExplanation className={className} />

      <Button
        disabled={nextDisabled}
        onClick={() => handleNextClick()}
        type={'submit'}
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
