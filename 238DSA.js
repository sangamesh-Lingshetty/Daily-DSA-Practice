const nums = [-1,1,0,-3,3];

function value(nums){
    const prefixValue = prefix();
    const sufixValue = sufix();
    let result = [];
    for(let i = 0;i<prefixValue.length;i++){
        result[i] = Math.abs(prefixValue[i] * sufixValue[i]);
    }
    return result;
}


function prefix(){
    let prefix =[];
    prefix[0] =1;
    for(let i = 1;i<nums.length;i++){
        prefix[i] =nums[i-1] * prefix[i-1];
    }
    return prefix;
}

function sufix(){
    let sufix =[];
    sufix[nums.length-1] =1;
    for(let i = nums.length-2;i >= 0;i--){
        sufix[i] =nums[i+1] * sufix[i+1];
    }
    return sufix;
}




console.log(value(nums));