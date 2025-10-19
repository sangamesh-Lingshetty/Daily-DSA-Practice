function anagram(array) {
  let map = {};
  for (let word of array) {
    let key = word.split("").sort().join("");
    if (map[key]) {
      map[key].push(word);
    } else {
      map[key] = [word];
    }
  }

  return Object.values(map);
}

// key                 value
// "aet"               ["eat"]
// "aet"               ["eat","tea"]
// "ant"               ["tan"]
// "aet"               ["eat","tea","ate"]
// "ant"               ["tan","nat"]
// "abt"               ["bat"]

//final answers: [["eat","tea","ate"],["tan","nat"],["bat"]]

const result = anagram(["eat", "tea", "tan", "ate", "nat", "bat"]);
result.forEach((value) => console.log(value));
