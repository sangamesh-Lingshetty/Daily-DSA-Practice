function capitalizeFirst(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) {
    return [] ;
  }
  let firstStr = array[0];
  let rest = firstStr.slice(1);

  let result = [firstStr[0].toUpperCase()+rest];
  return result.concat(capitalizeFirst(array.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
