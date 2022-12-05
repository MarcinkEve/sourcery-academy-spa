export const data = {
  section_1: {
    title: 'Academy information',
    inputs: [
      {
        name: 'Academy type',
        values: ['Full-stack', 'Testers', 'Front-End'],
        type: 'ragioToggler',
      },
      {
        title: 'Academy city',
        radioValues: [
          {
            name: 'Kaunas',
            value: 'kaunas',
            id: 15698,
          },
          {
            name: 'Vilnius',
            value: 'vilnius',
            id: 81554,
          },
        ],
        type: 'radio',
      },
    ],
  },
  section_2: {
    title: 'Personal information',
    inputs: [
      {
        name: 'firstName',
        label: 'First name',
        type: 'text',
        placeholder: 'Enter your first name',
      },
      {
        name: 'lastName',
        label: 'Last name',
        type: 'text',
        placeholder: 'Enter your last name',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
      },
      {
        name: 'resume',
        label: 'Resume',
        type: 'file',
        placeholder: 'Upload your resume',
      },
      {
        type: 'checkbox',
        checkboxText:
          'I have read, understand and accept the content of the Privacy Notice and consent to the processing of my data as part of this application.',
        name: 'privacyConsent',
      },
    ],
  },
  button: {
    label: 'Register',
  },
};
