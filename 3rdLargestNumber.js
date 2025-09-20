const array = [2, 5, 6, 1, 8, 83, 3, 16, 0];

function largestNumber(array) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let num of array) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num < firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = num;
    } else if (num > thirdLargest && num < secondLargest) {
      thirdLargest = num;
    }
  }

  return { firstLargest, secondLargest, thirdLargest };
}

console.log(largestNumber(array));
