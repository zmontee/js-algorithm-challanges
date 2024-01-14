export const forToWhile = () => {
  let i = 0;
  while (i < 3) {
    alert(i++);
  }
};

export const repeatLoopWhilePromptTrue = () => {
  // * My solution
  // while (true) {
  //   const value = +prompt('Введіть число більше за 100', '');
  //
  //   if (value < 100) {
  //     break;
  //   }
  // }

  // *uk.js.info solution
  let num;
  do {
    num = +prompt('Введіть число більше за 100', '');
  } while (num >= 100 && num)
}

export const displayAllPrimeNumbers = (n) => {
  let primeNumbers = [];
  numbersLoop: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue numbersLoop;
    }
    primeNumbers.push(i);
  }

  alert(JSON.stringify(primeNumbers));
}