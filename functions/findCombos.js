const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return  n * factorial(n - 1);
}

export const findCombos = (array) => {
  const arrayNumbers = [];

  const getArrayValues = (arr) => {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        getArrayValues(item);
      } else {
        arrayNumbers.push(item);
      }
    })
  }
  getArrayValues(array);

  const frequencies = {};
  arrayNumbers.forEach(num => {
    frequencies[num] = (frequencies[num] || 0) + 1;
  });

  let totalCombos = 1;

  for (const num in frequencies) {
    totalCombos *= factorial(frequencies[num]);
  }

  return factorial(arrayNumbers.length) / totalCombos;
}