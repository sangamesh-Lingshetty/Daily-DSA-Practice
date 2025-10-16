// quick sort
let array = [4, 8, 2, 1, 5, 7, 6, 3];
function pivotHelper(array, start = 0, end = array.length - 1) {
  const pivot = array[start];
  // let i = 1; //2,
  // let j = 1; //0,1,2,3
  // while (i < array.length) {
  //   if (pivot >= array[i]) {
  //       let temp = array[j];
  //       array[j] = array[i];
  //       array[i] = temp;
  //     i++;
  //     j++;
  //   } else {
  //     i++;
  //   }
  // }
  // let temp = array[j-1];
  // array[j-1] = pivot;
  // array[0] = temp;
  // [3, 1, 2]
  let swapIndex = start;
  for (let i = start + 1; i < array.length; i++) {
    if (array[i] < pivot) {
      swapIndex++;
      let temp = array[swapIndex];
      array[swapIndex] = array[i];
      array[i] = temp;
    }
  }
  array[start] = array[swapIndex];
  array[swapIndex] = pivot;
  return swapIndex;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    let privotIndex = pivotHelper(array, start, end);
    quickSort(array, start, privotIndex - 1);
    quickSort(array, privotIndex + 1, end);
  }
  return array;
}

console.log(quickSort(array));

// [3, 1, 2, 4, 5, 7, 6, 3]
// [3, 1, 2]
