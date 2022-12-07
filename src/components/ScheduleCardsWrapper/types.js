import { shape, arrayOf, string } from 'prop-types';

import { scheduleCardType } from '../ScheduleCard/types';

export const scheduleColumnType = shape({
  title: arrayOf(string).isRequired,
  column_1: arrayOf(shape(scheduleCardType)).isRequired,
  column_2: arrayOf(shape(scheduleCardType)),
});
