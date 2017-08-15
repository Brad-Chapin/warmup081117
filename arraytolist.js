function arrayToList (arr) {
  let list = null;
  for (let i = (arr.length - 1); i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    }
  };
  return list;
};

function listToArray (list) {
  let arr = [];
  for (let next = list; next; next = next.rest) {
    arr.push(next.value);
  }
  return arr;
};

function prepend (ele, list) {
  let newList = {
    value: ele,
    rest: list
  }
  return newList;
};

function nth (list, num) {
  return (listToArray(list)[num]);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
