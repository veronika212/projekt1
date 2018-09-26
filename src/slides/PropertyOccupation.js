import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const PropertyOccupation = ({ goToSlide, updateAppData, updateCustomerData }) => {
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
            onTileClick(6, 'Welche Wohnfläche besitzt das Objekt?', 3, 20, {
              key: 'propertyOccupation',
              value: 'Selbst bewohnt',
            })
          }
          title={'Selbst bewohnt'}
          iconName="icon icon--status-selbst"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(6, 'In welchem Zustand befindet sich die Immobilie?', 3, 20, {
              key: 'propertyOccupation',
              value: 'Frei',
            })
          }
          title={'Frei'}
          iconName="icon icon--status-frei"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(7, 'Wie hoch ist die Nettojahresmiete des Objekts?', 3, 20, {
              key: 'propertyOccupation',
              value: 'Vermietet',
            })
          }
          title={'Vermietet'}
          iconName="icon icon--status-vermietet"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(7, 'Wie hoch ist die Nettojahresmiete des Objekts?', 3, 20, {
              key: 'propertyOccupation',
              value: 'Teilweise vermietet',
            })
          }
          title={'Teilweise vermietet'}
          iconName="icon icon--status-teilweise"
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => goToSlide(0)}
        handleNextClick={() => goToSlide(7)}
        nextDisabled={true}
      />
    </div>
  );
};

export default connect(
  null,
  { updateAppData, updateCustomerData }
)(PropertyOccupation);
