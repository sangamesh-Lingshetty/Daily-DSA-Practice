const array = [10, 5, 2, 6],
  k = 100;

function value() {
  let product = 1;
  let count = 0;
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    product = array[i] * product;
    while (product >= k) {
      product = product / array[j];
      j++;
    }
    count += i - j + 1;
  }
  return count;
}

console.log(value());
