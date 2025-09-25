function capitalizeWords (array) {
  // add whatever parameters you deem necessary - good luck!
    if(array.length ===0){
        return [];
    }
    let value = array[0].toUpperCase();
    return [value].concat(capitalizeWords(array.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']