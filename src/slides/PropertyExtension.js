import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const PropertyExtension = ({ goToSlide, updateAppData, updateCustomerData }) => {
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
            onTileClick(4, 'Gibt es einen Balkon oder eine Terrasse?', 4, 8, {
              key: 'propertyExtension',
              value: 'Balkon',
            })
          }
          title={'Balkon'}
          iconName="icon icon--balkon"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(4, 'Gibt es einen Balkon oder eine Terrasse?', 4, 8, {
              key: 'propertyExtension',
              value: 'Terrasse',
            })
          }
          title={'Terrasse'}
          iconName="icon icon--Terrasse "
        />
        <Tile
          handleOnClick={() =>
            onTileClick(4, 'Gibt es einen Balkon oder eine Terrasse?', 4, 8, {
              key: 'propertyExtension',
              value: 'Balkon & Terrasse',
            })
          }
          title={'Balkon & Terrasse'}
          iconName="icon icon--balkonTerrasse"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(4, 'Gibt es einen Balkon oder eine Terrasse?', 4, 8, {
              key: 'propertyExtension',
              value: 'Weder noch',
            })
          }
          title={'Weder noch'}
          iconName="icon icon--keinbalkonTerrasse"
        />
      </div>

      <ProgressBar />
      <Footer handlePrevClick={() => goToSlide(2)} handleNextClick={() => goToSlide(4)} />
    </div>
  );
};

export default connect(
  null,
  { updateAppData, updateCustomerData }
)(PropertyExtension);
