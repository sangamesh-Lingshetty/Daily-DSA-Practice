const  target = 7, array = [2,3,1,2,4,3];

function minValue(){
    let sum =0;
    let left = 0;
    let min = Infinity;
    for(let i =0;i<array.length;i++){
        sum += array[i];
        while(sum >= target){
            min = Math.min(min, i - left + 1);
            sum = sum - array[left]; 
            left++;
        }
    }
    return min;
}

console.log(minValue());