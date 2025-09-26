let stock = [];
function collectStrings(obj) {
  if (typeof obj !== "object") {
    return;
  }
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "object") {
      collectStrings(value);
    } else if (typeof value === "string") {
      stock.push(value);
    }
  }
  return stock;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
