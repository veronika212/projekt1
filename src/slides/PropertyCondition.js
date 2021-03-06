import React from "react";
import { connect } from "react-redux";

import { updateAppData, selectAppDataItem } from "../store/appReducer";
import {
  updateCustomerData,
  selectCustomerDataItem
} from "../store/customerDataReducer";
import ProgressBar from "../components/common/ProgressBar/ProgressBar";
import Tile from "../components/common/Tile/Tile";
import Footer from "../components/common/Footer/Footer";

import "./PropertyCondition.css";

const PropertyCondition = ({
  goToSlide,
  updateAppData,
  updateCustomerData,
  selectedState,
  propertyType,
  error
}) => {
  const onTileClick = (totalSteps, data) => {
    let nextSlideNumber = 11;
    let currentStep = 9;
    if (propertyType === "Wohnung") {
      nextSlideNumber = 10;
      currentStep = 7;
    }

    goToSlide(nextSlideNumber);
    updateAppData({ totalSteps, currentStep });
    updateCustomerData(data);
  };

  const handlePrevClick = (currentStep, totalSteps) => {
    goToSlide(null, "prev");
    updateAppData({ totalSteps, currentStep });
  };

  const handleNextClick = () => {
    let nextSlideNumber = 11;
    let currentStep = 9;
    if (propertyType === "Wohnung") {
      nextSlideNumber = 10;
      currentStep = 7;
    }

    if (!selectedState) {
      updateAppData({ error: true });
      return;
    }

    updateAppData({
      totalSteps: 10,
      currentStep
    });
    goToSlide(nextSlideNumber);
  };
  return (
    <div>
      <div className="tiles-wrapper tile-wrapper--modifier">
        <Tile
          handleOnClick={() =>
            onTileClick(10, {
              key: "propertyCondition",
              value: "Sanierungsbedürftig"
            })
          }
          title={"Sanierungsbedürftig"}
          iconName="icon icon--renovierungsbeduerftig"
          selected={selectedState === "Sanierungsbedürftig" ? true : false}
          className={`tile-width ${error === true ? "tile-error" : null}`}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(10, {
              key: "propertyCondition",
              value: "Gepflegt"
            })
          }
          title={"Gepflegt"}
          iconName="icon icon--gepflegt"
          selected={selectedState === "Gepflegt" ? true : false}
          className={`tile-width ${error === true ? "tile-error" : null}`}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(10, {
              key: "propertyCondition",
              value: "Neu"
            })
          }
          title={"Neu"}
          iconName="icon icon--neuwertig"
          selected={selectedState === "Neu" ? true : false}
          className={`tile-width ${error === true ? "tile-error" : null}`}
        />
      </div>
      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick(5.5, 10)}
        handleNextClick={() => handleNextClick()}
        glyphPrevBefore="glyphicon-arrow-left"
        glyphNextAfter="glyphicon-arrow-right"
        nextDisabled={!selectedState}
      />
    </div>
  );
};

export default connect(
  store => ({
    selectedState: selectCustomerDataItem(store, "propertyCondition"),
    propertyType: selectCustomerDataItem(store, "propertyType"),
    error: selectAppDataItem(store, "error")
  }),
  { updateAppData, updateCustomerData }
)(PropertyCondition);
