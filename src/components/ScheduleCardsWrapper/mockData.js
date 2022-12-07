export const card1 = {
  lectureData: {
    lecture: 'Intro, Agile & Git',
    name: 'Audrius Navickas',
    time: '4:00 pm',
    duration: '3 hours',
  },
  lectureDates: [
    {
      city: 'Kaunas',
      day: 30,
      month: 'Oct',
    },
    {
      city: 'Vilnius',
      day: 31,
      month: 'Oct',
    },
  ],
};

export const card2 = {
  lectureData: {
    lecture:
      'Testing Foundations. Manual Testing Approach. Exploratory Testing',
    name: 'Gerda Monkevičiūtė',
    time: '11:00 am',
    duration: '5 hours',
  },
  lectureDates: [
    {
      city: 'Kaunas',
      day: 10,
      month: 'Nov',
    },
    {
      city: 'Vilnius',
      day: 11,
      month: 'Nov',
    },
  ],
};

export const card3 = {
  lectureData: {
    lecture: 'Git & JS Fundamentals',
    name: 'Paulius Sabeckis, Paulius Beneta',
    time: '4:00 pm',
    duration: '3 hours',
  },
  lectureDates: [
    {
      city: 'Kaunas',
      day: 1,
      month: 'Dec',
    },
    {
      city: 'Vilnius',
      day: 2,
      month: 'Dec',
    },
  ],
};

export const schedule = {
  column_1: {
    title: ['October', 'November', 'December'],
    column_1: [card1, card2, card3],
    column_2: [card2, card3],
  },
  column_2: {
    title: ['December', 'January'],
    column_1: [card1],
    column_2: [card2, card3],
  },
};
