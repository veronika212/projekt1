import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';
import ReactSlider from '../components/common/ReactSlider/ReactSlider';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Footer from '../components/common/Footer/Footer';

class PropertyPrice extends Component {
  state = {
    value: 1500,
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

    updateCustomerData({ key: 'propertyPrice', value: this.state.value });
    updateAppData({ title: 'Update title', totalSteps: 20, currentStep: 7 });
    goToSlide(slideNumber);
  };

  render() {
    const { goToSlide } = this.props;
    return (
      <div>
        <div className="tiles-wrapper tile-wrapper--modifier">
          <div className="slider__flex-wrapper">
            <span className="icon icon--nettomiete slider-image" />
            <ReactSlider
              value={this.state.value}
              min={1000}
              max={3000}
              minLabel="< 1000"
              maxLabel=">3000"
              onChange={this.handleSliderChange}
            />
          </div>
        </div>

        <div className="input-group slider-input">
          <span className="input-group-addon">Nettojahresmiete</span>
          <input
            type="number"
            value={this.state.value}
            className="form-control output range-control-output"
            name="formdata[net_year_rent__c]"
            onChange={e => this.setState({ value: Number(e.target.value) })}
          />
          <span className="input-group-addon">€</span>
        </div>

        <ProgressBar />
        <Footer
          handlePrevClick={() => goToSlide(3)}
          handleNextClick={() => this.handleNextClick(1)}
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
)(PropertyPrice);
