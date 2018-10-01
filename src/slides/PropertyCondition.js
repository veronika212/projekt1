import React from 'react';
import { connect } from 'react-redux';

import { updateAppData, beforeAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Tile from '../components/common/Tile/Tile';
import Footer from '../components/common/Footer/Footer';

import './PropertyCondition.css';

const PropertyCondition = ({
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
    goToSlide(8);
    beforeAppData({ title: beforeTitle, totalSteps, currentStep });
  };

  const handleNextClick = slideNumber => {
    updateCustomerData({ key: 'propertyExtension', value: { selectedState } });
    updateAppData({
      title: 'Gibt es einen Balkon oder eine Terrasse?',
      totalSteps: 10,
      currentStep: 7,
    });
    goToSlide(slideNumber);
  };

  return (
    <div>
      <div className="tiles-wrapper tile-wrapper--modifier">
        <Tile
          handleOnClick={() =>
            onTileClick(10, 'Gibt es einen Balkon oder eine Terrasse?', 7, 10, {
              key: 'propertyCondition',
              value: 'Renovierungs­bedürftig',
            })
          }
          title={'Renovierungs­bedürftig'}
          iconName="icon icon--renovierungsbeduerftig"
          selected={selectedState === 'Renovierungs­bedürftig' ? true : false}
          className="tile-width"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(10, 'Gibt es einen Balkon oder eine Terrasse?', 7, 10, {
              key: 'propertyCondition',
              value: 'Gepflegt',
            })
          }
          title={'Gepflegt'}
          iconName="icon icon--gepflegt"
          selected={selectedState === 'Gepflegt' ? true : false}
          className="tile-width"
        />
        <Tile
          handleOnClick={() =>
            onTileClick(10, 'Gibt es einen Balkon oder eine Terrasse?', 7, 10, {
              key: 'propertyCondition',
              value: 'Neuwertig',
            })
          }
          title={'Neuwertig'}
          iconName="icon icon--neuwertig"
          selected={selectedState === 'Neuwertig' ? true : false}
          className="tile-width"
        />
      </div>
      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick('Wann wurde die Immobilie gebaut?', 5, 10)}
        handleNextClick={() => handleNextClick(10)}
        glyphPrevBefore="glyphicon-arrow-left"
        glyphNextAfter="glyphicon-arrow-right"
        nextDisabled={!selectedState}
      />
    </div>
  );
};

export default connect(
  state => ({
    selectedState: selectCustomerDataItem(state, 'propertyCondition'),
  }),
  { updateAppData, updateCustomerData, beforeAppData }
)(PropertyCondition);
