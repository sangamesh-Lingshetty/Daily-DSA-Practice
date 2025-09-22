// let result = 1;
// function fact(n) {
//   if (n <= 0) {
//     return;
//   }
//   result = n * result;
//   fact(n - 1);
//   return result;
// }

// console.log(fact(5));

// Fib(0) = 0
// Fib(1) = 1
// Fib(2) = 1   (1 + 0)
// Fib(3) = 2   (1 + 1)
// Fib(4) = 3   (2 + 1)
// Fib(5) = 5   (3 + 2)
// Fib(6) = 8   (5 + 3)

// function febonacii(n) {
//   if(n == 0){
//     return 0;
//   }
//   if(n == 1){
//     return 1;
//   }
//   let result = febonacii(n-1) + febonacii(n-2)
//   return result;
// }
// console.log(febonacii(6));


// var myPow = function (x, n) {
//   if (n === 0) {
//     return 1;
//   }
//   if(n<0){
//     return 1/myPow(x,-n);
//   }
//   return x * myPow(x, n - 1);
// };

// console.log(myPow(2, 10));


// function increase(n){
//     if(n<=0){
//         return;
//     }
//     increase(n-1);
//     console.log(n);
// }
// increase(5);


// function sumRange(num){
//     if(num === 1) return 1;
//     return num + sumRange(num-1);
// }

// console.log(sumRange(5));
// 5!
// 5*4*3*2*1 = 120
// function factorial(num){
//     let total = 1;
//     for(let i =num;i>1;i--){
//         total *=i ;
//     }
//     return total;
// }
// console.log(factorial(5))

// function factorial(num){
//     if(num === 1) return 1;
//     return num * factorial(num-1);
// }
// console.log(factorial(5));


// function collectionOddNumbers(array){
//     let result = [];
//     function helper(array){
//         if(array.length ===0){
//             return;
//         }
//         if(array[0] %2 !==0){
//             result.push(array[0]);
//         }
//         helper(array.slice(1));
//     }
//     helper(array);
//     return result;
// }

// console.log(collectionOddNumbers([1,2,3,4,5,6,7,8,9]));

// using pure recursion we have to solve the this collect the odd number using the recursion
function collectionOddNumbers(array){
    let newArray = [];
    if(array.length ===0){
        return newArray;
    }

    if(array[0] %2 !== 0){//odd number found
        newArray.push(array[0]);
    }  
    newArray = newArray.concat(collectionOddNumbers(array.slice(1)));
    return newArray;
}

// console.log(collectionOddNumbers([1,2,3,4,5,6,7,8,9]));


// console.log(typeof(typeof(true)))

// operators
console.log(-0||0); //return the true value so 0
console.log(4 && 3); // return the true and true value so 3
console.log(5 && 0); // return the 0 false value and operator returns it.
console.log(5 || 0); // return the 5 true value it will return.
console.log(0 || 14); // return true value and first value 4
console.log(0 && 53); //return 0 false value
console.log(4 && +0); //return 0 becuase of -4 is the true value