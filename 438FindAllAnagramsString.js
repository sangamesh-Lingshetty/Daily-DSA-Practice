// // LeetCode 438 – Find All Anagrams in a String

// const s = "cbaebabacd",
//   p = "abc";

// function Anagrams() {
//   let result = [];
//   let obj = {};
//   for (let value of p) {
//     obj[value] = (obj[value] || 0) + 1;
//   }
//   let i =0;
//   let j =0;
//   while(p.length == i){
//     let char = s[i];
//     obj[char]
//   }
//   return result;
// }

// console.log(Anagrams());

// const s = "cbaebabacd", p = "abc"

// function value(){
//   let j =0;
//   let obj = {};
//   let result = [];
//   for(let i =0;i<p.length;i++){
//     obj[p[i]] = (obj[p[i]] || 0)+1
//   }
//   let left = 0;
//   let right = 0;
//   let windowsObj = {};
//   for(let i =0;i<p.length;i++){
//     windowsObj[p[i]] = (windowsObj[p[i]] || 0)+1
//   }
//   return result;
// }

// console.log(value());

// const s = "cbaebabacd", p = "abc";
// function value() {
//   let obj = {};
//   let stock = [];
//   let sObject = {};
//   for (let i = 0; i < p.length; i++) {
//     obj[p[i]] = (obj[p[i]] || 0) + 1;
//   }
 
//   for (let i = 0; i < s.length; i++) { 
//     const sub = s.slice(i, i + p.length);
//     for (let char of sub) {
//       sObject[char] = (sObject[char] || 0) + 1;
//     }

//     let same = true;
//     for (let key in obj) {
//       if (obj[key] !== sObject[key]) {
//         same = false;
//         break;
//       }
//     }
//     if(same){
//       stock.push(i);
//     }
//   }
//   return stock;
// }
// console.log(value());


const s = "cbaebab acd", p = "abc";
function value() {
  let obj = {};
  let stock = [];
  
  for (let i = 0; i < p.length; i++) {
    obj[p[i]] = (obj[p[i]] || 0) + 1;
  }
  

  let sObject = {};
  for (let i = 0; i < s.length; i++) { 
    // window size
    sObject[s[i]] = (sObject[s[i]] ||0)+1

    if(i>=p.length){
      const leftChar = s[i-p.length];
      sObject[leftChar]--;
      if(sObject[leftChar] ===0) delete  sObject[leftChar];
    }

    if(i >= p.length-1){
      let same = true;
      for(let key in obj){
        if(sObject[key] !== obj[key]){
          same = false;
          break;
        }
      }
      if(same) stock.push( (i - p.length)+1);
    }
  }
  return stock;
}
console.log(value());
