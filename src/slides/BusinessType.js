import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, selectAppDataItem } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const BusinessType = ({ goToSlide, updateAppData, updateCustomerData, selectedState, error }) => {
  const onTileClick = (nextSlideNumber, currentStep, totalSteps, data) => {
    goToSlide(nextSlideNumber);
    updateAppData({ totalSteps, currentStep });
    updateCustomerData(data);
  };

  const handlePrevClick = (currentStep, totalSteps) => {
    goToSlide(null, 'prev');
    updateAppData({ totalSteps, currentStep });
  };

  const handleNextClick = slideNumber => {
    if (!selectedState) {
      updateAppData({ error: true });
      return;
    }
    updateAppData({
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
          className={error === true ? 'tile-error' : null}
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
          className={error === true ? 'tile-error' : null}
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
          className={error === true ? 'tile-error' : null}
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
          className={error === true ? 'tile-error' : null}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick(1, 10)}
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
    error: selectAppDataItem(state, 'error'),
  }),
  { updateAppData, updateCustomerData }
)(BusinessType);
