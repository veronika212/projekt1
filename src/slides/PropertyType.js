import React from 'react';
import { connect } from 'react-redux';
import { updateAppData, selectAppDataItem } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';
import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Tile from '../components/common/Tile/Tile';

const PropertyType = ({ goToSlide, updateAppData, updateCustomerData, selectedState, error }) => {
  const onTileClick = (nextSlideNumber, currentStep, totalSteps, data) => {
    goToSlide(nextSlideNumber);
    updateAppData({ totalSteps, currentStep });
    updateCustomerData(data);
  };

  const handleNextClick = slideNumber => {
    if (!selectedState) {
      updateAppData({ error: true });
      return;
    }

    updateAppData({
      totalSteps: 10,
      currentStep: 3,
    });
    goToSlide(slideNumber);
  };

  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(1, 3, 10, {
              key: 'propertyType',
              value: 'Wohnung',
            })
          }
          title={'Wohnung'}
          iconName="icon icon--wohnung"
          selected={selectedState === 'Wohnung' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(2, 2, 10, {
              key: 'propertyType',
              value: 'Haus',
            })
          }
          title={'Haus'}
          iconName="icon icon--haus"
          selected={selectedState === 'Haus' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(3, 2.5, 10, {
              key: 'propertyType',
              value: 'Grundstück',
            })
          }
          title={'Grundstück'}
          iconName="icon icon--grundstueck"
          selected={selectedState === 'Grundstück' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(4, 2, 10, {
              key: 'propertyType',
              value: 'Gewerbe',
            })
          }
          title={'Gewerbe'}
          iconName="icon icon--gewerbe"
          selected={selectedState === 'Gewerbe' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
      </div>

      <ProgressBar className="progressBar-width " />
      <Footer
        handlePrevClick={() => goToSlide(0)}
        handleNextClick={() => handleNextClick(1)}
        className="visibility"
        nextDisabled={!selectedState}
        glyphNextAfter="glyphicon-arrow-right"
      />
    </div>
  );
};

export default connect(
  state => ({
    selectedState: selectCustomerDataItem(state, 'propertyType'),
    error: selectAppDataItem(state, 'error'),
  }),
  { updateAppData, updateCustomerData }
)(PropertyType);
