import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, selectAppDataItem } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const Ownership = ({ goToSlide, updateAppData, updateCustomerData, selectedState, propertyType, error }) => {
  const onTileClick = (nextSlideNumber, currentStep, totalSteps, data) => {
    if (propertyType === 'Haus') {
      nextSlideNumber = 2;
      currentStep = 2;
    }
    if (propertyType === 'Grundstück') {
        nextSlideNumber = 3;
        currentStep = 2.5;
      }
  
    if (propertyType === 'Gewerbe') {
        nextSlideNumber = 4;
        currentStep = 2;
      }
    goToSlide(nextSlideNumber);
    updateAppData({ totalSteps, currentStep });
    updateCustomerData(data);
  };

  const handlePrevClick = (currentStep, totalSteps) => {
    goToSlide(null, 'prev');
    updateAppData({ totalSteps, currentStep });
  };
  
  const handleNextClick = () => {
    let slideNumber = 1;
    let currentStep = 3;
    if (propertyType === 'Haus') {
      slideNumber = 2;
      currentStep = 2;
    }
    if (propertyType === 'Grundstück') {
      slideNumber = 3;
      currentStep = 2.5;
    }

    if (propertyType === 'Gewerbe') {
      slideNumber = 4;
      currentStep = 2;
    }

    if (!selectedState) {
      updateAppData({ error: true });
      return;
    }

    updateAppData({
      totalSteps: 10,
      currentStep,
    });
    goToSlide(slideNumber);
  };


  return (
    <div>
      <div className="tiles-wrapper tile-wrapper--modifier">
        <Tile
          handleOnClick={() =>
            onTileClick(1, 3, 10, {
              key: 'ownership',
              value: 'Eigentum/Eigengrundanteil',
            })
          }
          title={'Eigentum/Eigengrundanteil'}
          iconName="icon icon--bebaubar-kurzfristig"
          selected={selectedState === 'Eigentum/Eigengrundanteil' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 3, 10, {
              key: 'ownership',
              value: 'Pacht/Baurecht',
            })
          }
          title={'Pacht/Baurecht'}
          iconName="icon icon--bebaubar-eingeschraenkt"
          selected={selectedState === 'Pacht/Baurecht' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick(1, 10)}
        handleNextClick={() => handleNextClick()}
        glyphPrevBefore="glyphicon-arrow-left"
        glyphNextAfter="glyphicon-arrow-right"
        nextDisabled={!selectedState}
      />
    </div>
  );
};

export default connect(
  state => ({
    selectedState: selectCustomerDataItem(state, 'ownership'),
    propertyType: selectCustomerDataItem(state, 'propertyType'),
    error: selectAppDataItem(state, 'error'),
  }),
  { updateAppData, updateCustomerData }
)(Ownership);
