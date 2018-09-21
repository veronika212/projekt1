import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

// const PropertyType = ({ goToSlide, updateAppData, updateCustomerData }) => {
//   const onTileClick = (nextSlideNumber, nextTitle, currentStep, totalSteps, data) => {
//     goToSlide(nextSlideNumber);
//     updateAppData({ title: nextTitle, totalSteps, currentStep });
//     updateCustomerData(data);
//   };

const PropertyOccupation = ({ goToSlide, updateAppData, updateCustomerData }) => {
  const onTileClick = (nextSlideNumber, nextTitle, currentStep, totalSteps, data) => {
    goToSlide(nextSlideNumber);
    updateAppData({ title: nextTitle, totalSteps, currentStep });
    updateCustomerData(data);
  };
  return (
    <div>
      <div className="tiles-wrapper">
        {/* <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 2, 8, {
              key: 'propertyType',
              value: 'Wohnung',
            })
          }
          title={'Wohnung'}
          iconName="icon icon--wohnung"
        /> */}
        <Tile
          handleOnClick={() =>
            onTileClick(2, 'In welchem Zustand befindet sich die Immobilie?', 3, 8, {
              key: 'propertyOccupation',
              value: 'Selbst bewohnt',
            })
          }
          title={'Selbst bewohnt'}
          iconName="icon icon--status-selbst"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(2, 'In welchem Zustand befindet sich die Immobilie?', 3, 8, {
              key: 'propertyOccupation',
              value: 'Frei',
            })
          }
          title={'Frei'}
          iconName="icon icon--status-frei"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(2, 'In welchem Zustand befindet sich die Immobilie?', 3, 8, {
              key: 'propertyOccupation',
              value: 'Vermietet',
            })
          }
          title={'Vermietet'}
          iconName="icon icon--status-vermietet"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(2, 'In welchem Zustand befindet sich die Immobilie?', 3, 8, {
              key: 'propertyOccupation',
              value: 'Selbst bewohnt',
            })
          }
          title={'Selbst bewohnt'}
          iconName="icon icon--status-teilweise"
        />
        {/* <Tile handleOnClick={() => goToSlide(0)} title={'Frei'} iconName="icon icon--haus" />
        <Tile
          handleOnClick={() => goToSlide(0)}
          title={'Vermietet'}
          iconName="icon icon--grundstueck"
        />
        <Tile
          handleOnClick={() => goToSlide(0)}
          title={'Teilweise vermietet'}
          iconName="icon icon--gewerbe"
        /> */}
      </div>

      <ProgressBar />
      <Footer handlePrevClick={() => goToSlide(0)} handleNextClick={() => goToSlide(2)} />
    </div>
  );
};

export default connect(
  null,
  { updateAppData, updateCustomerData }
)(PropertyOccupation);
