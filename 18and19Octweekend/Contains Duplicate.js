// Problem 1: Contains Duplicate (Easy - Warm up)
// Link: https://leetcode.com/problems/contains-duplicate/
// Time limit: 30 mins
// Why: Simple HashMap practice, builds confidence
// Pattern: Hash Set for tracking
// Hint: Use a Set to track seen numbers

function value(array, k) {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      const lastIndex = map.get(array[i]);
      if (i - lastIndex <= k) return true;
    }
    map.set(array[i], i);
  }
  return false;
}

console.log(value([1, 0, 1, 1], 1));
