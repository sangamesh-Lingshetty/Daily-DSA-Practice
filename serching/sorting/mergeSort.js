// merge sort
function merge(first, second) {
  //   see here first step is recognize the pattern which is the suitable for this?
  //   two pointer why?
  //   1.two sorted array.
  //   2.two array comapision
  let i = 0;
  let j = 0;
  let stock = [];
  while (i < first.length && j < second.length) {
    if (first[i] <= second[j]) {
      stock.push(first[i]);
      i++;
    } else {
      stock.push(second[j]);
      j++;
    }
  }

  while (j < second.length) {
    stock.push(second[j]);
    j++;
  }

  while (i < first.length) {
    stock.push(first[i]);
    i++;
  }
  return stock;
}

function split(array) {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = split(array.slice(0, mid));
  let right = split(array.slice(mid));
  return merge(left, right);
}

// console.log(merge([1, 10, 50, 89, 304, 607, 3333], [2, 14, 99, 100]));
console.log(split([56,345,56,3,34454,7,4,323,4,2,-1,-3456,678632]));
// left = [6,3,4]
// left = [6]
//  return left = [6];
