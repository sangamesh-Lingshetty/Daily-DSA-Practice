// LeetCode 209 – Minimum Size Subarray Sum
const target = 7,
  array = [2, 3, 1, 2, 4, 3];
function MinimumSizeSubarraySum() {
  let sum = 0;
  let min = Infinity;
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    while (sum >= target) {
      min = Math.min(min, i - j + 1);
      sum = sum - array[j];
      j++;
    }
  }
  return min === Infinity ? 0 : min;
}

console.log(MinimumSizeSubarraySum());
