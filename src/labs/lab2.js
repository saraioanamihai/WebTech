// checking if a number if divisible by another
function checkDivisible(n, divisor) {
  if (n % divisor === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

// checking how many diferent charachters are in 2 strings
function difChar(str1, str2) {
  var ok = 0;
  if (str1.length === str2.length) {
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        ok++;
      }
    }
    return ok;
  } else {
    return -1;
  }
}
console.log(difChar("sara", "anne"));

// counting the number of appearances of a char in a string
function occurences(text, charachter) {
  let count = 0;
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === charachter) {
      count++;
    }
  }
  return count;
}
console.log(occurences("stefey", "e"));

function occurences2(text, charachter) {
  return text.split(charachter).length - 1;
}
console.log(occurences2("stefey", "e"));

// turning a string into an array
function stringToArray(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr[i] = str.charAt(i);
  }
  return arr;
}
console.log(stringToArray("1234"));

// adding elements to an array
function addToArray(array, ...args) {
  for (var i = 0; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}
let array = ["a"];
console.log(addToArray(array, "b", "c").join(", "));

// ??????
// intersperse elements of 2 arrays of the same length into 1
function intersperseArrays(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i = i + 2) {
    for (let j = 0; j < arr2.length; j = j + 2) {
      newArr.push(arr1[i], arr2[j]);
    }
  }
  return newArr;
}
console.log(intersperseArrays(["a", "b", "c"], ["d", "e", "f"]));
