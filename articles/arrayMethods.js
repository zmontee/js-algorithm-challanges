const testArrayMethods = () => {
  // * 5
  // const copySorted = (arr) => {
  //   return arr.slice().sort();
  // }

  // *6
  // function Calculator() {
  //   const operations = {
  //       "+": function(a, b) {
  //         return a + b;
  //       },
  //       '-': function(a, b) {
  //         return a - b;
  //       }
  //     };
  //
  //   this.calculate = function(expression) {
  //     const [a, operator, b] = expression.split(' ');
  //
  //     if (operator in operations) {
  //       return operations[operator](a, b);
  //     }
  //
  //     return undefined;
  //   },
  //
  //   this.addMethod = function(name, func) {
  //       operations[name] = func;
  //     }
  // }

  // *8
  // let ivan = {name: "Іван", surname: "Іванко", id: 1};
  // let petro = {name: "Петро", surname: "Петренко", id: 2};
  // let mariya = {name: "Марія", surname: "Мрійко", id: 3};
  //
  // let users = [ivan, petro, mariya];
  //
  // let usersMapped = users.map(user => ({
  //   id: user.id,
  //   fullName: user.name + ' ' + user.surname
  // }))
  //
  // alert( usersMapped[0].id ) // 1
  // alert( usersMapped[0].fullName ) // Іван Іванко

  // *11
  // const getAverageAge = (users) => {
  //   return users.reduce((sum, user) => sum + user.age, 0) / users.length;
  // }
  //
  // let john = { name: "John", age: 25 };
  // let pete = { name: "Pete", age: 30 };
  // let mary = { name: "Mary", age: 29 };
  //
  // let arr = [ john, pete, mary ];
  //
  // alert( getAverageAge(arr) );

  // *12
  const unique = (arr) => {
    return arr.filter((item, index, array) => array.indexOf(item) === array.lastIndexOf(item));
  }

  let strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"];

  alert( unique(strings) ); // Привіт, Світ, :-O
}

export default testArrayMethods;