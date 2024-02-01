const testCode = () => {
  // * 1 task
  // const user = {};
  //
  // user.name = 'Іван';
  // user.surname = 'Сміт';
  //
  // user.name = 'Петро';
  //
  // delete user.name;
  //
  // console.log(user);

  // * 2 task
  // const isEmpty = (obj) => {
  //   for (let key in obj) {
  //     return false;
  //   }
  //   return true;
  // }
  //
  // console.log(isEmpty({}));
  // console.log(isEmpty({ user: 'zmonte' }));

  // * 3 task
  // let salaries = {
  //   John: 100,
  //   Ann: 160,
  //   Pete: 130
  // }
  //
  // let sum = 0;
  //
  // for (let key in salaries) {
  //   if (typeof salaries[key] === 'number') {
  //     sum += salaries[key];
  //   }
  // }
  //
  // console.log(sum);

  // * 4 task
  const multiplyNumeric = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        obj[key] *= 2;
      }
    }
  }

  let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  };

  multiplyNumeric(menu);

  console.log('menu:', menu)
}

export default testCode;