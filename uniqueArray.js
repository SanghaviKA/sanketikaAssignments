function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
let num = [1, 2, 3, 3, 4, 5, 5, 6];

console.log(unique(num));


