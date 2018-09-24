import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import PropertyType from './slides/PropertyType';
import PropertyOccupation from './slides/PropertyOccupation';
import PropertyCondition from './slides/PropertyCondition';
import PropertyExtension from './slides/PropertyExtension';
import HouseType from './slides/HouseType';
import LandType from './slides/LandType';
import BuildingType from './slides/BuildingType';
import BusinessType from './slides/BusinessType';
import ThankYouPage from './slides/ThankYouPage';
import Region from './slides/Region';

import './App.css';

class App extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      swipe: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    this.goToSlide = slideNumber => {
      this.mainSlider.slickGoTo(slideNumber);
    };
    const { app } = this.props;
    return (
      <div className="app">
        <div className="app__header">
          <h2 className="app__title">{app.title}</h2>
        </div>
        <Slider {...settings} ref={slider => (this.mainSlider = slider)}>
          <PropertyType goToSlide={this.goToSlide} />
          <PropertyOccupation goToSlide={this.goToSlide} />
          <PropertyCondition goToSlide={this.goToSlide} />
          <PropertyExtension goToSlide={this.goToSlide} />
          <HouseType goToSlide={this.goToSlide} />
          <LandType goToSlide={this.goToSlide} />
          <BuildingType goToSlide={this.goToSlide} />
          <BusinessType goToSlide={this.goToSlide} />
          <Region />
          <ThankYouPage />
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
