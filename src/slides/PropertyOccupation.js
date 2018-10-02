import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, selectAppDataItem } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';
import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const PropertyOccupation = ({
  goToSlide,
  updateAppData,
  updateCustomerData,
  selectedState,
  propertyType,
  error,
}) => {
  const onTileClick = (slideNumber, currentStep, totalSteps, data) => {
    let nextSlideNumber = slideNumber;
    if (propertyType === 'Gewerbe' && slideNumber === 6) {
      nextSlideNumber = 13;
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
    let slideNumber = 7;
    if (selectedState === 'Selbst bewohnt' || selectedState === 'Frei') {
      slideNumber = 6;
      if (propertyType === 'Gewerbe') {
        slideNumber = 13;
      }
    }

    if (!selectedState) {
      updateAppData({ error: true });
      return;
    }

    updateAppData({
      totalSteps: 10,
      currentStep: 4,
    });
    goToSlide(slideNumber);
  };
  console.log(error, 'error');
  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(6, 4, 10, {
              key: 'propertyOccupation',
              value: 'Selbst bewohnt',
            })
          }
          title={'Selbst bewohnt'}
          iconName="icon icon--status-selbst"
          selected={selectedState === 'Selbst bewohnt' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(6, 4, 10, {
              key: 'propertyOccupation',
              value: 'Frei',
            })
          }
          title={'Frei'}
          iconName="icon icon--status-frei"
          selected={selectedState === 'Frei' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(7, 3.5, 10, {
              key: 'propertyOccupation',
              value: 'Vermietet',
            })
          }
          title={'Vermietet'}
          iconName="icon icon--status-vermietet"
          selected={selectedState === 'Vermietet' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(7, 3.5, 10, {
              key: 'propertyOccupation',
              value: 'Teilweise vermietet',
            })
          }
          title={'Teilweise vermietet'}
          iconName="icon icon--status-teilweise"
          selected={selectedState === 'Teilweise vermietet' ? true : false}
          className={error === true ? 'tile-error' : null}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick(3, 10)}
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
    selectedState: selectCustomerDataItem(state, 'propertyOccupation'),
    propertyType: selectCustomerDataItem(state, 'propertyType'),
    error: selectAppDataItem(state, 'error'),
  }),
  { updateAppData, updateCustomerData }
)(PropertyOccupation);
