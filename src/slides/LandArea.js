import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAppData, beforeAppData } from '../store/appReducer';
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
    const { goToSlide, updateCustomerData, updateAppData } = this.props;

    updateCustomerData({ key: 'landArea', value: this.state.value });
    updateAppData({
      title: 'In welcher Region befindet sich das Objekt?',
      totalSteps: 10,
      currentStep: 5.5,
    });
    goToSlide(slideNumber);
  };

  handlePrevClick = slideNumber => {
    const { beforeAppData, goToSlide } = this.props;
    goToSlide(slideNumber);
    beforeAppData({
      title: 'Wie hoch ist die Nettojahresmiete des Objekts?',
      totalSteps: 10,
      currentStep: 4,
    });
  };

  render() {
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

        <div className="directinput-note">
          <span className="bulb">Oder direkt eingeben:</span>
        </div>

        <div className="input-group slider-input">
          <span className="input-group-addon">Grundstücksgröße</span>
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
          handlePrevClick={() => this.handlePrevClick(17)}
          handleNextClick={() => this.handleNextClick(8)}
          glyphPrevBefore="glyphicon-arrow-left"
          glyphNextAfter="glyphicon-arrow-right"
        />
      </div>
    );
  }
}
export default connect(
  null,
  { updateAppData, updateCustomerData, beforeAppData }
)(LendArea);
