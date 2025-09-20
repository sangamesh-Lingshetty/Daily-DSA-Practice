const array = [2,6,9,2,1,8,5,6,3];
const target = 3;

// // 17
// // 17
// // 12
// // 11
// // 14
// // 19 max value 
// // 14

// // time complexity is o(n);

// function maxSubArray(array,target){
//     let sum =0;
//     let max = -Infinity;
//     for(let i =0;i<array.length - target+1;i++){
      
//         for(let j = 0;j<target;j++){
//             sum += array[j+i];
//         }
//         if(max < sum){
//             max = sum;
//         }

//         sum = 0;
//     }
//     return max;
// }


// console.log(maxSubArray(array,target));

// sliding window for the optimizing solution for this

// [2,6,9,2,1,8,5,6,3]
function maxSubArray(array,target){
    let maxSum =0;
    let tempSum =0;
    for(let i =0;i<target;i++){
        maxSum +=array[i];
    }

    tempSum = maxSum;
    for(let i = target;i<array.length;i++){
        tempSum = tempSum - array[i-target]  + array[i];
        maxSum = Math.max(maxSum,tempSum);
    }
   return maxSum;
}


console.log(maxSubArray(array,target));