import { string, number, object } from 'yup';

// validation data for file
const fileSizeMb = 2;
const fileSizeKb = fileSizeMb * 1000000;
const errorTextForFile = 'File must be PDF format';
const errorTextForFileSize = `File has to be less than ${fileSizeMb}mb`;

export const fileYumSchema = object({
  name: string().matches(/\b\w*\.pdf\b/, errorTextForFile, {
    excludeEmptyString: true,
  }),
  size: number().lessThan(fileSizeKb, errorTextForFileSize),
});

export const handleValidation = (
  uploadedFile,
  setErrorMessage,
  setValidFile
) => {
  if (uploadedFile) {
    const validateFileFromInput = async () => {
      const objectForValidation = {
        name: uploadedFile.name,
        size: uploadedFile.size,
      };
      try {
        const yupValidation = await fileYumSchema.validate(objectForValidation);
        setErrorMessage(null);
        setValidFile(yupValidation);
      } catch (err) {
        setErrorMessage(err.message);
        setValidFile(null);
      }
    };
    validateFileFromInput();
  }
};
