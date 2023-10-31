export const numberStartLadder = (n) => {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += `1${i > 1 ? `${'*'.repeat(i - 1)}${i}` : ''}\n`
  }
  return output;
 }