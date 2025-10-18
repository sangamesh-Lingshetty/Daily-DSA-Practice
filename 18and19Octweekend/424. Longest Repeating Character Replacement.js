function longest(s, k) {
  let j = 0;
  let maxFreQ = 0;
  let maxLength = 0;
  let frequecy = {};
  for (let i = 0; i < s.length; i++) {
    frequecy[s[i]] = (frequecy[s[i]] || 0) + 1;
    maxFreQ = Math.max(maxFreQ, frequecy[s[i]]);

    // if need the shring the value from the left side
    if (i - j + 1 - maxFreQ > k) {
      frequecy[s[j]]--;
      j++;
    }
    maxLength = Math.max(maxLength, i - j + 1);
  }
  return maxLength;
}
console.log(longest("ABAB", 2));
// above solution is the very easiest solution using the sliding window concept.