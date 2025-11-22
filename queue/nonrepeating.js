function non(string) {
  let obj = {};
  let queue = [];
  let result = [];

  for (let char of string) {
    obj[char] = (obj[char] || 0) + 1;
    queue.push(char);

    while (queue.length > 0 && obj[queue[0]] > 1) {
      queue.shift();
    }

    if (queue.length === 0) {
      result.push("-1");
    } else {
      result.push(queue[0]);
    }
  }

  return result;

}

// result ["a","-1","b","b"];
console.log(non("aabc"));
