import React from 'react';
import Footer from '../components/common/Footer/Footer';

const Region = ({ goToSlide }) => {
  return (
    <div>
      <p>Region</p>
      <Footer handlePrevClick={() => goToSlide(0)} handleNextClick={() => goToSlide(2)} />
    </div>
  );
};

export default Region;
