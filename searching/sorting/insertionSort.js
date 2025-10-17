function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
  }

  return array;
}

console.log(insertionSort([3, 2, 9, 10, 3, 2, 1]));
// currentValue = 1;
// j = -1;
// [1, 2, 2, 3, 3, 9, 10];

// the logic for this is!
// first take the number and compare with left side value only
// if the value is less then it will going to replace or swap the value is this the actaul logic.
