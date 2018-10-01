import React from 'react';

import { connect } from 'react-redux';
import { updateAppData, beforeAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const PropertyOccupation = ({
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
    updateCustomerData({ key: 'propertyArea', value: 100 });
    updateAppData({
      title: 'Welche Wohnfläche besitzt das Objekt?',
      totalSteps: 10,
      currentStep: 4,
    });
    goToSlide(slideNumber);
  };

  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(17, 'Welche Wohnfläche besitzt das Objekt?', 4, 10, {
              key: 'propertyOccupation',
              value: 'Selbst bewohnt',
            })
          }
          title={'Selbst bewohnt'}
          iconName="icon icon--status-selbst"
          selected={selectedState === 'Selbst bewohnt' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(6, 'In welchem Zustand befindet sich die Immobilie?', 4, 10, {
              key: 'propertyOccupation',
              value: 'Frei',
            })
          }
          title={'Frei'}
          iconName="icon icon--status-frei"
          selected={selectedState === 'Frei' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(7, 'Wie hoch ist die Nettojahresmiete des Objekts?', 3.5, 10, {
              key: 'propertyOccupation',
              value: 'Vermietet',
            })
          }
          title={'Vermietet'}
          iconName="icon icon--status-vermietet"
          selected={selectedState === 'Vermietet' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(7, 'Wie hoch ist die Nettojahresmiete des Objekts?', 3.5, 10, {
              key: 'propertyOccupation',
              value: 'Teilweise vermietet',
            })
          }
          title={'Teilweise vermietet'}
          iconName="icon icon--status-teilweise"
          selected={selectedState === 'Teilweise vermietet' ? true : false}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick('Angaben zur Immobilie', 3, 10)}
        handleNextClick={() => handleNextClick(6)}
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
  }),
  { updateAppData, updateCustomerData, beforeAppData }
)(PropertyOccupation);
