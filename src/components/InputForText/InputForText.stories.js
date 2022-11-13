import React from 'react';

import InputForText from './InputForText';

export default {
  title: 'Input for text',
  component: InputForText,
};

export const Input = () => <InputForText name={'First name'} type={'text'} />;
export const InputError = () => (
  <InputForText
    name={'Last name'}
    type={'text'}
    errorMessage={'Some error after validation'}
  />
);
