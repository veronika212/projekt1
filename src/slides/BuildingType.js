import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, beforeAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const BuildingType = ({
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
    goToSlide(4);
    beforeAppData({ title: beforeTitle, totalSteps, currentStep });
  };

  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(6, 'Ist das Grundstück bebaubar?', 6, 8, {
              key: 'buildingType',
              value: 'Kurzfristig bebaubar',
            })
          }
          title={'Kurzfristig bebaubar'}
          iconName="icon icon--bebaubar-kurzfristig"
          selected={selectedState === 'Kurzfristig bebaubar' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(6, 'Ist das Grundstück bebaubar?', 6, 8, {
              key: 'buildingType',
              value: 'Eingeschränkt',
            })
          }
          title={'Eingeschränkt'}
          iconName="icon icon--bebaubar-eingeschraenkt"
          selected={selectedState === 'Eingeschränkt' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(6, 'Ist das Grundstück bebaubar?', 6, 8, {
              key: 'buildingType',
              value: 'Nicht bebaubar',
            })
          }
          title={'Nicht bebaubar'}
          iconName="icon icon--bebaubar-nicht"
          selected={selectedState === 'Nicht bebaubar' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(6, 'Ist das Grundstück bebaubar?', 6, 8, {
              key: 'buildingType',
              value: 'Unbekannt',
            })
          }
          title={'Unbekannt'}
          iconName="icon icon--bebaubar-unbekannt"
          selected={selectedState === 'Unbekannt' ? true : false}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick('BlaBlaBLa', 5, 20)}
        handleNextClick={() => goToSlide(6)}
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
    selectedState: selectCustomerDataItem(state, 'buildingType'),
  }),
  { updateAppData, updateCustomerData, beforeAppData }
)(BuildingType);
