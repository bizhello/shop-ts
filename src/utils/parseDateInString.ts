/* eslint-disable prettier/prettier */
const parseDateInString = (date: Date): string => {
  const month = date.getMonth() + 1;
  let textMonth = '';
  if (month < 10) {
    textMonth = `0${month}`;
  }

  return `${date.getFullYear()}-${textMonth}`;
};

export default parseDateInString;
