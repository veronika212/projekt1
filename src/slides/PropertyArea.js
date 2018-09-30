import React, { Component } from "react";
import { connect } from "react-redux";

import { updateAppData, beforeAppData } from "../store/appReducer";
import { updateCustomerData } from "../store/customerDataReducer";
import ReactSlider from "../components/common/ReactSlider/ReactSlider";
import ProgressBar from "../components/common/ProgressBar/ProgressBar";
import Footer from "../components/common/Footer/Footer";

class PropertyArea extends Component {
  state = {
    value: 120
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
      currentStep
    } = this.props;

    updateCustomerData({ key: "propertyArea", value: this.state.value });
    updateAppData({
      title: "Wann wurde die Immobilie gebaut?",
      totalSteps: 8,
      currentStep: 3
    });
    goToSlide(slideNumber);
  };

  handlePrevClick = slideNumber => {
    const { beforeAppData, goToSlide } = this.props;
    goToSlide(slideNumber);
    beforeAppData({
      title: "Welcher Wohnstatus liegt vor?",
      totalSteps: 8,
      currentStep: 2
    });
  };

  render() {
    const { goToSlide } = this.props;
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
          handlePrevClick={() => this.handlePrevClick(1)}
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
)(PropertyArea);
