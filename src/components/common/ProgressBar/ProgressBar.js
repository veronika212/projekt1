import React, { Component } from 'react';

import './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    const { currentStep, totalSteps } = this.props;
    return (
      <div className="progress">
        <div className="progress-bar">
          <span className="progress-bar-value">40%</span>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
