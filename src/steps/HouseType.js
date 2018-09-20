import React from 'react';
import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

const HouseType = ({ goToSlide }) => {
  return (
    <div>
      <p>House Type</p>
      <ProgressBar />
      <Footer handlePrevClick={() => goToSlide(0)} handleNextClick={() => goToSlide(1)} />
    </div>
  );
};

export default HouseType;
