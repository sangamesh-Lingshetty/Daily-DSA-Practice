
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "object" && !Array.isArray(value)) {
        obj[key] = stringifyNumbers(value);
    }else if(typeof value === "number"){
        obj[key] = value.toString();
    }
  }
  return obj;
}

console.log(stringifyNumbers(obj));
