function param(string) {
  let stack = [];
  let pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      let popped = stack.pop();
      if (!popped || popped !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0; //valid parathises true value.
}

console.log(param("()[]{}"));
