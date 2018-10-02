import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const PropertyExtension = ({
  goToSlide,
  updateAppData,
  updateCustomerData,

  selectedState,
}) => {
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
    updateAppData({
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
            onTileClick(11, 9, 10, {
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
            onTileClick(11, 9, 10, {
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
            onTileClick(11, 9, 10, {
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
            onTileClick(11, 9, 10, {
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
        handlePrevClick={() => handlePrevClick(6, 10)}
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
  { updateAppData, updateCustomerData }
)(PropertyExtension);
