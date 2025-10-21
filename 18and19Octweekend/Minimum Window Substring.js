function Minimum_Window_Substring(s, r) {
  let obj = {};
  for (let objectValue of r) {
    obj[objectValue] = (obj[objectValue] || 0) + 1;
  }
  let startWindow = 0;
  let end = 0;
  let minLength = Infinity;
  let count = 0;
  let minStart = 0;
  while (end < s.length) {
    if (s[end] in obj) {
      obj[s[end]]--;
      if (obj[s[end]] >= 0) count++;
    }
    while (r.length === count) {
      if (end - startWindow + 1 < minLength) {
        minLength = end - startWindow + 1;
        minStart = startWindow;
      }
      let startCharacter = s[startWindow];
      if (startCharacter in obj) {
        obj[startCharacter]++;
        if (obj[startCharacter] > 0) count--;
      }
      startWindow++;
    }
    end++;
  }
  return minLength === Infinity
    ? ""
    : s.substring(minStart, minStart + minLength);
}

console.log(Minimum_Window_Substring("ADOBECODEBANC", "ABC"));
