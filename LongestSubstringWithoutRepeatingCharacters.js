// // // 1. LeetCode 3 – Longest Substring Without Repeating Characters
// // Input: s = "abcabcbb"
// // Output: 3
// // Explanation: The answer is "abc", with the length of 3.

// // Input: s = "bbbbb"
// // Output: 1
// // Explanation: The answer is "b", with the length of 1.

// // Input: s = "pwwkew"
// // Output: 3
// // Explanation: The answer is "wke", with the length of 3.

// // Input: s = ""
// // Output: 0

// // Input: s = "dvdf"
// // Output: 3

// // const array = "abba";
// // function LongestSubstring() {
// //   let obj = {};
// //   let max = 0;
// //   let left = 0;
// //   for (let i = 0; i < array.length; i++) {
// //     let char = array[i];
// //     if (obj[char] !== undefined) {
// //       //duplicate value found.
// //       left = obj[char]+1;
// //     }
// //       obj[char] = i;
// //       max = Math.max(max,i - left+1);
    
// //   }
// //   return max;
// // }




// const array = "abcabcbb";
// function LongestSubstring(){
//   let current = "";
//   let max = 0;
//   for(let i =0;i<array.length;i++){
//     let char = array[i];

//     let idx = current.indexOf(char);
//     if(idx !== -1){
//       current = current.substring(idx+1);
//     }

//     current += char;
//     max = Math.max(max,current.length);
//   }
//   return max;
// }
// console.log(LongestSubstring());


// const s = "pwwkew";

// function value(){
//   let max = 0;
//   for(let i = 0;i<s.length;i++){
//     for(let j = i;j<s.length;j++){
//       let subString = s.substring(i,j+1);
//       if(isUnique(subString)){
//         max = Math.max(max,subString.length);
//       }
//     }
//   }
//   return max;
// }


// function isUnique(substring){
//   let set = new Set();
//   for(let char of substring){
//     if(set.has(char)){
//       return false;
//     }
//     set.add(char);
//   }
//   return true;
// }



// sliding window 
const s = "abeabec";

function value(){
  let max = 0;
  let obj = {};
  // for(let i = 0;i<s.length;i++){
  //   obj[s[i]] = (obj[s[i]]||0)+1
  // }
  let left = 0;
  for(let i =0;i<s.length;i++){
    const char = s[i];
    if(obj[char] !== undefined){ //duplicate found.
      left = obj[char]+1;
    }
    obj[char] = i;
    max = Math.max(max,i-left + 1);
  }

  return max;
}

console.log(value());