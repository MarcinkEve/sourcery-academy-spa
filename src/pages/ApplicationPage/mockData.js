export const data = {
  section_1: {
    title: 'Academy information',
    inputs: [
      {
        name: 'Academy type',
        values: ['Full-stack', 'Testers', 'Front-End'],
        type: 'radioToggler',
      },
      {
        name: 'Academy city',
        radioValues: [
          {
            name: 'Kaunas',
            value: 'Kaunas',
            id: 15698,
          },
          {
            name: 'Vilnius',
            value: 'Vilnius',
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
        type: 'file',
        placeholder: 'Upload your resume',
      },
      {
        type: 'checkbox',
        checkboxText:
          'I have read, understand and accept the content of the Privacy Notice and consent to the processing of my data as part of this application.',
        name: 'checkbox',
        errorMessage: 'Please read and agree to terms and conditions',
      },
    ],
  },
  button: {
    label: 'Register',
  },
};
