export const snail = function (array) {
  const arraysCount = array.length;
  const arrayLength = array[0].length;
  let [x, y] = [0, 0];
  let movingCount = 0;
  const listOfVisitedCoordinates = [];

  const isVisitedCoordinates = (coordinates) =>
    listOfVisitedCoordinates.find(visitedCoordinates =>
      visitedCoordinates[0] === coordinates[0] &&
      visitedCoordinates[1] === coordinates[1]
    );

  const moveForward = (direction) => {
    if (movingCount === (arrayLength + arraysCount) - 1) {
      return;
    }

    switch (direction) {
      case 'right':
        while (!isVisitedCoordinates([x, y]) && x < arrayLength) {
          listOfVisitedCoordinates.push([x, y]);
          x++;
        }
        x--;
        y++;
        movingCount += 1;
        moveForward('down');
        break;
      case 'down':
        while (!isVisitedCoordinates([x, y]) && y < arraysCount) {
          listOfVisitedCoordinates.push([x, y]);
          y++;
        }
        y--;
        x--;
        movingCount += 1;
        moveForward('left');
        break;
      case 'left':
        while (!isVisitedCoordinates([x, y]) && x >= 0) {
          listOfVisitedCoordinates.push([x, y]);
          x--;
        }
        x++;
        y--;
        movingCount += 1;
        moveForward('up');
        break;
      case 'up':
        while (!isVisitedCoordinates([x, y]) && y >= 0) {
          listOfVisitedCoordinates.push([x, y]);
          y--;
        }
        y++;
        x++;
        movingCount += 1;
        moveForward('right');
        break;
    }
  }

  moveForward('right');

  return listOfVisitedCoordinates.map(([x, y]) => array[y][x]);
}

console.log(snail([[1]]));
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));