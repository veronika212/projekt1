import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const BusinessType = ({ goToSlide, updateAppData, updateCustomerData }) => {
  const onTileClick = (nextSlideNumber, nextTitle, currentStep, totalSteps, data) => {
    goToSlide(nextSlideNumber);
    updateAppData({ title: nextTitle, totalSteps, currentStep });
    updateCustomerData(data);
  };
  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Nutzungsstatus liegt vor?', 3, 20, {
              key: 'businessType',
              value: 'Büro',
            })
          }
          title={'Büro'}
          iconName="icon icon--buero"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Nutzungsstatus liegt vor?', 3, 20, {
              key: 'businessType',
              value: 'Gastgewerbe',
            })
          }
          title={'Gastgewerbe'}
          iconName="icon icon--gastgewerbe"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Nutzungsstatus liegt vor?', 3, 20, {
              key: 'businessType',
              value: 'Fabrik / Produktion',
            })
          }
          title={'Fabrik / Produktion'}
          iconName="icon icon--fabrik"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Nutzungsstatus liegt vor?', 3, 30, {
              key: 'businessType',
              value: 'Hotel',
            })
          }
          title={'Hotel'}
          iconName="icon icon--hotel"
        />
      </div>

      <ProgressBar />
      <Footer handlePrevClick={() => goToSlide(0)} handleNextClick={() => goToSlide(1)} />
    </div>
  );
};

export default connect(
  null,
  { updateAppData, updateCustomerData }
)(BusinessType);
