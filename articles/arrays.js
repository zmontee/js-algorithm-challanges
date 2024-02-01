const testArrays = () => {
  // *2
  // const styles = ['Jazz', 'Blues'];
  // console.log(styles);
  //
  // styles.push('Rock-n-Roll');
  // console.log(styles);
  //
  // styles[Math.floor(styles.length / 2)] = 'Classics';
  // console.log(styles);
  //
  // console.log(styles.shift());
  //
  // styles.unshift('Rap');
  // styles.unshift('Reggae');
  // console.log(styles);

  // *3
  // let arr = ["a", "b"];
  //
  // arr.push(function() {
  //   alert( this );
  // });
  //
  // arr[2]();

  // *4
  // const sumInput = () => {
  //   const arr = [];
  //
  //   while (true) {
  //     const value = +prompt('Enter number');
  //
  //     if (isNaN(value) || !value) break;
  //
  //     arr.push(value);
  //   }
  //
  //   alert(arr.reduce((acc, item) => acc += item, 0));
  // }
  //
  // sumInput();

  // *5
  const testArr = [-1, 2, 3, -9];

  const getMaxSubSum = (arr) => {
    // * O(n^2) solution
    // let maxSum = 0;
    //
    // for (let i = 0; i < arr.length; i++) {
    //   let localSum = 0;
    //
    //   for (let j = i; j < arr.length; j++) {
    //     localSum += arr[j];
    //
    //     maxSum = Math.max(maxSum, localSum);
    //   }
    // }
    //
    // return maxSum;

    // * O(n) solution
    let maxSoFar = 0;
    let maxEndingHere = 0;

    for (let i = 0; i < arr.length; i++) {
      const currentValue = arr[i];

      maxEndingHere = Math.max(maxEndingHere + currentValue, currentValue);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
  }

  console.log(getMaxSubSum(testArr))
}

export default testArrays;