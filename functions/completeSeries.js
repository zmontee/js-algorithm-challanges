export function completeSeries(arr) {
  if (new Set(arr).size !== arr.length) {
    return [0];
  }

  return [...Array(Math.max(...arr) + 1).keys()]
}