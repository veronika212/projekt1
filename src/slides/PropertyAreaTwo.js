import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAppData, beforeAppData } from '../store/appReducer';
import { updateCustomerData } from '../store/customerDataReducer';
import ReactSlider from '../components/common/ReactSlider/ReactSlider';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import Footer from '../components/common/Footer/Footer';

class PropertyAreaTwo extends Component {
  state = {
    value: 100,
  };

  handleSliderChange = value => {
    this.setState({ value });
  };

  handleNextClick = slideNumber => {
    const { goToSlide, updateCustomerData, updateAppData } = this.props;

    updateCustomerData({ key: 'propertyArea', value: this.state.value });
    updateAppData({
      title: 'Wann wurde die Immobilie gebaut?',
      totalSteps: 10,
      currentStep: 5,
    });
    goToSlide(slideNumber);
  };

  handlePrevClick = slideNumber => {
    const { beforeAppData, goToSlide } = this.props;
    goToSlide(slideNumber);
    beforeAppData({
      title: 'Wie hoch ist die Nettojahresmiete des Objekts?',
      totalSteps: 10,
      currentStep: 3.5,
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
          handlePrevClick={() => this.handlePrevClick(7)}
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
)(PropertyAreaTwo);
