// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(numsArray){
    if(numsArray.length ===0){
        return 1;
    }
    return numsArray[0] * productOfArray(numsArray.slice(1));
}

// dry run code for recursion
// return 1 * prod(2,3,10) -> 60*1 = 60
//     return 2* prod(3,10) -> 30 * 2 = 60
//         return 3 * prod(10) -> 10 * 3 = 30
//             return 10 * prod([]); -> 1*10 = 10


console.log(productOfArray([1,2,3]));