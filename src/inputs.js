export const inputs = [
  {
    name: 'name',
    type: 'text',
    validation: true,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'email@example.com',
    message: 'Incorrect email!',
    validation: true,
  },
  {
    name: 'recoveryPassword',
    type: 'text',
    placeholder: 'recovery password',
    message: 'Pass length must = 6!',
    validation: true,
  },
  {
    name: 'password',
    type: 'password',
    message: 'Pass length must be > 5!',
    validation: true,
  },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'confirm password',
    message: 'Passwords do not match!',
    validation: true,
  },
  {
    name: 'companyName',
    type: 'text',
    validation: true,
  },
  {
    name: 'URL',
    type: 'text',
    placeholder: 'vacancy URL',
    message: 'http_s://example.com',
    validation: false,
  },
  {
    name: 'phone',
    type: 'tel',
  },
  {
    name: 'position',
    type: 'text',
  },
  {
    name: 'stack',
    type: 'text',
  },
  {
    name: 'location',
    type: 'text',
  },
];
