import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, selectAppDataItem } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const LandType = ({ goToSlide, updateAppData, updateCustomerData, selectedState, error }) => {
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
    if (!selectedState) {
      updateAppData({ error: true });
      return;
    }

    updateAppData({
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
            onTileClick(5, 3.5, 10, {
              key: 'landType',
              value: 'Baugrundstück',
            })
          }
          title={'Baugrundstück'}
          iconName="icon icon--baugrundstueck"
          selected={selectedState === 'Baugrundstück' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 3.5, 10, {
              key: 'landType',
              value: 'Bauerwartungs­land',
            })
          }
          title={'Bauerwartungs­land'}
          iconName="icon icon--bauerwartungsland"
          selected={selectedState === 'Bauerwartungs­land' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 3.5, 10, {
              key: 'landType',
              value: 'Gewerbe­grundstück',
            })
          }
          title={'Gewerbe­grundstück'}
          iconName="icon icon--gewerbegrundstueck"
          selected={selectedState === 'Gewerbe­grundstück' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 3.5, 10, {
              key: 'landType',
              value: 'Agrarfläche',
            })
          }
          title={'Agrarfläche'}
          iconName="icon icon--agrarflaeche"
          selected={selectedState === 'Agrarfläche' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick(2, 10)}
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
    error: selectAppDataItem(state, 'error'),
  }),
  { updateAppData, updateCustomerData }
)(LandType);
