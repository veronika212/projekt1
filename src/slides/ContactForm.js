import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import { createContactData, updateCustomerData } from '../store/customerDataReducer';
import { updateAppData } from '../store/appReducer';
import {
  requiredSentens1,
  requiredSentens2,
  requiredSentens3,
  requiredSentens4,
  requiredSentens5,
  number,
  email,
  renderInput,
  renderRationBtn,
  renderCheckBox,
} from '../utils/formUtils';
import { selectOptions } from '../utils/extNumbers';

import './ContactForm.css';

const selector = formValueSelector('ContactForm');

class ContactForm extends Component {
  onSubmit = (values, nextTitle, totalSteps, currentStep, nextSliderNumber) => {
    this.props.createContactData(values);
    console.log(createContactData, 'values');
    this.props.updateAppData({
      title: 'Wer soll die Bewertung erhalten?',
      totalSteps: 20,
      currentStep: 20,
    });
    this.props.goToSlide(nextSliderNumber);
  };

  handleNextClick = () => {
    const {
      valid,
      updateCustomerData,
      sex,
      firstName,
      lastName,
      mail,
      preset,
      phone,
      goToSlide,
    } = this.props;
    if (valid) {
      updateCustomerData({
        key: 'contact',
        value: {
          sex: sex,
          firstName: firstName,
          lastName: lastName,
          mail: mail,
          preset: preset,
          phone: phone,
          information: false,
        },
      });
      goToSlide(16);
    }
  };

  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <div>
        <div className="contact-page">
          <form className="contact-form" onSubmit={handleSubmit(this.onSubmit)}>
            <div className="contact-form__form">
              <div className="contact-items--sex">
                <Field
                  className="contact-items__radio"
                  name="contact.sex"
                  value="Herr"
                  component={renderRationBtn}
                  label="Herr"
                  type="radio"
                  validate={[requiredSentens1]}
                  checked={false}
                />
                <Field
                  className="contact-items__radio"
                  name="contact.sex"
                  component={renderRationBtn}
                  label="Frau"
                  type="radio"
                  value="Frau"
                  validate={[requiredSentens1]}
                  checked={false}
                />
              </div>

              <div className="contact-items">
                <Field
                  className="contact-items__item contact-items__item--first-name"
                  name="contact.firstName"
                  component={renderInput}
                  type="text"
                  placeholder="Vorname"
                  validate={[requiredSentens2]}
                />

                <Field
                  className="contact-items__item contact-items__item--last-name"
                  name="contact.lastName"
                  component={renderInput}
                  type="text"
                  placeholder="Name"
                  validate={[requiredSentens3]}
                />
              </div>

              <div className="contact-items">
                <Field
                  className="contact-items__item contact-items__item--email"
                  name="contact.mail"
                  component={renderInput}
                  type="email"
                  placeholder="E-mail"
                  validate={[requiredSentens4, email]}
                />
              </div>

              <div className="contact-items">
                <Field
                  className="contact-items__item contact-items__item--ext"
                  name="contact.preset"
                  component="select"
                >
                  <option value="Deutschland / +49">Österreich / +43</option>
                  <option value="Polen / +48">Deutschland / +49</option>
                  <option value="Norwegen / +47">Schweiz / +41</option>
                  <option disabled={true}>Andere Länder</option>
                  {selectOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>

                <Field
                  className="contact-items__item contact-items__item--phone"
                  name="contact.phone"
                  component={renderInput}
                  type="tel"
                  placeholder="Telefonnummer"
                  validate={[requiredSentens5, number]}
                />
              </div>

              <Field
                className="contact-items__item"
                name="contact.information"
                id="contact"
                component={renderCheckBox}
                labelClass="contact-form__confirm-label"
                label={
                  <p>
                    Ich stimme den <a href="/datenschutz/">Datenschutzbestimmungen </a>
                    und einer Kontaktaufnahme durch immoverkauf24 per E-Mail oder Telefon für
                    Rückfragen oder zu Informationszwecken zu.
                  </p>
                }
              />
            </div>

            <div className="contact-page__content">
              <h3 className="form-notice__title">Ihre Immobilienbewertung</h3>
              <ul className="form-notice">
                <li className="form-notice__item">
                  <i className="icon icon-shield" />
                  100% kostenlos
                </li>
                <li className="form-notice__item">
                  <i className="icon icon-shield" />
                  100 % unverbindlich
                </li>
                <li className="form-notice__item">
                  <i className="icon icon-shield" />
                  100 % professionell
                </li>
              </ul>

              <img
                className="bewertungbadge"
                src="/images/bewertung_badge2.png"
                alt="Professionelle Immobilienbewertung mit hoher Präzision"
              />
              <button
                className="contact-form__next-btn"
                type="button"
                disabled={pristine || submitting || !valid}
              >
                Jetzt kostenlose Bewertung erhalten
                <span className="glyphicon glyphicon-send" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ContactForm = reduxForm({
  form: 'ContactForm',
})(ContactForm);

export default connect(
  state => ({
    sex: selector(state, 'contact.sex'),
    firstName: selector(state, 'contact.firstName'),
    lastName: selector(state, 'contact.lastName'),
    mail: selector(state, 'contant.mail'),
    preset: selector(state, 'contact.preset'),
    phone: selector(state, 'contact.phone'),
    information: false,
  }),
  { createContactData, updateAppData, updateCustomerData }
)(ContactForm);
