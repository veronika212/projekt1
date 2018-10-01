import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, beforeAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const BusinessType = ({
  goToSlide,
  updateAppData,
  updateCustomerData,
  beforeAppData,
  selectedState,
}) => {
  const onTileClick = (nextSlideNumber, nextTitle, currentStep, totalSteps, data) => {
    goToSlide(nextSlideNumber);
    updateAppData({ title: nextTitle, totalSteps, currentStep });
    updateCustomerData(data);
  };

  const handlePrevClick = (beforeTitle, currentStep, totalSteps) => {
    goToSlide(0);
    beforeAppData({ title: beforeTitle, totalSteps, currentStep });
  };

  const handleNextClick = slideNumber => {
    updateCustomerData({ key: 'propertyOccupation', value: { selectedState } });
    updateAppData({
      title: 'Welcher Nutzungsstatus liegt vor?',
      totalSteps: 10,
      currentStep: 3,
    });
    goToSlide(slideNumber);
  };

  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Nutzungsstatus liegt vor?', 3, 10, {
              key: 'businessType',
              value: 'Büro',
            })
          }
          title={'Büro'}
          iconName="icon icon--buero"
          selected={selectedState === 'Büro' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Nutzungsstatus liegt vor?', 3, 10, {
              key: 'businessType',
              value: 'Gastgewerbe',
            })
          }
          title={'Gastgewerbe'}
          iconName="icon icon--gastgewerbe"
          selected={selectedState === 'Gastgewerbe' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Nutzungsstatus liegt vor?', 3, 10, {
              key: 'businessType',
              value: 'Fabrik / Produktion',
            })
          }
          title={'Fabrik / Produktion'}
          iconName="icon icon--fabrik"
          selected={selectedState === 'Fabrik / Produktion' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Nutzungsstatus liegt vor?', 3, 10, {
              key: 'businessType',
              value: 'Hotel',
            })
          }
          title={'Hotel'}
          iconName="icon icon--hotel"
          selected={selectedState === 'Hotel' ? true : false}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick('Angaben zur Immobilie', 1, 10)}
        handleNextClick={() => handleNextClick(1)}
        glyphPrevBefore="glyphicon-arrow-left"
        glyphNextAfter="glyphicon-arrow-right"
        nextDisabled={!selectedState}
      />
    </div>
  );
};

export default connect(
  state => ({
    selectedState: selectCustomerDataItem(state, 'businessType'),
  }),
  { updateAppData, updateCustomerData, beforeAppData }
)(BusinessType);
