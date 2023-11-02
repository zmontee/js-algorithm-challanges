export function isLeapYear(year) {
  return year % 400 === 0 ? true : year % 100 !== 0 && year % 4 === 0;
}