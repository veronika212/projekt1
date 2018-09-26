import React from 'react';
import { connect } from 'react-redux';

import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Tile from '../components/common/Tile/Tile';
import Footer from '../components/common/Footer/Footer';

import './PropertyCondition.css';

const PropertyCondition = ({ goToSlide, updateAppData, updateCustomerData }) => {
  const onTileClick = (nextSlideNumber, nextTitle, currentStep, totalSteps, data) => {
    goToSlide(nextSlideNumber);
    updateAppData({ title: nextTitle, totalSteps, currentStep });
    updateCustomerData(data);
  };
  return (
    <div>
      <div className="tiles-wrapper tile-wrapper--modifier">
        <Tile
          handleOnClick={() =>
            onTileClick(10, 'Gibt es einen Balkon oder eine Terrasse?', 6, 20, {
              key: 'propertyCondition',
              value: 'Renovierungs­bedürftig',
            })
          }
          title={'Renovierungs­bedürftig'}
          iconName="icon icon--renovierungsbeduerftig"
          className="tile-width"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(10, 'Gibt es einen Balkon oder eine Terrasse?', 6, 20, {
              key: 'propertyCondition',
              value: 'Gepflegt',
            })
          }
          title={'Gepflegt'}
          iconName="icon icon--gepflegt"
          className="tile-width"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(10, 'Gibt es einen Balkon oder eine Terrasse?', 6, 20, {
              key: 'propertyCondition',
              value: 'Neuwertig',
            })
          }
          title={'Neuwertig'}
          iconName="icon icon--neuwertig"
          className="tile-width"
        />
      </div>
      <ProgressBar />
      <Footer
        handlePrevClick={() => goToSlide(8)}
        handleNextClick={() => goToSlide(10)}
        nextDisabled={true}
      />
    </div>
  );
};

export default connect(
  null,
  { updateAppData, updateCustomerData }
)(PropertyCondition);
