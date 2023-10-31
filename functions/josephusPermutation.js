export function josephus(items, k) {
  const startArr = [...items];
  const resultArr = [];
  let findIndex = k - 1;

  while (startArr.length) {
    if (startArr.length === 1) {
      resultArr.push(startArr.pop());
    } else {
      while (findIndex >= startArr.length) {
        findIndex -= startArr.length;
      }
      resultArr.push(...startArr.splice(findIndex, 1));
      findIndex += k - 1;
    }
  }

  return resultArr;
}