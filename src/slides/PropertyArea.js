import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';
import ReactSlider from '../components/common/ReactSlider/ReactSlider';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Footer from '../components/common/Footer/Footer';

class PropertyArea extends Component {
  state = {
    value: 100,
    selectedState: '',
  };

  handleSliderChange = value => {
    this.setState({ value });
  };

  handleNextClick = () => {
    let slideNumber = 8;
    let currentStep = 5.5;
    if (this.props.propertyType === 'Haus') {
      slideNumber = 12;
      currentStep = 5;
    }

    const { goToSlide, updateCustomerData, updateAppData } = this.props;

    updateCustomerData({ key: 'propertyArea', value: this.state.value });
    updateAppData({
      totalSteps: 10,
      currentStep,
    });
    goToSlide(slideNumber);
  };

  handlePrevClick = () => {
    let currentStep = 3;
    if (
      (this.props.propertyType === 'Haus' && this.props.selectedState === 'Vermietet') ||
      (this.props.propertyType === 'Haus' && this.props.selectedState === 'Teilweise vermietet')
    ) {
      currentStep = 3.5;
    }
    const { updateAppData, goToSlide, selectedState } = this.props;
    goToSlide(null, 'prev');
    updateAppData({
      totalSteps: 10,
      currentStep,
    });
  };

  render() {
    return (
      <div>
        <div className="tiles-wrapper title-wrapper-height">
          <div className="slider__flex-wrapper">
            <span className="icon icon--wohnflaeche slider-image" />
            <ReactSlider
              value={this.state.value}
              min={20}
              max={300}
              minLabel="< 20 m²"
              maxLabel="> 300 m²"
              onChange={this.handleSliderChange}
            />
          </div>
        </div>

        <div className="directinput-note">
          <span className="bulb">Oder direkt eingeben:</span>
        </div>
        <div className="input-group slider-input">
          <span className="input-group-addon">Wohnfläche</span>
          <input
            type="number"
            value={this.state.value}
            className="form-control output range-control-output"
            name="formdata[net_year_rent__c]"
            onChange={e => this.setState({ value: Number(e.target.value) })}
          />
          <span className="input-group-addon">m²</span>
        </div>

        <ProgressBar />
        <Footer
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          glyphPrevBefore="glyphicon-arrow-left"
          glyphNextAfter="glyphicon-arrow-right"
        />
      </div>
    );
  }
}
export default connect(
  store => ({
    propertyType: selectCustomerDataItem(store, 'propertyType'),
    selectedState: selectCustomerDataItem(store, 'propertyOccupation'),
  }),
  { updateAppData, updateCustomerData }
)(PropertyArea);
