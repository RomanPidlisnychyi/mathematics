export const preperingCredentials = arr =>
  arr.reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});
