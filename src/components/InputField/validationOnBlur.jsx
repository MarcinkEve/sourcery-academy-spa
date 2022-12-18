import { string } from 'yup';

//validation data for name input
const notAllowedCharRegex = /^[^!@#$%^&*()_+=[\]{};':"|<>\\/?\d]+$/;
const minNameLength = 2;
const maxNameLength = 64;
const errorForNameLength = `Name needs to contain between ${minNameLength} and ${maxNameLength} symbols`;
const errorTextForNameSymbols =
  'If needed please use the following symbols “-“, “,“ “.“ “';

// validation data for email
const minEmailLength = 6;
const maxEmailLength = 64;
const errorTextForEmail = 'Please use a valid email address';

const nameYupSchema = string()
  .min(minNameLength, errorForNameLength)
  .max(maxNameLength, errorForNameLength)
  .matches(notAllowedCharRegex, errorTextForNameSymbols)
  .trim();

const emailYupSchema = string()
  .email(errorTextForEmail)
  .min(minEmailLength, errorTextForEmail)
  .max(maxEmailLength, errorTextForEmail)
  .trim();

export const validationHandler = (
  inputValue,
  typeOfInputToValidate,
  setErrorMessage,
  setValidInput
) => {
  if (inputValue !== null) {
    const validateValue = async () => {
      //validating name or email
      const validationSchema =
        typeOfInputToValidate === 'text' ? nameYupSchema : emailYupSchema;
      try {
        const yupValidation = await validationSchema.validate(inputValue);
        setErrorMessage(null);
        setValidInput(yupValidation);
      } catch (err) {
        setErrorMessage(err.message);
        setValidInput(null);
      }
    };
    validateValue();
  }
};
