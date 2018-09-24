import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const BuildingType = ({ goToSlide, updateAppData, updateCustomerData }) => {
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
            onTileClick(6, 'Ist das Grundstück bebaubar?', 6, 8, {
              key: 'buildingType',
              value: 'Kurzfristig bebaubar',
            })
          }
          title={'Kurzfristig bebaubar'}
          iconName="icon icon--bebaubar-kurzfristig"
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
        />
      </div>

      <ProgressBar />
      <Footer handlePrevClick={() => goToSlide(4)} handleNextClick={() => goToSlide(6)} />
    </div>
  );
};

export default connect(
  null,
  { updateAppData, updateCustomerData }
)(BuildingType);