const array = [3,14,7,8,9,4], target = 18;
let hashmap = new Map();

// 18-3 = 15,
// 18-14 = 4,
// 18-7 = 11,
// 18- 8 = 10,
// 18-9 = 9,
// 18-4 = 14

// 3-0,
// 14 - 1,
// 7 - 2,
// 8-3,
// 9-4,


for(let i =0;i<array.length;i++){
    const complement = target - array[i];
    if(hashmap.has(complement)){
        console.log(hashmap.get(complement)," and ",i);
    }else{
        hashmap.set(array[i],i);
    }
}

console.log(hashmap);