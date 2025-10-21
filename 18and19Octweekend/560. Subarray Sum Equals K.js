function SubarraySumEqualsK(nums, k) {
  let obj = {};
  obj[0] = 1;
  let prefix = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i];
    let prefixSum = prefix - k;
    if (obj[prefixSum]) {
      count += obj[prefixSum];
    }
    obj[prefix] = (obj[prefix] || 0) + 1;
  }
  return count;
}

console.log(SubarraySumEqualsK([1, 2, 3], 3));
