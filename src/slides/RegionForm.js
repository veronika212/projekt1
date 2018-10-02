import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import { createRegionData, updateCustomerData } from '../store/customerDataReducer';
import { updateAppData } from '../store/appReducer';
import Footer from '../components/common/Footer/Footer';
import ProgressBar from '../components/common/ProgressBar/ProgressBar';
import { required, number, zip, renderField } from '../utils/formUtils';
import './RegionForm.css';

const selector = formValueSelector('RegionForm');

class RegionForm extends Component {
  onSubmit = (values, nextTitle, totalSteps, currentStep, nextSliderNumber) => {
    this.props.createRegionData(values);
    console.log(createRegionData, 'values');
    this.props.updateAppData({
      title: 'Wer soll die Bewertung erhalten?',
      totalSteps: 10,
      currentStep: 9,
    });
    this.props.goToSlide(nextSliderNumber);
  };

  handleNextClick = () => {
    const { valid, updateCustomerData, streetNumber, zipCode, place, goToSlide } = this.props;
    if (valid) {
      updateCustomerData({
        key: 'address',
        value: {
          streetAndNumber: streetNumber,
          zipCode: zipCode,
          place: place,
        },
      });
      goToSlide(14);
    }
  };

  handlePrevClick = () => {
    const { updateAppData, goToSlide } = this.props;
    goToSlide(null, 'prev');
    updateAppData({
      totalSteps: 10,
      currentStep: 8,
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="region">
          <span className="icon icon--at" />
          <form onSubmit={handleSubmit(this.onSubmit)} className="region-form">
            <Field
              name="address.streetAndNumber"
              component={renderField}
              type="text"
              placeholder="Straße / Nr."
              className="item__input"
              validate={[required]}
              label="Straße & Nr."
            />

            <Field
              name="address.zipCode"
              component={renderField}
              type="text"
              placeholder="Postleitzahl"
              className="item__input"
              validate={[required, number, zip]}
              label={
                <span>
                  PLZ
                  <span className="required-asterisk">*</span>
                </span>
              }
            />

            <Field
              name="address.place"
              component={renderField}
              type="text"
              placeholder="Standort"
              className="item__input"
              validate={[required]}
              label={
                <span>
                  ORT
                  <span className="required-asterisk">*</span>
                </span>
              }
            />
          </form>
        </div>
        <ProgressBar />
        <Footer
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={this.handleNextClick}
          type={'submit'}
          className="required-explanation"
          glyphPrevBefore="glyphicon-arrow-left"
          glyphNextAfter="glyphicon-arrow-right"
        />
      </div>
    );
  }
}

RegionForm = reduxForm({
  form: 'RegionForm',
})(RegionForm);

export default connect(
  state => ({
    streetNumber: selector(state, 'address.streetAndNumber'),
    zipCode: selector(state, 'address.zipCode'),
    place: selector(state, 'address.place'),
  }),
  { createRegionData, updateAppData, updateCustomerData }
)(RegionForm);
