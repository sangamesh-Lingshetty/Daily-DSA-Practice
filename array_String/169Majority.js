// const array = [2, 2, 1, 1, 1, 2, 2];

// function majority(array) {
//   let hashMap = {};
//   let maxKey = 0;
//   let maxValue = -Infinity;
//   for (let value of array) {
//     hashMap[value] = (hashMap[value] || 0) + 1;
//   }

//   for (let key in hashMap) {
//     if (hashMap[key] > maxValue) {
//       maxValue = hashMap[key];
//       maxKey = key;
//     }
//   }
//   return maxKey;
// }

// console.log(majority(array));


// optimize solution
const array = [2,3,3,2];
function optimizeMajority(array){
    let count = 0;
    let actualValue = null;
    for(let eachValue of array){
      if(count ===0) actualValue = eachValue;
      if(eachValue === actualValue){
        count++;
      }else{
        count--;
      }
    }

    return actualValue
}

console.log(optimizeMajority(array));