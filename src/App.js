import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { countAppDataFromSlideNumber } from './utils/slidesUtils';
import {
  updateAppData,
  apendHistoryIndex,
  removeHistoryIndex,
  selectHistory,
} from './store/appReducer';

import PropertyType from './slides/PropertyType';
import PropertyOccupation from './slides/PropertyOccupation';
import PropertyCondition from './slides/PropertyCondition';
import PropertyExtension from './slides/PropertyExtension';
import HouseType from './slides/HouseType';
import LandType from './slides/LandType';
import BuildingType from './slides/BuildingType';
import BusinessType from './slides/BusinessType';
import ThankYouPage from './slides/ThankYouPage';
import RegionForm from './slides/RegionForm';
import PropetyPrice from './slides/PropertyPrice';
import PropertyArea from './slides/PropertyArea';
import LandArea from './slides/LandArea';
import BuildYear from './slides/BuildYear';
import ShopArea from './slides/ShopArea';
import ContactForm from './slides/ContactForm';

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
      adaptiveHeight: true,
    };

    this.goToSlide = (slideNumber, direction = 'next') => {
      let countedAppData = {};
      if (direction === 'next') {
        this.props.apendHistoryIndex(slideNumber);
        this.mainSlider.slickGoTo(slideNumber);
        countedAppData = countAppDataFromSlideNumber(slideNumber);
      } else if (direction === 'prev') {
        this.mainSlider.slickGoTo(this.props.history[1]);
        this.props.removeHistoryIndex();
        countedAppData = countAppDataFromSlideNumber(this.props.history[1]);
      }
      this.props.updateAppData({ ...countedAppData });
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
          <HouseType goToSlide={this.goToSlide} />
          <LandType goToSlide={this.goToSlide} />
          <BusinessType goToSlide={this.goToSlide} />
          <BuildingType goToSlide={this.goToSlide} />
          <PropertyArea goToSlide={this.goToSlide} />
          <PropetyPrice goToSlide={this.goToSlide} />
          <BuildYear goToSlide={this.goToSlide} />
          <PropertyCondition goToSlide={this.goToSlide} />
          <PropertyExtension goToSlide={this.goToSlide} />
          <RegionForm goToSlide={this.goToSlide} />
          <LandArea goToSlide={this.goToSlide} />
          <ShopArea goToSlide={this.goToSlide} />
          <ContactForm goToSlide={this.goToSlide} />
          <ThankYouPage />
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    app: store.app,
    customerData: store.customerData,
    history: selectHistory(store),
  };
};

export default connect(
  mapStateToProps,
  { updateAppData, apendHistoryIndex, removeHistoryIndex }
)(App);
