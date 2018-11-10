import React, { Component } from "react";
import { connect } from "react-redux";

import { updateAppData } from "../store/appReducer";
import {
  updateCustomerData,
  selectCustomerDataItem
} from "../store/customerDataReducer";
import ReactSlider from "../components/common/ReactSlider/ReactSlider";
import ProgressBar from "../components/common/ProgressBar/ProgressBar";
import Footer from "../components/common/Footer/Footer";

class PropertyPrice extends Component {
  state = {
    value: 10000
  };

  handleSliderChange = value => {
    this.setState({ value });
  };

  handleNextClick = () => {
    let slideNumber = 6;
    const {
      goToSlide,
      updateCustomerData,
      updateAppData,
      propertyType
    } = this.props;
    if (propertyType === "Gewerbe") {
      slideNumber = 13;
    }
    updateCustomerData({ key: "propertyPrice", value: this.state.value });
    updateAppData({
      totalSteps: 10,
      currentStep: 4
    });
    goToSlide(slideNumber);
  };

  handlePrevClick = () => {
    const { updateAppData, goToSlide } = this.props;
    goToSlide(null, "prev");
    updateAppData({
      totalSteps: 10,
      currentStep: 3
    });
  };

  render() {
    return (
      <div>
        <div className="tiles-wrapper tile-wrapper--modifier">
          <div className="slider__flex-wrapper">
            <span className="icon icon--nettomiete slider-image" />
            <ReactSlider
              value={this.state.value}
              min={1000}
              max={30000}
              minLabel="< 1000 €"
              maxLabel="> 30000 €"
              onChange={this.handleSliderChange}
            />
          </div>
        </div>

        <div className="directinput-note">
          <span className="icon-bulb bulb">Oder direkt eingeben:</span>
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
    propertyType: selectCustomerDataItem(store, "propertyType")
  }),
  { updateAppData, updateCustomerData }
)(PropertyPrice);
