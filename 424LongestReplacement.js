var characterReplacement = function(s, k) {
    let count = new Array(26).fill(0);
    let left = 0, maxFreq = 0, result = 0;

    for (let right = 0; right < s.length; right++) {
        count[s.charCodeAt(right) - 65]++;
        maxFreq = Math.max(maxFreq, count[s.charCodeAt(right) - 65]);

        // if window invalid → shrink from left
        while ((right - left + 1) - maxFreq > k) {
            count[s.charCodeAt(left) - 65]--;
            left++;
        }
        result = Math.max(result, right - left + 1);
    }

    return result;
};

// console.log(characterReplacement(s = "ABAB", k = 2)); //ouput is 4
// console.log(characterReplacement(s = "AABABBA", k = 1)); //4
// console.log(characterReplacement(s = "ABCDE", k = 1)); //2
console.log(characterReplacement(s = "AAAB", k = 0)); //3
