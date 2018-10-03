import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAppData } from '../store/appReducer';
import { updateCustomerData, selectCustomerDataItem } from '../store/customerDataReducer';
import ReactSlider from '../components/common/ReactSlider/ReactSlider';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Footer from '../components/common/Footer/Footer';

class BuildYear extends Component {
  state = {
    value: 1960,
  };

  handleSliderChange = value => {
    this.setState({ value });
  };

  handleNextClick = () => {
    const { goToSlide, updateCustomerData, updateAppData, propertyType } = this.props;
    let slideNumber = 9;
    if (propertyType === 'Gewerbe') {
      slideNumber = 11;
    }
    updateCustomerData({ key: 'buildYear', value: this.state.value });
    updateAppData({
      totalSteps: 10,
      currentStep: 6,
    });
    goToSlide(slideNumber);
  };

  handlePrevClick = () => {
    const { updateAppData, goToSlide } = this.props;
    goToSlide(null, 'prev');
    updateAppData({
      totalSteps: 10,
      currentStep: 4,
    });
  };

  render() {
    return (
      <div>
        <div className="tiles-wrapper title-wrapper-height">
          <div className="slider__flex-wrapper">
            <span className="icon icon--baujahr slider-image" />
            <ReactSlider
              value={this.state.value}
              min={1900}
              max={new Date().getFullYear()}
              minLabel="2018"
              maxLabel="< 1900"
              onChange={this.handleSliderChange}
              reverse={true}
            />
          </div>
        </div>

        <div className="directinput-note">
          <span className="bulb">Oder direkt eingeben:</span>
        </div>

        <div className="input-group slider-input">
          <span className="input-group-addon">Baujahr</span>
          <input
            type="number"
            value={this.state.value}
            className="form-control output range-control-output"
            name="formdata[net_year_rent__c]"
            onChange={e => this.setState({ value: Number(e.target.value) })}
          />
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
  }),
  { updateAppData, updateCustomerData }
)(BuildYear);
