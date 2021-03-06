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

class ShopArea extends Component {
  state = {
    value: 300,
    selectedState: ""
  };

  handleSliderChange = value => {
    this.setState({ value });
  };

  handleNextClick = slideNumber => {
    const { goToSlide, updateCustomerData, updateAppData } = this.props;

    updateCustomerData({ key: "shopArea", value: this.state.value });
    updateAppData({ totalSteps: 10, currentStep: 5.5 });
    goToSlide(slideNumber);
  };

  handlePrevClick = () => {
    let currentStep = 3;
    if (
      (this.props.propertyType === "Gewerbe" &&
        this.props.selectedState === "Vermietet") ||
      (this.props.propertyType === "Gewerbe" &&
        this.props.selectedState === "Zum Teil vermietet")
    ) {
      currentStep = 3.5;
    }
    const { updateAppData, goToSlide } = this.props;
    goToSlide(null, "prev");
    updateAppData({
      totalSteps: 10,
      currentStep
    });
  };

  render() {
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

        <div className="directinput-note">
          <span className="icon-bulb bulb">Oder direkt eingeben:</span>
        </div>

        <div className="input-group slider-input">
          <span className="input-group-addon">Gewerbefläche</span>
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
          handleNextClick={() => this.handleNextClick(8)}
          glyphPrevBefore="glyphicon-arrow-left"
          glyphNextAfter="glyphicon-arrow-right"
        />
      </div>
    );
  }
}
export default connect(
  store => ({
    propertyType: selectCustomerDataItem(store, "propertyType"),
    selectedState: selectCustomerDataItem(store, "propertyOccupation")
  }),
  { updateAppData, updateCustomerData }
)(ShopArea);
