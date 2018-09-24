import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const HouseType = ({ goToSlide, updateAppData, updateCustomerData }) => {
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
            onTileClick(5, 'Angaben zu Ihrem Grundstück', 5, 8, {
              key: 'houseType',
              value: 'Einfamilienhaus',
            })
          }
          title={'Einfamilienhaus'}
          iconName="icon icon--haus"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Angaben zu Ihrem Grundstück', 5, 8, {
              key: 'houseType',
              value: 'Mehrfamilien­haus',
            })
          }
          title={'Mehrfamilien­haus'}
          iconName="icon icon--mehrfamilienhaus"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Angaben zu Ihrem Grundstück', 5, 8, {
              key: 'houseType',
              value: 'Reihenhaus',
            })
          }
          title={'Reihenhaus'}
          iconName="icon icon--reihenhaus"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Angaben zu Ihrem Grundstück', 5, 8, {
              key: 'houseType',
              value: 'Doppelhaushälfte',
            })
          }
          title={'Doppelhaushälfte'}
          iconName="icon icon--doppelhaus"
        />
      </div>

      <ProgressBar />
      <Footer handlePrevClick={() => goToSlide(3)} handleNextClick={() => goToSlide(5)} />
    </div>
  );
};

export default connect(
  null,
  { updateAppData, updateCustomerData }
)(HouseType);