const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDay = function (day) {
  if (day === 1 || day === 21 || day === 31) {
    day = day + 'st';
  } else if (day === 2 || day % 10 === 2) {
    day = day + 'nd';
  } else if (day === 3 || day === 23) {
    day = day + 'rd';
  } else {
    day = day + 'th';
  }
  return day;
};
const talkingCalendar = function (date) {
  const parts = date.split('/');
  const YYYY = Number(parts[0]);
  const MM = Number(parts[1]);
  const DD = Number(parts[2]);

  let month = months[MM - 1];
  let day = getDay(DD);
  return month + ' ' + day + ', ' + YYYY;
};

console.log(talkingCalendar('2017/12/1'));
console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/23'));
