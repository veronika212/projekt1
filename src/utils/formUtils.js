import React from 'react';

export const required = value => (value ? undefined : 'Required');
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

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="item">
    <label className="item__name">{label}</label>
    <div className="item__field">
      <input
        {...input}
        placeholder={label}
        type={type}
        className={`item__input ${touched && error ? 'item__input--error' : null}`}
      />
    </div>
  </div>
);
