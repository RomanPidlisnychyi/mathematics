export const transformDate = date => {
  const createdDate = new Date(date);
  const day = createdDate.getDate();
  const mounth = 1 + createdDate.getMonth();

  const currentFormatDay = String(day).padStart(2, '0');
  const currentFormatMounth = String(mounth).padStart(2, '0');

  return { day: currentFormatDay, mounth: currentFormatMounth };
  // return currentFormatDay + '.' + currentFormatMounth;
};
