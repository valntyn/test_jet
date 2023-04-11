/* eslint-disable react/jsx-filename-extension */
import React, { ChangeEvent } from 'react';

type PropTypes = {
  error: string | undefined,
  touched: boolean | undefined;
  values: string | number;
  handleChange:
  {
    (e: ChangeEvent<unknown>)
    : void; <T = string | ChangeEvent<unknown>>
    (field: T): T extends ChangeEvent<unknown> ? void :
      (e: string | ChangeEvent<unknown>) => void;
  }
  type: string;
  placeholder: string;
  name: string;
  max?: string;
  min?: string;
  step?: string;
};

export const InputField: React.FC<PropTypes> = ({
  error,
  touched,
  values,
  handleChange,
  type,
  placeholder,
  name,
  min,
  max,
  step,
}) => {
  return (
    <div className="form__field">
      <input
        className="form__inp"
        type={type}
        name={name}
        onChange={handleChange}
        value={values}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        autoComplete="off"
      />
      {error && (
        <p className="form__error">
          {error && touched && error}
        </p>
      )}
    </div>
  );
};
