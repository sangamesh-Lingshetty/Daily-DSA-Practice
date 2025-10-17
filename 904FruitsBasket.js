function basket(array) {
  let obj = {};
  let left =0;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = (obj[array[i]] || 0) + 1;
    if(Object.keys(obj).length>2){
        obj[array[left]]--;
        if(obj[array[left]]===0){
            delete obj[array[left]];
        }
        left++;
    }
   
    max = Math.max(max,i-left+1);
  }
  
  return max;
}

console.log(basket([1, 2, 3, 2, 2]));
