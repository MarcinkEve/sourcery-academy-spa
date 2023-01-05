import { arrayOf, shape, string, oneOfType, number } from 'prop-types';

export const admissionSectionType = shape({
  admission: arrayOf(
    shape({
      heading: string.isRequired,
      text: string,
      list: arrayOf(string),
    })
  ),
  dates: arrayOf(
    shape({
      text: string.isRequired,
      dates: arrayOf(
        shape({
          day: oneOfType([string.isRequired, number.isRequired]),
          month: string.isRequired,
        })
      ),
    })
  ),
});
