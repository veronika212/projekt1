import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, beforeAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const HouseType = ({
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
      title: 'Welcher Wohnstatus liegt vor?',
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
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 3, 10, {
              key: 'houseType',
              value: 'Einfamilienhaus',
            })
          }
          title={'Einfamilienhaus'}
          iconName="icon icon--haus"
          selected={selectedState === 'Einfamilienhaus' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 3, 10, {
              key: 'houseType',
              value: 'Mehrfamilien­haus',
            })
          }
          title={'Mehrfamilien­haus'}
          iconName="icon icon--mehrfamilienhaus"
          selected={selectedState === 'Mehrfamilien­haus' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 3, 10, {
              key: 'houseType',
              value: 'Reihenhaus',
            })
          }
          title={'Reihenhaus'}
          iconName="icon icon--reihenhaus"
          selected={selectedState === 'Reihenhaus' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 3, 10, {
              key: 'houseType',
              value: 'Doppelhaushälfte',
            })
          }
          title={'Doppelhaushälfte'}
          iconName="icon icon--doppelhaus"
          selected={selectedState === 'Doppelhaushälfte' ? true : false}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick('Angaben zur Immobilie', 2, 10)}
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
    selectedState: selectCustomerDataItem(state, 'houseType'),
  }),
  { updateAppData, updateCustomerData, beforeAppData }
)(HouseType);
