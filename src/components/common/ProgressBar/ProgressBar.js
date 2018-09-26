import React, { Component } from "react";
import { connect } from "react-redux";

import "./ProgressBar.css";

class ProgressBar extends Component {
  render() {
    const { app } = this.props;
    if (!app.currentStep) {
      return null;
    }

    const progressBarWidth = Math.round(
      (app.currentStep / app.totalSteps) * 100
    );
    return (
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}>
          <span className="progress-bar-value">{progressBarWidth}%</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    app: store.app
  };
};

export default connect(mapStateToProps)(ProgressBar);
