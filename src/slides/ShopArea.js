import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';
import ReactSlider from '../components/common/ReactSlider/ReactSlider';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Footer from '../components/common/Footer/Footer';

class ShopArea extends Component {
  state = {
    value: 300,
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
    updateAppData({ title: 'Update title', totalSteps: 20, currentStep: 13 });
    goToSlide(slideNumber);
  };

  render() {
    const { goToSlide } = this.props;
    return (
      <div>
        <div className="tiles-wrapper tile-wrapper--modifier">
          <div className="slider__flex-wrapper">
            <span className="icon icon--gewerbeflaeche slider-image" />
            <ReactSlider
              value={this.state.value}
              min={30}
              max={1000}
              minLabel="< 30 m²"
              maxLabel="> 1000 m²"
              onChange={this.handleSliderChange}
            />
          </div>
        </div>

        <div class="input-group slider-input">
          <span class="input-group-addon">Gewerbefläche</span>
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
          handlePrevClick={() => goToSlide(13)}
          handleNextClick={() => this.handleNextClick(5)}
        />
      </div>
    );
  }
}
export default connect(
  null,
  { updateAppData, updateCustomerData }
)(ShopArea);
