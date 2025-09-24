// Input: flatten([1, 2, 3, [4, 5]])
// Output: [1, 2, 3, 4, 5]

function flattan(array){
    if(array.length ===0){
        return [];
    }
    let first = Array.isArray(array[0]) ? flattan(array[0]):[array[0]];
    return first.concat(flattan(array.slice(1)));
}

// first = 1;
// return 1+falt([2, 3], [4, 5]); => 1+[2,3] = [1,2,3];
//     first = flat([2,3]) 
//         first = 2;
//         return 2+falt(3) => 2+[3] = [2,3]
//             first = 3 
//             return 3+flat([]); -> [] + 3 = [3];

// first = [4,5];
//     return 4+flat(5); 4+[5]; = [4,5];

// first = 5;
//     return 5+flat([]); => [] +5 = [5];


// first= [1,2,3] + [4,5];
// [1,2,3,4,5];

console.log(flattan([1, [2, 3], [4, 5]]));
