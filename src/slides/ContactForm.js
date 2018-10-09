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

import './ContactForm.css';

const selector = formValueSelector('ContactForm');

const selectOptions = [
  {
    label: 'Afghanistan / +93',
    value: 'Afghanistan / +93',
  },
  {
    label: 'Ägypten / +20',
    value: 'Ägypten / +20',
  },
  {
    label: 'Aland / +35818',
    value: 'Aland / +35818',
  },
  {
    label: 'Albanien / +355',
    value: 'Albanien / +355',
  },
  {
    label: 'Algerien / +213',
    value: 'Algerien / +213',
  },
  {
    label: 'Amerikanisch-Samoa / +1684',
    value: 'Amerikanisch-Samoa / +1684',
  },
  {
    label: 'Amerikanische Jungferninseln / +1340',
    value: 'Amerikanische Jungferninseln / +1340',
  },
  {
    label: 'Andorra / +376',
    value: 'Andorra / +376',
  },
  {
    label: 'Angola / +244',
    value: 'Angola / +244',
  },
  {
    label: 'Anguilla / +1264',
    value: 'Anguilla / +1264',
  },
  {
    label: 'Antarktis / +672',
    value: 'Antarktis / +672',
  },
  {
    label: 'Antigua und Barbuda / +1268',
    value: 'Antigua und Barbuda / +1268',
  },
  {
    label: 'Äquatorialguinea / +240',
    value: 'Äquatorialguinea / +240',
  },
  {
    label: 'Argentinien / +54',
    value: 'Argentinien / +54',
  },
  {
    label: 'Armenien / +374',
    value: 'Armenien / +374',
  },
  {
    label: 'Aruba / +297',
    value: 'Aruba / +297',
  },
  {
    label: 'Ascension / +247',
    value: 'Ascension / +247',
  },
  {
    label: 'Aserbaidschan / +994',
    value: 'Aserbaidschan / +994',
  },
  {
    label: 'Äthiopien / +251',
    value: 'Äthiopien / +251',
  },
  {
    label: 'Australien / +61',
    value: 'Australien / +61',
  },
  {
    label: 'Bahamas / +1242',
    value: 'Bahamas / +1242',
  },
  {
    label: 'Bahrain / +973',
    value: 'Bahrain / +973',
  },
  {
    label: 'Bangladesch / +880',
    value: 'Bangladesch / +880',
  },
  {
    label: 'Barbados / +1246',
    value: 'Barbados / +1246',
  },
  {
    label: 'Belgien / +32',
    value: 'Belgien / +32',
  },
  {
    label: 'Belize / +51',
    value: 'Belize / +51',
  },
  {
    label: 'Benin / +229',
    value: 'Benin / +229',
  },
  {
    label: 'Bermuda / +1441',
    value: 'Bermuda / +1441',
  },
  {
    label: 'Bhutan / +975',
    value: 'Bhutan / +975',
  },
  {
    label: 'Bolivien / +591',
    value: 'Bolivien / +591',
  },
  {
    label: 'Bosnien und Herzegowina / +387',
    value: 'Bosnien und Herzegowina / +387',
  },
  {
    label: 'Botswana / +267',
    value: 'Botswana / +267',
  },
  {
    label: 'Brasilien / +55',
    value: 'Brasilien / +55',
  },
  {
    label: 'Britische Jungferninseln / +1284',
    value: 'Britische Jungferninseln / +1284',
  },
  {
    label: 'Brunei / +673',
    value: 'Brunei / +673',
  },
  {
    label: 'Bulgarien / +359',
    value: 'Bulgarien / +359',
  },
  {
    label: 'Burkina Faso / +226',
    value: 'Burkina Faso / +226',
  },
  {
    label: 'Burundi / +257',
    value: 'Burundi / +257',
  },
  {
    label: 'Chile / +56',
    value: 'Chile / +56',
  },
  {
    label: 'China, Volksrepublik / +86',
    value: 'China, Volksrepublik / +86',
  },
  {
    label: 'Cookinseln / +682',
    value: 'Cookinseln / +682',
  },
  {
    label: 'Costa Rica / +56',
    value: 'Costa Rica / +56',
  },
  {
    label: 'Republik Côte d’Ivoire / +225',
    value: 'Republik Côte d’Ivoire / +225',
  },
  {
    label: 'Dänemark / +45',
    value: 'Dänemark / +45',
  },
  {
    label: 'St. Helena und Nebengebiete / +290',
    value: 'St. Helena und Nebengebiete / +290',
  },
  {
    label: 'Diego Garcia / +246',
    value: 'Diego Garcia / +246',
  },
  {
    label: 'Dominica / +1767',
    value: 'Dominica / +1767',
  },
  {
    label: 'Dominikanische Republik / +1809',
    value: 'Dominikanische Republik / +1809',
  },
  {
    label: 'Dschibuti / +253',
    value: 'Dschibuti / +253',
  },
  {
    label: 'Ecuador / +593',
    value: 'Ecuador / +593',
  },
  {
    label: 'El Salvador / +53',
    value: 'El Salvador / +53',
  },
  {
    label: 'Eritrea / +291',
    value: 'Eritrea / +291',
  },
  {
    label: 'Estland / +372',
    value: 'Estland / +372',
  },
  {
    label: 'Falklandinseln / +500',
    value: 'Falklandinseln / +500',
  },
  {
    label: 'Färöer / +298',
    value: 'Färöer / +298',
  },
  {
    label: 'Fidschi / +679',
    value: 'Fidschi / +679',
  },
  {
    label: 'Finnland / +358',
    value: 'Finnland / +358',
  },
  {
    label: 'Frankreich / +33',
    value: 'Frankreich / +33',
  },
  {
    label: 'Französisch-Guayana / +594',
    value: 'Französisch-Guayana / +594',
  },
  {
    label: 'Französisch-Polynesien / +689',
    value: 'Französisch-Polynesien / +689',
  },
  {
    label: 'Gabun / +241',
    value: 'Gabun / +241',
  },
  {
    label: 'Gambia / +220',
    value: 'Gambia / +220',
  },
  {
    label: 'Georgien / +995',
    value: 'Georgien / +995',
  },
  {
    label: 'Ghana / +233',
    value: 'Ghana / +233',
  },
  {
    label: 'Gibraltar / +350',
    value: 'Gibraltar / +350',
  },
  {
    label: 'Grenada / +1473',
    value: 'Grenada / +1473',
  },
  {
    label: 'Griechenland / +30',
    value: 'Griechenland / +30',
  },
  {
    label: 'Grönland / +299',
    value: 'Grönland / +299',
  },
  {
    label: 'Guadeloupe / +590',
    value: 'Guadeloupe / +590',
  },
  {
    label: 'Guam / +1671',
    value: 'Guam / +1671',
  },
  {
    label: 'Guatemala / +52',
    value: 'Guatemala / +52',
  },
  {
    label: 'Guernsey / +44148',
    value: 'Guernsey / +44148',
  },
  {
    label: 'Guinea / +224',
    value: 'Guinea / +224',
  },
  {
    label: 'Guinea-Bissau / +245',
    value: 'Guinea-Bissau / +245',
  },
  {
    label: 'Guyana / +592',
    value: 'Guyana / +592',
  },
  {
    label: 'Haiti / +59',
    value: 'Haiti / +59',
  },
  {
    label: 'Honduras / +54',
    value: 'Honduras / +54',
  },
  {
    label: 'Hongkong / +852',
    value: 'Hongkong / +852',
  },
  {
    label: 'Indien / +91',
    value: 'Indien / +91',
  },
  {
    label: 'Indonesien / +62',
    value: 'Indonesien / +62',
  },
  {
    label: 'Isle of Man / +44',
    value: 'Isle of Man / +44',
  },
  {
    label: 'Irak / +964',
    value: 'Irak / +964',
  },
  {
    label: 'Iran / +98',
    value: 'Iran / +98',
  },
  {
    label: 'Irland / +353',
    value: 'Irland / +353',
  },
  {
    label: 'Island / +354',
    value: 'Island / +354',
  },
  {
    label: 'Israel / +972',
    value: 'Israel / +972',
  },
  {
    label: 'Italien / +39',
    value: 'Italien / +39',
  },
  {
    label: 'Jamaika / +1876',
    value: 'Jamaika / +1876',
  },
  {
    label: 'Japan / +81',
    value: 'Japan / +81',
  },
  {
    label: 'Jemen / +967',
    value: 'Jemen / +967',
  },
  {
    label: 'Jersey / +44',
    value: 'Jersey / +44',
  },
  {
    label: 'Jordanien / +962',
    value: 'Jordanien / +962',
  },
  {
    label: 'Kaimaninseln / +1345',
    value: 'Kaimaninseln / +1345',
  },
  {
    label: 'Kambodscha / +855',
    value: 'Kambodscha / +855',
  },
  {
    label: 'Kamerun / +237',
    value: 'Kamerun / +237',
  },
  {
    label: 'Kanada / +1NXX',
    value: 'Kanada / +1NXX',
  },
  {
    label: 'Kap Verde / +238',
    value: 'Kap Verde / +238',
  },
  {
    label: 'Kasachstan / +7',
    value: 'Kasachstan / +7',
  },
  {
    label: 'Katar / +974',
    value: 'Katar / +974',
  },
  {
    label: 'Kenia / +254',
    value: 'Kenia / +254',
  },
  {
    label: 'Kirgisistan / +996',
    value: 'Kirgisistan / +996',
  },
  {
    label: 'Kiribati / +686',
    value: 'Kiribati / +686',
  },
  {
    label: 'Kolumbien / +57',
    value: 'Kolumbien / +57',
  },
  {
    label: 'Komoren / +269',
    value: 'Komoren / +269',
  },
  {
    label: 'Kongo, Demokratische Republik / +243',
    value: 'Kongo, Demokratische Republik / +243',
  },
  {
    label: 'Republik Kongo / +242',
    value: 'Republik Kongo / +242',
  },
  {
    label: 'Nordkorea / +850',
    value: 'Nordkorea / +850',
  },
  {
    label: 'Südkorea / +82',
    value: 'Südkorea / +82',
  },
  {
    label: 'Kroatien / +385',
    value: 'Kroatien / +385',
  },
  {
    label: 'Kuwait / +965',
    value: 'Kuwait / +965',
  },
  {
    label: 'Laos / +856',
    value: 'Laos / +856',
  },
  {
    label: 'Lesotho / +266',
    value: 'Lesotho / +266',
  },
  {
    label: 'Lettland / +371',
    value: 'Lettland / +371',
  },
  {
    label: 'Libanon / +961',
    value: 'Libanon / +961',
  },
  {
    label: 'Liberia, Republik / +231',
    value: 'Liberia, Republik / +231',
  },
  {
    label: 'Libyen / +218',
    value: 'Libyen / +218',
  },
  {
    label: 'Liechtenstein / +423',
    value: 'Liechtenstein / +423',
  },
  {
    label: 'Litauen / +370',
    value: 'Litauen / +370',
  },
  {
    label: 'Luxemburg / +352',
    value: 'Luxemburg / +352',
  },
  {
    label: 'Macao / +853',
    value: 'Macao / +853',
  },
  {
    label: 'Madagaskar / +261',
    value: 'Madagaskar / +261',
  },
  {
    label: 'Malawi / +265',
    value: 'Malawi / +265',
  },
  {
    label: 'Malaysia / +60',
    value: 'Malaysia / +60',
  },
  {
    label: 'Malediven / +960',
    value: 'Malediven / +960',
  },
  {
    label: 'Mali, Republik / +223',
    value: 'Mali, Republik / +223',
  },
  {
    label: 'Malta / +356',
    value: 'Malta / +356',
  },
  {
    label: 'Marokko / +211',
    value: 'Marokko / +211',
  },
  {
    label: 'Marshallinseln / +692',
    value: 'Marshallinseln / +692',
  },
  {
    label: 'Martinique / +596',
    value: 'Martinique / +596',
  },
  {
    label: 'Mauretanien / +222',
    value: 'Mauretanien / +222',
  },
  {
    label: 'Mauritius / +230',
    value: 'Mauritius / +230',
  },
  {
    label: 'Mayotte / +269',
    value: 'Mayotte / +269',
  },
  {
    label: 'Mazedonien / +389',
    value: 'Mazedonien / +389',
  },
  {
    label: 'Mexiko / +52',
    value: 'Mexiko / +52',
  },
  {
    label: 'Mikronesien / +691',
    value: 'Mikronesien / +691',
  },
  {
    label: 'Moldawien / +373',
    value: 'Moldawien / +373',
  },
  {
    label: 'Monaco / +377',
    value: 'Monaco / +377',
  },
  {
    label: 'Mongolei / +976',
    value: 'Mongolei / +976',
  },
  {
    label: 'Montserrat / +1664',
    value: 'Montserrat / +1664',
  },
  {
    label: 'Mosambik / +258',
    value: 'Mosambik / +258',
  },
  {
    label: 'Myanmar / +95',
    value: 'Myanmar / +95',
  },
  {
    label: 'Namibia / +264',
    value: 'Namibia / +264',
  },
  {
    label: 'Nauru / +674',
    value: 'Nauru / +674',
  },
  {
    label: 'Nepal / +977',
    value: 'Nepal / +977',
  },
  {
    label: 'Neukaledonien / +687',
    value: 'Neukaledonien / +687',
  },
  {
    label: 'Neuseeland / +64',
    value: 'Neuseeland / +64',
  },
  {
    label: 'Nicaragua / +55',
    value: 'Nicaragua / +55',
  },
  {
    label: 'Niederlande / +31',
    value: 'Niederlande / +31',
  },
  {
    label: 'Niederländische Antillen / +599',
    value: 'Niederländische Antillen / +599',
  },
  {
    label: 'Niger / +227',
    value: 'Niger / +227',
  },
  {
    label: 'Nigeria / +234',
    value: 'Nigeria / +234',
  },
  {
    label: 'Niue / +683',
    value: 'Niue / +683',
  },
  {
    label: 'Nördliche Marianen / +1670',
    value: 'Nördliche Marianen / +1670',
  },
  {
    label: 'Norfolkinsel / +6723',
    value: 'Norfolkinsel / +6723',
  },
  {
    label: 'Norwegen / +47',
    value: 'Norwegen / +47',
  },
  {
    label: 'Oman / +968',
    value: 'Oman / +968',
  },
  {
    label: 'Pakistan / +92',
    value: 'Pakistan / +92',
  },
  {
    label: 'Palästinensische Autonomiegebiete / +970',
    value: 'Palästinensische Autonomiegebiete / +970',
  },
  {
    label: 'Palau / +680',
    value: 'Palau / +680',
  },
  {
    label: 'Panama / +57',
    value: 'Panama / +57',
  },
  {
    label: 'Papua-Neuguinea / +675',
    value: 'Papua-Neuguinea / +675',
  },
  {
    label: 'Paraguay / +595',
    value: 'Paraguay / +595',
  },
  {
    label: 'Peru / +51',
    value: 'Peru / +51',
  },
  {
    label: 'Philippinen / +63',
    value: 'Philippinen / +63',
  },
  {
    label: 'Pitcairninseln / +649',
    value: 'Pitcairninseln / +649',
  },
  {
    label: 'Polen / +48',
    value: 'Polen / +48',
  },
  {
    label: 'Portugal / +351',
    value: 'Portugal / +351',
  },
  {
    label: 'Puerto Rico / +1939',
    value: 'Puerto Rico / +1939',
  },
  {
    label: 'Réunion / +262',
    value: 'Réunion / +262',
  },
  {
    label: '',
    value: '',
  },

  // Ruanda / +250
  // Rumänien / +40
  // Russische Föderation / +7
  // Salomonen / +677
  // Sambia / +260
  // San Marino / +378
  // São Tomé und Príncipe / +239
  // Saudi-Arabien / +966
  // Schweden / +46
  // Senegal / +221
  // Seychellen / +248
  // Sierra Leone / +232
  // Simbabwe / +263
  // Singapur / +65
  // Slowakei / +421
  // Slowenien / +386
  // Somalia, Demokratische Republik / +252
  // Spanien / +34
  // Sri Lanka / +94
  // St. Kitts und Nevis / +1869
  // St. Lucia / +1758
  // St. Pierre und Miquelon / +508
  // St. Vincent und die Grenadinen / +1784
  // Südafrika / +27
  // Sudan / +249
  // Suriname / +597
  // Swasiland / +268
  // Syrien / +963
  // Tadschikistan / +992
  // Taiwan / +886
  // Tansania / +255
  // Thailand / +66
  // Osttimor / +670
  // Togo / +228
  // Tokelau / +690
  // Tonga / +676
  // Trinidad und Tobago / +1868
  // Tristan da Cunha / +290
  // Tschad / +235
  // Tschechien / +420
  // Tunesien / +216
  // Türkei / +90
  // Turkmenistan / +993
  // Turks- und Caicosinseln / +1649
  // Tuvalu / +688
  // Uganda / +256
  // Ukraine / +380
  // Uruguay / +598
  // Usbekistan / +998
  // Vanuatu / +678
  // Vatikanstadt / +3906
  // Venezuela / +58
  // Vereinigte Arabische Emirate / +971
  // Vereinigte Staaten / +1
  // Vereinigtes Königreich / +44
  // Vietnam / +84
  // Wallis und Futuna / +681
  // Weihnachtsinsel / +61
  // Weißrussland / +375
  // Zentralafrikanische Republik / +236
  // Zypern, Republik / +357
  // Ungarn / +36
  // Montenegro / +382
  // Serbien / +381
];

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
      // information,
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

  // renderSelect = (name, options) => {
  //   return (
  //     <Field name={name} component="select" validate={[required]}>
  //       {options.map(option => (
  //         <option key={option.value} value={option.value}>
  //           {option.label}
  //         </option>
  //       ))}
  //     </Field>
  //   );
  // };

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

              {/* <div>{this.renderSelect('+49', selectOptions)}</div> */}

              <div className="contact-items">
                <Field
                  className="contact-items__item contact-items__item--ext"
                  name="contact.preset"
                  component="select"
                >
                  <option value="Deutschland / +49">Deutschland / +49</option>
                  <option value="Polen / +48">Polen / +48</option>
                  <option value="Norwegen / +47">Norwegen / +47</option>
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
