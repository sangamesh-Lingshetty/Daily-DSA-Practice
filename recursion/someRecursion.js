const array = [4, 6, 8];
let isOdd = (value) => value % 2 !== 0;

function someRecursive(array, callback) {

  if (array.length === 0) {
    return false;
  }

  if (callback(array[0])) {
    return true;
  }

  return someRecursive(array.slice(1), callback);

}

console.log(someRecursive(array, isOdd));
