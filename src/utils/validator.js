export let inputsOnValidation = {};

export const validator = (name, value) => {
  let isValid;
  switch (name) {
    case 'name':
      isValid = value;

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    case 'email':
      isValid = value.includes('@') && value.includes('.');

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    case 'recoveryPassword':
      isValid = value.length === 6;

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    case 'password':
      isValid = value.length > 5 ? value : false;

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    case 'confirmPassword':
      isValid = value && value === inputsOnValidation.password;

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    case 'companyName':
      isValid = value;

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    case 'URL':
      isValid =
        value.includes('http') && value.includes('//') && value.includes('.');

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    default:
      return false;
  }
};
