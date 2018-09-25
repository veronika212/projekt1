import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createRegionData } from '../store/customerDataReducer';
import { updateAppData } from '../store/appReducer';
import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';

import './RegionForm.css';

class RegionForm extends Component {
  state = {
    address: {
      streetAndNumber: '',
      zipCode: '',
      place: '',
    },
  };
  onSubmit = (values, nextTitle, totalSteps, currentStep, nextSliderNumber) => {
    this.props.createRegionData(values);
    console.log(createRegionData, 'values');
    this.props.updateAppData({ title: nextTitle, totalSteps, currentStep });
    this.props.goToSlide(nextSliderNumber);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="region">
          <span className="icon icon--at" />

          <form onSubmit={handleSubmit(this.onSubmit)} className="region-form">
            <div className="item">
              <label className="item__name">Straße & Nr.</label>
              <div className="item__field">
                <Field
                  name="address.streetAndNumber"
                  component="input"
                  type="text"
                  placeholder="Straße / Nr."
                  className="item__input"
                />
              </div>
            </div>

            <div className="item">
              <label className="item__name">
                PLZ <span className="star">*</span>
              </label>
              <div className="item__field">
                <Field
                  name="addresss.zipCode"
                  component="input"
                  type="text"
                  placeholder="Postleitzahl"
                  className="item__input"
                />
              </div>
            </div>

            <div className="item">
              <label className="item__name">
                Ort
                <span className="star">*</span>
              </label>
              <div className="item__field">
                <Field
                  name="addresss.place"
                  component="input"
                  type="text"
                  placeholder="Standort"
                  className="item__input"
                />
              </div>
            </div>
          </form>
        </div>
        <ProgressBar />
        <Footer
          handlePrevClick={() => this.goToSlide(3)}
          handleNextClick={() => this.goToSlide(5)}
          type={'submit'}
          className="required-explanation"
        />
      </div>
    );
  }
}

RegionForm = reduxForm({
  form: 'RegionForm',
})(RegionForm);

export default connect(
  null,
  { createRegionData, updateAppData }
)(RegionForm);
