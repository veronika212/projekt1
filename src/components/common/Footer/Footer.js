import React from 'react';
import Button from '../Button/Button';
import RequiredExplanation from '../RequiredExplanation/RequiredExplanation';

import './Footer.css';

const Footer = ({
  handlePrevClick,
  handleNextClick,
  prevDisabled,
  nextDisabled,
  className,
  glyphPrevBefore,
  glyphPrevAfter,
  glyphNextBefore,
  glyphNextAfter,
}) => {
  return (
    <footer className="footer">
      <Button
        disabled={prevDisabled}
        onClick={() => {
          !prevDisabled && handlePrevClick();
        }}
        label={'Zurück'}
        className={`footer__btn-prev ${className}`}
        glyphBefore={glyphPrevBefore}
        glyphAfter={glyphPrevAfter}
      />

      <RequiredExplanation className={className} />

      <Button
        disabled={nextDisabled}
        onClick={() => {
          !nextDisabled && handleNextClick();
        }}
        type={'submit'}
        label={'Weiter'}
        className={`footer__btn-next ${nextDisabled ? null : 'active'}`}
        glyphBefore={glyphNextBefore}
        glyphAfter={glyphNextAfter}
      />
    </footer>
  );
};

Footer.defaultProps = {
  nextDisabled: false,
  prevDisabled: false,
};

export default Footer;
