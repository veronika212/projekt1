import React, { Component } from "react";
import { connect } from "react-redux";

import "./ProgressBar.css";

class ProgressBar extends Component {
  render() {
    const { app, className } = this.props;
    if (!app.currentStep) {
      return null;
    }

    if (app.title === "Um welche Art von Immobilie handelt es sich?") {
      return (
        <div className="progress">
          <div className={`progress-bar ${className}`} />
        </div>
      );
    } else {
      const progressBarWidth = Math.round(
        (app.currentStep / app.totalSteps) * 100
      );

      return (
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${progressBarWidth}%` }}
          >
            <span className={`progress-bar-value ${className}`}>
              {progressBarWidth}%
            </span>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = store => {
  return {
    app: store.app
  };
};

export default connect(mapStateToProps)(ProgressBar);
