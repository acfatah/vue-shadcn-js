export const fieldConfig = {
  password: {
    label: 'Your secure password',
    inputProps: {
      type: 'password',
      placeholder: '••••••••',
    },
  },
  favouriteNumber: {
    description: 'Your favourite number between 1 and 10.',
  },
  acceptTerms: {
    label: 'Accept terms and conditions.',
    inputProps: {
      required: true,
    },
  },

  birthday: {
    description: 'We need your birthday to send you a gift.',
  },

  sendMeMails: {
    component: 'switch',
  },

  bio: {
    component: 'textarea',
  },

  marshmallows: {
    label: 'How many marshmallows fit in your mouth?',
    component: 'radio',
  },

  file: {
    label: 'Text file',
    component: 'file',
  },
}
