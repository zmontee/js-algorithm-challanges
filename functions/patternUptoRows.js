export const patternUptoRows = (n) => {
  const output = [];
  let currentDigit = +`${n}`.split('').at(-1);

  for (let i = 0; i < n; i++) {
    output.push(`${output[i - 1] ? output[i - 1].slice(0, i) : ''}${`${currentDigit}`.repeat(n - i)}`);
    if (currentDigit === 0) {
      currentDigit = 9;
    } else {
      currentDigit--;
    }
  }

  return output.join('\n');
}