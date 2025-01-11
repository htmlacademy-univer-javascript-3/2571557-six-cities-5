export const dateToYearMonthDay = (date: Date) =>
  new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

export const dateToMonthWordYear = (date: Date) =>
  new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long'
  }).format(date);

export const validatePassword = (password: string) => {
  const hasLetter = new RegExp(/[a-zA-Z]+/g);
  const hasDigit = new RegExp(/[0-9]+/g);

  if (password.match(hasLetter) && password.match(hasDigit)) {
    return true;
  }
  return false;
};
