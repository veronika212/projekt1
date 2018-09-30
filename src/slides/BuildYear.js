import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';
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

  handleNextClick = slideNumber => {
    const {
      goToSlide,
      updateCustomerData,
      updateAppData,
      nextTitle,
      totalSteps,
      currentStep,
    } = this.props;

    updateCustomerData({ key: 'bildYear', value: this.state.value });
    updateAppData({
      title: 'In welchem Zustand befindet sich die Immobilie?',
      totalSteps: 8,
      currentStep: 4,
    });
    goToSlide(slideNumber);
  };

  render() {
    const { goToSlide } = this.props;
    return (
      <div>
        <div className="tiles-wrapper title-wrapper-height">
          <div className="slider__flex-wrapper">
            <span className="icon icon--baujahr slider-image" />
            <ReactSlider
              value={this.state.value}
              min={1900}
              max={2018}
              minLabel="2018"
              maxLabel="< 1900"
              onChange={this.handleSliderChange}
            />
          </div>
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
          handlePrevClick={() => goToSlide(6)}
          handleNextClick={() => this.handleNextClick(9)}
          glyphPrevBefore="glyphicon-arrow-left"
          glyphNextAfter="glyphicon-arrow-right"
        />
      </div>
    );
  }
}
export default connect(
  null,
  { updateAppData, updateCustomerData }
)(BuildYear);
