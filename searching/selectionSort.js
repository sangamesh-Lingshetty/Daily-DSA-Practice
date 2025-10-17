function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let index = i;
    for (let j = i; j < array.length; j++) {
      if (min > array[j]) {
        min = array[j];
        index = j;
      }
    }
    let temp = array[i];
    array[i] = min;
    array[index] = temp;
  }

  return array;
}

//find the min and place into the biggining of the array.

console.log(selectionSort([11,42,2,54,6,2,2,3,5,6]));
