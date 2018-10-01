import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, beforeAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const PropertyExtension = ({
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
    goToSlide(9);
    beforeAppData({ title: beforeTitle, totalSteps, currentStep });
  };

  const handleNextClick = slideNumber => {
    updateCustomerData({ key: 'propertyExtension', value: { selectedState } });
    updateAppData({
      title: 'In welcher Region befindet sich das Objekt?',
      totalSteps: 10,
      currentStep: 9,
    });
    goToSlide(slideNumber);
  };

  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(11, 'In welcher Region befindet sich das Objekt?', 9, 10, {
              key: 'propertyExtension',
              value: 'Balkon',
            })
          }
          title={'Balkon'}
          iconName="icon icon--balkon"
          selected={selectedState === 'Balkon' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(11, 'In welcher Region befindet sich das Objekt?', 9, 10, {
              key: 'propertyExtension',
              value: 'Terrasse',
            })
          }
          title={'Terrasse'}
          iconName="icon icon--Terrasse"
          selected={selectedState === 'Terrasse' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(11, 'In welcher Region befindet sich das Objekt?', 9, 10, {
              key: 'propertyExtension',
              value: 'Balkon & Terrasse',
            })
          }
          title={'Balkon & Terrasse'}
          iconName="icon icon--balkonTerrasse"
          selected={selectedState === 'Balkon & Terrasse' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(11, 'In welcher Region befindet sich das Objekt?', 9, 10, {
              key: 'propertyExtension',
              value: 'Weder noch',
            })
          }
          title={'Weder noch'}
          iconName="icon icon--keinbalkonTerrasse"
          selected={selectedState === 'Weder noch' ? true : false}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() =>
          handlePrevClick('In welchem Zustand befindet sich die Immobilie?', 6, 10)
        }
        handleNextClick={() => handleNextClick(11)}
        glyphPrevBefore="glyphicon-arrow-left"
        glyphNextAfter="glyphicon-arrow-right"
        nextDisabled={!selectedState}
      />
    </div>
  );
};

export default connect(
  state => ({
    selectedState: selectCustomerDataItem(state, 'propertyExtension'),
  }),
  { updateAppData, updateCustomerData, beforeAppData }
)(PropertyExtension);
