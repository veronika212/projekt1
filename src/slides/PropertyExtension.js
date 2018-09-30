import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const PropertyExtension = ({ goToSlide, updateAppData, updateCustomerData, selectedState }) => {
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
            onTileClick(11, 'In welcher Region befindet sich das Objekt?', 6, 8, {
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
            onTileClick(11, 'In welcher Region befindet sich das Objekt?', 6, 8, {
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
            onTileClick(11, 'In welcher Region befindet sich das Objekt?', 6, 8, {
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
            onTileClick(11, 'In welcher Region befindet sich das Objekt?', 6, 8, {
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
        handlePrevClick={() => goToSlide(9)}
        handleNextClick={() => goToSlide(11)}
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
    selectedState: selectCustomerDataItem(state, 'propertyExtension'),
  }),
  { updateAppData, updateCustomerData }
)(PropertyExtension);
