import React from "react";

import { connect } from "react-redux";
import { updateAppData, selectAppDataItem } from "../store/appReducer";
import {
  updateCustomerData,
  selectCustomerDataItem
} from "../store/customerDataReducer";

import Footer from "../components/common/Footer/Footer";
import ProgressBar from "../components/common/ProgressBar/ProgressBar";

import Tile from "../components/common/Tile/Tile";

const BuildingType = ({
  goToSlide,
  updateAppData,
  updateCustomerData,
  selectedState,
  error
}) => {
  const onTileClick = (nextSlideNumber, currentStep, totalSteps, data) => {
    goToSlide(nextSlideNumber);
    updateAppData({ totalSteps, currentStep });
    updateCustomerData(data);
  };

  const handlePrevClick = (currentStep, totalSteps) => {
    goToSlide(null, "prev");
    updateAppData({ totalSteps, currentStep });
  };

  const handleNextClick = slideNumber => {
    if (!selectedState) {
      updateAppData({ error: true });
      return;
    }

    updateAppData({
      totalSteps: 10,
      currentStep: 5
    });
    goToSlide(slideNumber);
  };

  return (
    <div>
      <div className="tiles-wrapper">
        <Tile
          handleOnClick={() =>
            onTileClick(12, 5, 10, {
              key: "buildingType",
              value: "Sofort bebaubar"
            })
          }
          title={"Sofort bebaubar"}
          iconName="icon icon--bebaubar-kurzfristig"
          selected={selectedState === "Sofort bebaubar" ? true : false}
          className={error === true ? "tile-error" : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(12, 5, 10, {
              key: "buildingType",
              value: "Eingeschränkt bebaubar"
            })
          }
          title={"Eingeschränkt bebaubar"}
          iconName="icon icon--bebaubar-eingeschraenkt"
          selected={selectedState === "Eingeschränkt bebaubar" ? true : false}
          className={error === true ? "tile-error" : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(12, 5, 10, {
              key: "buildingType",
              value: "Nicht bebaubar"
            })
          }
          title={"Nicht bebaubar"}
          iconName="icon icon--bebaubar-nicht"
          selected={selectedState === "Nicht bebaubar" ? true : false}
          className={error === true ? "tile-error" : null}
        />
        <Tile
          handleOnClick={() =>
            onTileClick(12, 5, 10, {
              key: "buildingType",
              value: "Unbekannt"
            })
          }
          title={"Unbekannt"}
          iconName="icon icon--bebaubar-unbekannt"
          selected={selectedState === "Unbekannt" ? true : false}
          className={error === true ? "tile-error" : null}
        />
      </div>

      <ProgressBar />
      <Footer
        handlePrevClick={() => handlePrevClick(2.5, 10)}
        handleNextClick={() => handleNextClick(12)}
        glyphPrevBefore="glyphicon-arrow-left"
        glyphNextAfter="glyphicon-arrow-right"
        nextDisabled={!selectedState}
      />
    </div>
  );
};

export default connect(
  state => ({
    selectedState: selectCustomerDataItem(state, "buildingType"),
    error: selectAppDataItem(state, "error")
  }),
  { updateAppData, updateCustomerData }
)(BuildingType);
