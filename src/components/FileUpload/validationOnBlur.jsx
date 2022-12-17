import { string, number, object } from 'yup';

// validation data for file
const fileSizeMb = 2;
const fileSizeKb = fileSizeMb * 1000000;
const errorTextForFile = 'File must be pdf format';
const errorTextForFileSize = `File has to be less than ${fileSizeMb}mb`;

export const fileYumSchema = object({
  name: string().matches(/\b\w*\.pdf\b/, errorTextForFile, {
    excludeEmptyString: true,
  }),
  size: number().lessThan(fileSizeKb, errorTextForFileSize),
});
