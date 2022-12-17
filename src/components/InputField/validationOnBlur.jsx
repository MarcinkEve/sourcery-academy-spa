import React from 'react';
import { string } from 'yup';

//validation data for name input
const notAllowedCharRegex = /^[^!@#$%^&*()_+=[\]{};':"|<>\\/?\d]+$/;
const minNameLength = 2;
const maxNameLength = 64;
const errorForNameLength = `Name needs to contain between ${minNameLength} and ${maxNameLength} symbols`;
const errorTextForNameSymbols =
  'If needed please use the following symbols “-“, “,“ “.“ “';

export const nameYupSchema = string()
  .min(minNameLength, errorForNameLength)
  .max(maxNameLength, errorForNameLength)
  .matches(notAllowedCharRegex, errorTextForNameSymbols);

// validation data for email
const minEmailLength = 6;
const maxEmailLength = 64;
const errorTextForEmail = 'Please use a valid email address';

export const emailYupSchema = string()
  .email(errorTextForEmail)
  .min(minEmailLength, errorTextForEmail)
  .max(maxEmailLength, errorTextForEmail);
