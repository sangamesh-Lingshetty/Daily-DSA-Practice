// LeetCode 713 – Subarray Product Less Than K
const array = [10, 5, 2, 6],
  k = 100;



// Output: 8
function SubarrayProductLessThan() {
  let product = 1;
  let count = 0;
  let left =0;
  for (let i = 0; i < array.length; i++) {
    product = product * array[i];
    while(product >= k){
        product = product/array[left];
        left++;
    }
    count += (i - left+1);
  }
  return count;
}

console.log(SubarrayProductLessThan());


//   10
// 10*5 = 50
// 50*2 = 100