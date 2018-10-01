import React from 'react';
import { connect } from 'react-redux';
import { updateAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';
import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Tile from '../components/common/Tile/Tile';

const PropertyType = ({ goToSlide, updateAppData, updateCustomerData, selectedState }) => {
  const onTileClick = (nextSlideNumber, nextTitle, currentStep, totalSteps, data) => {
    goToSlide(nextSlideNumber);
    updateAppData({ title: nextTitle, totalSteps, currentStep });
    updateCustomerData(data);
  };

  const handleNextClick = slideNumber => {
    updateCustomerData({ key: 'propertyOccupation', value: { selectedState } });
    updateAppData({
      title: 'Welche Wohnfläche besitzt das Objekt?',
      totalSteps: 10,
      currentStep: 3,
    });
    goToSlide(slideNumber);
  };

  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(1, 'Welcher Wohnstatus liegt vor?', 3, 10, {
              key: 'propertyType',
              value: 'Wohnung',
            })
          }
          title={'Wohnung'}
          iconName="icon icon--wohnung"
          selected={selectedState === 'Wohnung' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(2, 'Angaben zu Ihrem Haus', 2, 10, {
              key: 'propertyType',
              value: 'Haus',
            })
          }
          title={'Haus'}
          iconName="icon icon--haus"
          selected={selectedState === 'Haus' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(3, 'Angaben zu Ihrem Grundstück', 2.5, 10, {
              key: 'propertyType',
              value: 'Grundstück',
            })
          }
          title={'Grundstück'}
          iconName="icon icon--grundstueck"
          selected={selectedState === 'Grundstück' ? true : false}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(4, 'Angaben zu Ihrer Gewerbeimmobilie', 2, 10, {
              key: 'propertyType',
              value: 'Gewerbe',
            })
          }
          title={'Gewerbe'}
          iconName="icon icon--gewerbe"
          selected={selectedState === 'Gewerbe' ? true : false}
        />
      </div>

      <ProgressBar className="progressBar-width " />
      <Footer
        handlePrevClick={() => goToSlide(0)}
        handleNextClick={() => handleNextClick(1)}
        className="visibility"
        nextDisabled={!selectedState}
        glyphNextAfter="glyphicon-arrow-right"
      />
    </div>
  );
};

export default connect(
  state => ({
    selectedState: selectCustomerDataItem(state, 'propertyType'),
  }),
  { updateAppData, updateCustomerData }
)(PropertyType);
