import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, beforeAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const LandType = ({
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
    updateCustomerData({ key: 'buildingType', value: { selectedState } });
    updateAppData({
      title: 'Ist das Grundstück bebaubar?',
      totalSteps: 10,
      currentStep: 3.5,
    });
    goToSlide(slideNumber);
  };

  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Ist das Grundstück bebaubar?', 3.5, 10, {
              key: 'landType',
              value: 'Baugrundstück',
            })
          }
          title={'Baugrundstück'}
          iconName="icon icon--baugrundstueck"
          selected={selectedState === 'Baugrundstück' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Ist das Grundstück bebaubar?', 3.5, 10, {
              key: 'landType',
              value: 'Bauerwartungs­land',
            })
          }
          title={'Bauerwartungs­land'}
          iconName="icon icon--bauerwartungsland"
          selected={selectedState === 'Bauerwartungs­land' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Ist das Grundstück bebaubar?', 3.5, 10, {
              key: 'landType',
              value: 'Gewerbe­grundstück',
            })
          }
          title={'Gewerbe­grundstück'}
          iconName="icon icon--gewerbegrundstueck"
          selected={selectedState === 'Gewerbe­grundstück' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Ist das Grundstück bebaubar?', 3.5, 10, {
              key: 'landType',
              value: 'Agrarfläche',
            })
          }
          title={'Agrarfläche'}
          iconName="icon icon--agrarflaeche"
          selected={selectedState === 'Agrarfläche' ? true : false}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick('Angaben zur Immobilie', 2, 10)}
        handleNextClick={() => handleNextClick(5)}
        glyphPrevBefore="glyphicon-arrow-left"
        glyphNextAfter="glyphicon-arrow-right"
        nextDisabled={!selectedState}
      />
    </div>
  );
};

export default connect(
  state => ({
    selectedState: selectCustomerDataItem(state, 'landType'),
  }),
  { updateAppData, updateCustomerData, beforeAppData }
)(LandType);
