import React from 'react';
import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';
import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Tile from '../components/common/Tile/Tile';

const PropertyType = ({ goToSlide, updateAppData, updateCustomerData }) => {
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
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 2, 8, {
              key: 'propertyType',
              value: 'Wohnung',
            })
          }
          title={'Wohnung'}
          iconName="icon icon--wohnung"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 2, 8, {
              key: 'propertyType',
              value: 'Haus',
            })
          }
          title={'Haus'}
          iconName="icon icon--haus"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 2, 8, {
              key: 'propertyType',
              value: 'Grundstück',
            })
          }
          title={'Grundstück'}
          iconName="icon icon--grundstueck"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 2, 8, {
              key: 'propertyType',
              value: 'Gewerbe',
            })
          }
          title={'Gewerbe'}
          iconName="icon icon--gewerbe"
        />
      </div>

      <ProgressBar />
      {/* progressBarValue={{ width: '10%' }} */}
      <Footer handlePrevClick={() => goToSlide(0)} handleNextClick={() => goToSlide(1)} />
    </div>
  );
};

export default connect(
  null,
  { updateAppData, updateCustomerData }
)(PropertyType);
