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
    goToSlide(3);
    beforeAppData({ title: beforeTitle, totalSteps, currentStep });
  };

  const handleNextClick = slideNumber => {
    updateCustomerData({ key: 'landArea', value: this.state.value });
    updateAppData({
      title: 'Welche Fläche besitzt das Grundstück?',
      totalSteps: 10,
      currentStep: 5,
    });
    goToSlide(slideNumber);
  };

  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(12, 'Ist das Grundstück bebaubar?', 5, 10, {
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
            onTileClick(12, 'Ist das Grundstück bebaubar?', 5, 10, {
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
            onTileClick(12, 'Ist das Grundstück bebaubar?', 5, 10, {
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
            onTileClick(12, 'Ist das Grundstück bebaubar?', 5, 10, {
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
        handlePrevClick={() => handlePrevClick('Angaben zu Ihrem Grundstück', 2.5, 10)}
        handleNextClick={() => handleNextClick(12)}
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
