export const prepareVacancy = vacancy => {
  const preperedVacancy = { ...vacancy };

  delete preperedVacancy.date;
  delete preperedVacancy._id;
  delete preperedVacancy.status;
  delete preperedVacancy.userId;
  delete preperedVacancy.__v;
  delete preperedVacancy.favorite;
  delete preperedVacancy.task;
  delete preperedVacancy.companyName;
  delete preperedVacancy.location;
  delete preperedVacancy.position;

  return Object.keys(preperedVacancy);
};
