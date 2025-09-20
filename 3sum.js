const array = [1,0,-1,0,-2,2];

// sort =  [-10, -5, -5, -4, -4, -3, -2, -2, 0, 0, 1, 2, 2, 2, 2, 5, 5]
// sort = [-2,-1,0,0,1,2];

function threeSum(array,target) {
  array.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let firstValue = array[i];
      let secondValue = array[j];
      let start = j+1;
      let end = array.length - 1;
      if (i > 0 && array[i] === array[i - 1]) {
        continue;
      }
      if(j > i&& array[j] === array[j-1]) continue;
      while (start < end) {
        if (array[start] + array[end] + firstValue + secondValue < target) {
          start++;
        } else if (array[start] + array[end] + firstValue + secondValue === target) {
          result.push([firstValue, secondValue, array[start], array[end]]);
          while (start < end && array[start] === array[start + 1]) start++;
          while (start < end && array[end] === array[end - 1]) end--;
          start++;
          end--;
        } else {
          end--;
        }
      }
    }
  }
  return result;
}

console.log(threeSum(array,0));
