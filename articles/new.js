const testNewCode = () => {
  // * 1
  // const obj = { name: 'test' };
  // function A() {
  //   return obj;
  // }
  //
  // function B() {
  //   return obj;
  // }
  //
  // let a = new A();
  // let b = new B();
  //
  // alert(a == b);

  // *2
  // function Calculator() {
  //   this.read = () => {
  //     this.a = +prompt('Enter A');
  //     this.b = +prompt('Enter B');
  //   };
  //   this.sum = () => this.a + this.b;
  //   this.mul = () => this.a * this.b;
  // }
  //
  // let calculator = new Calculator();
  // calculator.read();
  //
  // alert( "Sum=" + calculator.sum() );
  // alert( "Mul=" + calculator.mul() );

  // *3
  function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = () => {
      const inputValue = +prompt('Enter number');
      this.value += inputValue;
    }
  }

  let accumulator = new Accumulator(1); // початкове значення 1

  accumulator.read(); // додає введене користувачем значення
  accumulator.read(); // додає введене користувачем значення

  alert(accumulator.value); // показує суму цих значень
}

export default testNewCode;