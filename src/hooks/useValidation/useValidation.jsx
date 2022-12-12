import React from 'react';

export const useValidation = (validating, inputValue, writeNameInError) => {
  //validation data for name input
  const notAllowedCharRegex = /[!@#$%^&*()_+=[\]{};':"|<>\\/?\d]+/;
  const minNameLength = 2;
  const maxNameLength = 64;
  const errorForNameLength = `needs to contain between ${minNameLength} and ${maxNameLength} symbols`;
  const errorTextForNameSymbols =
    'If needed please use the following symbols “-“, “,“ “.“ “';

  // validation data for email
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  const minEmailLength = 6;
  const maxEmailLength = 64;
  const errorTextForEmail = 'Please use a valid email address';

  // validation data for file
  const fileFormat = 'pdf';
  const fileSizeMb = 2;
  const fileSizeKb = fileSizeMb * 1000000;
  const errorTextForFile = `File must be ${fileFormat} format`;
  const errorTextForFileSize = `File has to be less than ${fileSizeMb}mb`;

  //validation data for checkbox
  const errorTextForCheckbox = 'Please read and agree to terms and conditions';

  const returnArray = [undefined, undefined];

  if (inputValue === undefined) return returnArray;

  switch (validating.toLowerCase()) {
    case 'name':
      if (
        inputValue.length < minNameLength ||
        inputValue.length > maxNameLength
      ) {
        returnArray[1] = `${
          writeNameInError ? writeNameInError : 'Name'
        } ${errorForNameLength} `;
        return returnArray;
      } else if (notAllowedCharRegex.test(inputValue)) {
        returnArray[1] = errorTextForNameSymbols;
        return returnArray;
      }

      break;

    case 'email':
      if (
        inputValue.length < minEmailLength ||
        inputValue.length > maxEmailLength ||
        emailRegex.test(inputValue) === false
      ) {
        returnArray[1] = errorTextForEmail;
        return returnArray;
      }
      break;

    case 'file':
      if (inputValue.name.includes(`.${fileFormat}`) === false) {
        returnArray[1] = errorTextForFile;
        return returnArray;
      } else if (inputValue.size > `${fileSizeKb}`) {
        returnArray[1] = errorTextForFileSize;
        return returnArray;
      } else {
        returnArray[0] = inputValue;
        returnArray[1] = undefined;
        return returnArray;
      }

    case 'check':
      if (inputValue === false) {
        returnArray[1] = errorTextForCheckbox;
        return returnArray;
      }
      break;
  }

  returnArray[0] = inputValue;
  returnArray[1] = undefined;
  return returnArray;
};
