import React, { Component } from 'react';
import Slider from 'react-rangeslider';

import './ReactSlider.css';

class ReactSlider extends Component {
  render() {
    const {
      orientation,
      min,
      max,
      value,
      minLabel,
      maxLabel,
      handleLabel,
      tooltip,
      onChange,
    } = this.props;
    return (
      <div className="react-slider__wrapper">
        <Slider
          value={value}
          orientation={orientation}
          onChange={onChange}
          className="react-slider"
          min={min}
          max={max}
          handleLabel={handleLabel}
          tooltip={tooltip}
        />
        <div className="react-slider__labels-wrapper">
          <span className="react-slider__labels">{minLabel}</span>
          <span className="react-slider__labels">{maxLabel}</span>
        </div>
      </div>
    );
  }
}

ReactSlider.defaultProps = {
  orientation: 'horizontal',
  min: 0,
  max: 100,
  value: 50,
  handleLabel: '',
  tooltip: false,
};

export default ReactSlider;
