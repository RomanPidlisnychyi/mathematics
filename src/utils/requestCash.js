import { fetching } from './apiUtils';

const cash = {};

export const requestCash = async options => {
  const { path } = options;

  console.log(`path`, path);
  if (cash[path]) {
    console.log(`fromCash`);
    return cash[path];
  }

  const response = await fetching(options);
  cash[path] = response;

  return response;
};
