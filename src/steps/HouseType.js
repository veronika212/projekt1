import React from 'react';
import Footer from '../components/common/Footer/Footer';

const HouseType = ({ goToSlide }) => {
  return (
    <div>
      <p>House Type</p>
      <Footer handlePrevClick={() => goToSlide(0)} handleNextClick={() => goToSlide(1)} />
    </div>
  );
};

export default HouseType;
