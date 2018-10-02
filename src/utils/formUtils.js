import React from 'react';

export const required = value => (value ? undefined : 'Required');
export const requiredSentens1 = value => (value ? undefined : 'Bitte geben Sie Ihre Anrede an.');
export const requiredSentens2 = value => (value ? undefined : 'Bitte geben Sie Ihren Vornamen an.');
export const requiredSentens3 = value =>
  value ? undefined : 'Bitte geben Sie Ihren Nachnamen an.';
export const requiredSentens4 = value =>
  value ? undefined : 'Bitte geben Sie Ihren E-Mail Adresse an.';
export const requiredSentens5 = value =>
  value ? undefined : 'Bitte geben Sie Ihre Telefonnummer an.';
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const number = value => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const zip = value => (value > 999 && value < 10000 ? undefined : 'invalid zip code');

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  placeholder,
}) => (
  <div className="item">
    <label className="item__name">{label}</label>
    <div className={`item__field ${touched && !error ? 'item__input--success' : null}`}>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={`item__input ${touched && error ? 'item__input--error' : null}`}
      />
    </div>
  </div>
);

export const renderInput = ({ input, className, type, placeholder, meta: { touched, error } }) => (
  <div className={`${className} ${touched && (error && 'contact-items__item--error')}`}>
    <input {...input} placeholder={placeholder} type={type} />

    {touched && (error && <span className="msg">{error}</span>)}
  </div>
);

export const renderRationBtn = ({
  input,
  className,
  label,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <label htmlFor={`${input.name}${input.value}`} className="radio-item">
      <span className={`radiobtn ${input.checked === true ? 'checked' : null}`} />
      <input
        {...input}
        placeholder={placeholder}
        className={className}
        type={type}
        id={`${input.name}${input.value}`}
      />
      <span className="radio-name">{label}</span>
      {touched && (error && <span className="msg">{error}</span>)}
    </label>
  );
};

export const renderCheckBox = ({
  input,
  className,
  label,
  meta: { touched, error },
  labelClass,
}) => (
  <div className="checkbox-wrapper">
    <input
      {...input}
      className={className}
      type="checkbox"
      checked={input.value ? true : false}
      onChange={input.onChange}
    />
    <label className={labelClass}>{label}</label>
    {touched && (error && <span className="msg">{error}</span>)}
  </div>
);
