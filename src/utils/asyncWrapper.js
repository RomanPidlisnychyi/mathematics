export const asyncWrapper = promise => {
  return promise.catch(err => {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  });
};
