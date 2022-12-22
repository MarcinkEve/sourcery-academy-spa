import { arrayOf, shape, string, number, oneOfType } from 'prop-types';

export const sectionType = shape({
  title: string.isRequired,
  inputs: arrayOf(
    oneOfType([
      // types for RadioToggler
      shape({
        name: string.isRequired,
        values: arrayOf(string).isRequired,
        type: string.isRequired,
      }),
      // types for RadioButton
      shape({
        name: string.isRequired,
        radioValues: arrayOf(
          shape({
            name: string,
            value: string,
            id: number,
          })
        ).isRequired,
        type: string.isRequired,
      }),
      // types for InputField
      shape({
        name: string.isRequired,
        label: string.isRequired,
        type: string.isRequired,
        placeholder: string.isRequired,
      }),
      // types for FileUpload
      shape({
        name: string.isRequired,
        placeholder: string.isRequired,
        type: string.isRequired,
      }),
      // types for Checkbox
      shape({
        checkboxText: string.isRequired,
        name: string.isRequired,
        type: string.isRequired,
      }),
    ])
  ),
});
