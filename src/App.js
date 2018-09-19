import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import HouseType from './steps/HouseType';
import Region from './steps/Region';

import './App.css';

class App extends Component {
  state = {
    currentSlide: 0,
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      swipe: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    console.log(this.props);

    this.goToSlide = slideNumber => {
      this.mainSlider.slickGoTo(slideNumber);
    };
    const { app } = this.props;
    return (
      <div className="App">
        <h2>{app.title}</h2>
        <Slider {...settings} ref={slider => (this.mainSlider = slider)}>
          <HouseType goToSlide={this.goToSlide} />
          <Region goToSlide={this.goToSlide} />
          <div>
            <p>Slide 3</p>
          </div>
          <div>
            <p>Slide 4</p>
          </div>
          <div>
            <p>Slide 5</p>
          </div>
          <div>
            <p>Slide 6</p>
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    app: store.app,
    customerData: store.customerData,
  };
};

export default connect(mapStateToProps)(App);
