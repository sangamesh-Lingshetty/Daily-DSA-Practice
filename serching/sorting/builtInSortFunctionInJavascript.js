const array = [23, 45, 83, 67, 2, 4, 89, 0];
function compareNumber(array) {
  return array.sort((a, b) => a - b);
}

console.log(compareNumber(array));
//45-23 =22;
// 83-45=38;
// 67-83 = -16;
