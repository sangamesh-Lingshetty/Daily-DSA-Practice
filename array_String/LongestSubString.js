// 3. Longest Substring Without Repeating Characters
const string = "abcabcbb";

function value(){
    let obj = {};
    let max = 0;
    let j = 0;
    for(let i =0;i<string.length;i++){
        const char = string[i];
        if(obj[char] !==undefined){
            j = obj[char] +1;
        }
        obj[char] = i;
        max = Math.max(max,i - j+1);
    }
    return max;
}

console.log(value());