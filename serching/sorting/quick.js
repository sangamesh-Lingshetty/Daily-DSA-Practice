// quick sort
let array = [4,8,2,1,5,7,6,3];
function pivotHelper(array) {
  const pivot = array[0];
  let i = 1; //2,
  let j = 1; //0,1,2,3
  while (i < array.length) {
    if (pivot >= array[i]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      i++;
      j++;
    } else {
      i++;
    }
  }
  let temp = array[j-1];
  array[j-1] = pivot;
  array[0] = temp;

  return array;
}

console.log(pivotHelper(array));
