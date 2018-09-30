import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";

import {
  createContactData,
  updateCustomerData
} from "../store/customerDataReducer";
import { updateAppData } from "../store/appReducer";
import {
  required,
  requiredSentens1,
  requiredSentens2,
  requiredSentens3,
  requiredSentens4,
  requiredSentens5,
  number,
  email,
  renderInput,
  renderRationBtn,
  renderCheckBox
} from "../utils/formUtils";

import "./ContactForm.css";

const selector = formValueSelector("ContactForm");

const selectOptions = [
  {
    label: "Afghanistan / +93",
    value: "Afghanistan / +93"
  },
  {
    label: "Ägypten / +20",
    value: "Ägypten / +20"
  },
  {
    label: "Aland / +35818",
    value: "Aland / +35818"
  },
  {
    label: "Albanien / +355",
    value: "Albanien / +355"
  },
  {
    label: "Algerien / +213",
    value: "Algerien / +213"
  },
  {
    label: "Amerikanisch-Samoa / +1684",
    value: "Amerikanisch-Samoa / +1684"
  },
  {
    label: "Amerikanische Jungferninseln / +1340",
    value: "Amerikanische Jungferninseln / +1340"
  },
  {
    label: "Andorra / +376",
    value: "Andorra / +376"
  },
  {
    label: "Angola / +244",
    value: "Angola / +244"
  },
  {
    label: "Anguilla / +1264",
    value: "Anguilla / +1264"
  },
  {
    label: "Antarktis / +672",
    value: "Antarktis / +672"
  },
  {
    label: "Antigua und Barbuda / +1268",
    value: "Antigua und Barbuda / +1268"
  },
  {
    label: "Äquatorialguinea / +240",
    value: "Äquatorialguinea / +240"
  },
  {
    label: "Argentinien / +54",
    value: "Argentinien / +54"
  },
  {
    label: "Armenien / +374",
    value: "Armenien / +374"
  },
  {
    label: "Aruba / +297",
    value: "Aruba / +297"
  },
  {
    label: "Ascension / +247",
    value: "Ascension / +247"
  },
  {
    label: "Aserbaidschan / +994",
    value: "Aserbaidschan / +994"
  },
  {
    label: "Äthiopien / +251",
    value: "Äthiopien / +251"
  },
  {
    label: "Australien / +61",
    value: "Australien / +61"
  },
  {
    label: "Bahamas / +1242",
    value: "Bahamas / +1242"
  },
  {
    label: "Bahrain / +973",
    value: "Bahrain / +973"
  },
  {
    label: "Bangladesch / +880",
    value: "Bangladesch / +880"
  },
  {
    label: "Barbados / +1246",
    value: "Barbados / +1246"
  },
  {
    label: "Belgien / +32",
    value: "Belgien / +32"
  },
  {
    label: "Belize / +51",
    value: "Belize / +51"
  },
  {
    label: "Benin / +229",
    value: "Benin / +229"
  },
  {
    label: "Bermuda / +1441",
    value: "Bermuda / +1441"
  },
  {
    label: "Bhutan / +975",
    value: "Bhutan / +975"
  },
  {
    label: "Bolivien / +591",
    value: "Bolivien / +591"
  },
  {
    label: "Bosnien und Herzegowina / +387",
    value: "Bosnien und Herzegowina / +387"
  },
  {
    label: "Botswana / +267",
    value: "Botswana / +267"
  },
  {
    label: "Brasilien / +55",
    value: "Brasilien / +55"
  },
  {
    label: "Britische Jungferninseln / +1284",
    value: "Britische Jungferninseln / +1284"
  },
  {
    label: "Brunei / +673",
    value: "Brunei / +673"
  },
  {
    label: "Bulgarien / +359",
    value: "Bulgarien / +359"
  },
  {
    label: "Burkina Faso / +226",
    value: "Burkina Faso / +226"
  },
  {
    label: "Burundi / +257",
    value: "Burundi / +257"
  },
  {
    label: "Chile / +56",
    value: "Chile / +56"
  },
  {
    label: "China, Volksrepublik / +86",
    value: "China, Volksrepublik / +86"
  },
  {
    label: "Cookinseln / +682",
    value: "Cookinseln / +682"
  },
  {
    label: "Costa Rica / +56",
    value: "Costa Rica / +56"
  },
  {
    label: "Republik Côte d’Ivoire / +225",
    value: "Republik Côte d’Ivoire / +225"
  },
  {
    label: "Dänemark / +45",
    value: "Dänemark / +45"
  }

  // St. Helena und Nebengebiete / +290
  // Diego Garcia / +246
  // Dominica / +1767
  // Dominikanische Republik / +1809
  // Dschibuti / +253
  // Ecuador / +593
  // El Salvador / +53
  // Eritrea / +291
  // Estland / +372
  // Falklandinseln / +500
  // Färöer / +298
  // Fidschi / +679
  // Finnland / +358
  // Frankreich / +33
  // Französisch-Guayana / +594
  // Französisch-Polynesien / +689
  // Gabun / +241
  // Gambia / +220
  // Georgien / +995
  // Ghana / +233
  // Gibraltar / +350
  // Grenada / +1473
  // Griechenland / +30
  // Grönland / +299
  // Guadeloupe / +590
  // Guam / +1671
  // Guatemala / +52
  // Guernsey / +44148
  // Guinea / +224
  // Guinea-Bissau / +245
  // Guyana / +592
  // Haiti / +59
  // Honduras / +54
  // Hongkong / +852
  // Indien / +91
  // Indonesien / +62
  // Isle of Man / +44
  // Irak / +964
  // Iran / +98
  // Irland / +353
  // Island / +354
  // Israel / +972
  // Italien / +39
  // Jamaika / +1876
  // Japan / +81
  // Jemen / +967
  // Jersey / +44
  // Jordanien / +962
  // Kaimaninseln / +1345
  // Kambodscha / +855
  // Kamerun / +237
  // Kanada / +1NXX
  // Kap Verde / +238
  // Kasachstan / +7
  // Katar / +974
  // Kenia / +254
  // Kirgisistan / +996
  // Kiribati / +686
  // Kolumbien / +57
  // Komoren / +269
  // Kongo, Demokratische Republik / +243
  // Republik Kongo / +242
  // Nordkorea / +850
  // Südkorea / +82
  // Kroatien / +385
  // Kuba / +53
  // Kuwait / +965
  // Laos / +856
  // Lesotho / +266
  // Lettland / +371
  // Libanon / +961
  // Liberia, Republik / +231
  // Libyen / +218
  // Liechtenstein / +423
  // Litauen / +370
  // Luxemburg / +352
  // Macao / +853
  // Madagaskar / +261
  // Malawi / +265
  // Malaysia / +60
  // Malediven / +960
  // Mali, Republik / +223
  // Malta / +356
  // Marokko / +211
  // Marshallinseln / +692
  // Martinique / +596
  // Mauretanien / +222
  // Mauritius / +230
  // Mayotte / +269
  // Mazedonien / +389
  // Mexiko / +52
  // Mikronesien / +691
  // Moldawien / +373
  // Monaco / +377
  // Mongolei / +976
  // Montserrat / +1664
  // Mosambik / +258
  // Myanmar / +95
  // Namibia / +264
  // Nauru / +674
  // Nepal / +977
  // Neukaledonien / +687
  // Neuseeland / +64
  // Nicaragua / +55
  // Niederlande / +31
  // Niederländische Antillen / +599
  // Niger / +227
  // Nigeria / +234
  // Niue / +683
  // Nördliche Marianen / +1670
  // Norfolkinsel / +6723
  // Norwegen / +47
  // Oman / +968
  // Pakistan / +92
  // Palästinensische Autonomiegebiete / +970
  // Palau / +680
  // Panama / +57
  // Papua-Neuguinea / +675
  // Paraguay / +595
  // Peru / +51
  // Philippinen / +63
  // Pitcairninseln / +649
  // Polen / +48
  // Portugal / +351
  // Puerto Rico / +1939
  // Réunion / +262
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
    console.log(createContactData, "values");
    this.props.updateAppData({
      title: "Wer soll die Bewertung erhalten?",
      totalSteps: 20,
      currentStep: 20
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
      information,
      goToSlide
    } = this.props;
    if (valid) {
      updateCustomerData({
        key: "contact",
        value: {
          sex: sex,
          firstName: firstName,
          lastName: lastName,
          mail: mail,
          preset: preset,
          phone: phone,
          information: false
        }
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
                  <option value="+49">+49</option>
                  <option value="+48">+48</option>
                  <option value="+47">+47</option>
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
                    Ich stimme den{" "}
                    <a href="/datenschutz/">Datenschutzbestimmungen </a>
                    und einer Kontaktaufnahme durch immoverkauf24 per E-Mail
                    oder Telefon für Rückfragen oder zu Informationszwecken zu.
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
  form: "ContactForm"
})(ContactForm);

export default connect(
  state => ({
    sex: selector(state, "contact.sex"),
    firstName: selector(state, "contact.firstName"),
    lastName: selector(state, "contact.lastName"),
    mail: selector(state, "contant.mail"),
    preset: selector(state, "contact.preset"),
    phone: selector(state, "contact.phone"),
    information: false
  }),
  { createContactData, updateAppData, updateCustomerData }
)(ContactForm);
