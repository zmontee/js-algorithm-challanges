const testDates = () => {
  // *1
  // const taskDate = new Date('2012-02-20T03:12')
  //
  // alert(taskDate);

  // *2
  // const getWeekDay = (date) => {
  //   const weekDaysMap = {
  //     0: 'НД',
  //     1: 'ПН',
  //     2: "ВТ",
  //     3: "СР",
  //     4: "ЧТ",
  //     5: "ПТ",
  //     6: "СБ"
  //   }
  //   return weekDaysMap[date.getDay()];
  // }
  //
  // let date = new Date(2012, 0, 3);  // 3 січня 2012
  // alert( getWeekDay(date) );

  // *3
  // const getLocalDay = (date) => {
  //   return date.getDay() === 0 ? 7 : date.getDay();
  // }
  //
  // let date = new Date(2012, 0, 1);  // 3 січня 2012
  // alert( getLocalDay(date) );       // вівторок, слід показати 2

  // *4
  // const getDateAgo = (date, days) => {
  //   return new Date(date.getTime() - (days * 60 * 60 * 24 * 1000)).getDate();
  // }
  //
  // let date = new Date(2015, 0, 2);
  //
  // alert( getDateAgo(date, 1) ); // 1, (1 січня 2015)
  // alert( getDateAgo(date, 2) ); // 31, (31 грудня 2014)
  // alert( getDateAgo(date, 365) ); // 2, (2 січня 2014)

  // *5
  // const getLastDayOfMonth = (year, month) => {
  //   const date = new Date(year, month + 1, 0);
  //   return date.getDate();
  // }
  //
  // alert(getLastDayOfMonth(2012, 1));

  // *6
  // const getSecondsToday = () => {
  //   const date = new Date();
  //
  //   return (Date.now() - new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()) / 1000;
  // };
  //
  // alert(getSecondsToday());

  // *7
  // const getSecondsToTomorrow = () => {
  //   const today = new Date();
  //   const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  //
  //   return (tomorrow.getTime() - Date.now()) / 1000;
  // }
  //
  // alert(getSecondsToTomorrow())

  // *8
  const formatDate = (date) => {
    const differenceBetweenDates = Date.now() - date.getTime();

    if (differenceBetweenDates <= 1000) {
      return 'прямо зараз'
    } else if (differenceBetweenDates < 1000 * 60) {
      return `${Math.round(differenceBetweenDates / 1000)} сек. назад`
    } else if (differenceBetweenDates < 1000 * 60 * 60) {
      return `${Math.round(differenceBetweenDates / 1000 / 60)} хв.назад`
    } else {
      return `${date.getDate()}.${date.getMonth()}.${`${date.getFullYear()}`.slice(2)} ${date.getHours()}:${date.getMinutes()}`
    }
  }

  alert( formatDate(new Date(new Date - 1)) ); // "прямо зараз"

  alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 хв. назад"

// вчорашня дата, як 31.12.16 20:00
  alert( formatDate(new Date(new Date - 86400 * 1000)) );
}

export default testDates;