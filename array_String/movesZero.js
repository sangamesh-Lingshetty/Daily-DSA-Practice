const value = [0, 1, 0, 3, 12];


function moves(value) {
  let j = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] != 0) {
      value[j] = value[i];
      j++;
    }
  }

  for(let k = j;k<value.length;k++){
      value[j] = 0;
      j++;
  }
  return value;
}

console.log(moves(value));
