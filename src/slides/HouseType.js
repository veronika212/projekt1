import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const HouseType = ({ goToSlide, updateAppData, updateCustomerData, selectedState }) => {
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
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 2, 10, {
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
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 2, 10, {
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
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 2, 10, {
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
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 2, 10, {
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
        handlePrevClick={() => goToSlide(0)}
        handleNextClick={() => goToSlide(1)}
        nextDisabled={true}
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
  { updateAppData, updateCustomerData }
)(HouseType);
