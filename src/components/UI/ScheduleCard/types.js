import { shape, string, arrayOf, number } from 'prop-types';

export const scheduleCardType = {
  lectureData: shape({
    lecture: string,
    name: string,
    time: string,
    duration: string,
  }).isRequired,
  lectureDates: arrayOf(
    shape({
      city: string,
      day: number,
      month: string,
    })
  ).isRequired,
};
