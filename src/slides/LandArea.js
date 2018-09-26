import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';
import ReactSlider from '../components/common/ReactSlider/ReactSlider';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Footer from '../components/common/Footer/Footer';

class LendArea extends Component {
  state = {
    value: 800,
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

    updateCustomerData({ key: 'landArea', value: this.state.value });
    updateAppData({
      title: 'In welcher Region befindet sich das Objekt?',
      totalSteps: 10,
      currentStep: 9,
    });
    goToSlide(slideNumber);
  };

  render() {
    const { goToSlide } = this.props;
    return (
      <div>
        <div className="tiles-wrapper title-wrapper-height">
          <div className="slider__flex-wrapper">
            <span className="icon icon--grundstuecksgroesse slider-image" />
            <ReactSlider
              value={this.state.value}
              min={100}
              max={2500}
              minLabel="< 100 m²"
              maxLabel="> 2500 m²"
              onChange={this.handleSliderChange}
            />
          </div>
        </div>

        <div class="input-group slider-input">
          <span class="input-group-addon">Grundstücksgröße</span>
          <input
            type="number"
            value={this.state.value}
            class="form-control output range-control-output"
            name="formdata[net_year_rent__c]"
            onChange={e => this.setState({ value: Number(e.target.value) })}
          />
          <span class="input-group-addon">m²</span>
        </div>

        <ProgressBar />
        <Footer
          handlePrevClick={() => goToSlide(4)}
          handleNextClick={() => this.handleNextClick(6)}
        />
      </div>
    );
  }
}
export default connect(
  null,
  { updateAppData, updateCustomerData }
)(LendArea);
