const array = [7, 1, 2, 3, 4, 5, 6];

function bubble(array) {
  for (let i = 0; i < array.length; i++) {
    let noSwap = false;
    for (let j = 0; j < array.length - i; j++) {
      console.log(array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwap = true;
      }
    }
    if (!noSwap) {
      break;
    }
    console.log("one pass complete!!!!");
  }
  return array;
}
console.log(bubble(array));
