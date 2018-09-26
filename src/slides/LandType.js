import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const LandType = ({ goToSlide, updateAppData, updateCustomerData }) => {
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
            onTileClick(5, 'Ist das Grundstück bebaubar?', 3, 20, {
              key: 'landType',
              value: 'Baugrundstück',
            })
          }
          title={'Baugrundstück'}
          iconName="icon icon--baugrundstueck"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Ist das Grundstück bebaubar?', 3, 20, {
              key: 'landType',
              value: 'Bauerwartungs­land',
            })
          }
          title={'Bauerwartungs­land'}
          iconName="icon icon--bauerwartungsland"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Ist das Grundstück bebaubar?', 3, 20, {
              key: 'landType',
              value: 'Gewerbe­grundstück',
            })
          }
          title={'Gewerbe­grundstück'}
          iconName="icon icon--gewerbegrundstueck"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(5, 'Ist das Grundstück bebaubar?', 3, 20, {
              key: 'landType',
              value: 'Agrarfläche',
            })
          }
          title={'Agrarfläche'}
          iconName="icon icon--agrarflaeche"
        />
      </div>

      <ProgressBar />
      <Footer handlePrevClick={() => goToSlide(0)} handleNextClick={() => goToSlide(5)} />
    </div>
  );
};

export default connect(
  null,
  { updateAppData, updateCustomerData }
)(LandType);
