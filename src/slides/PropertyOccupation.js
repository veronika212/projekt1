import React from 'react';

import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';

import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import Tile from '../components/common/Tile/Tile';

const PropertyOccupation = ({ goToSlide, updateAppData }) => {
  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() => goToSlide(0)}
          title={'Selbst bewohnt'}
          iconName="icon icon--wohnung"
        />
        <Tile handleOnClick={() => goToSlide(0)} title={'Frei'} iconName="icon icon--haus" />
        <Tile
          handleOnClick={() => goToSlide(0)}
          title={'Vermietet'}
          iconName="icon icon--grundstueck"
        />
        <Tile
          handleOnClick={() => goToSlide(0)}
          title={'Teilweise vermietet'}
          iconName="icon icon--gewerbe"
        />
      </div>

      <ProgressBar />
      <Footer handlePrevClick={() => goToSlide(0)} handleNextClick={() => goToSlide(1)} />
    </div>
  );
};

export default connect(
  null,
  { updateAppData }
)(PropertyOccupation);
