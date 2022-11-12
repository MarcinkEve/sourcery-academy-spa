import React from 'react';

import InputsForText from './InputsForText';

export default {
  title: 'Input for text',
  component: InputsForText,
};

export const Input = () => <InputsForText name={'First name'} type={'text'} />;
export const InputError = () => (
  <InputsForText
    name={'Last name'}
    type={'text'}
    errorMessage={'Some error after validation'}
  />
);
