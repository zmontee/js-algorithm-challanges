
const testThisCode = () => {
  // * 2
  // const calculator = {
  //   read() {
  //     this.a = +prompt('first number');
  //     this.b = +prompt('second number');
  //   },
  //   sum() {
  //     return this.a + this.b;
  //   },
  //   mul() {
  //     return this.a * this.b;
  //   }
  // }
  //
  // calculator.read();
  // alert( calculator.sum() );
  // alert( calculator.mul() );

  // * 3
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
     this.step--;
     return this;
    },
    showStep: function() { // показує поточний крок
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
}

export default testThisCode;
