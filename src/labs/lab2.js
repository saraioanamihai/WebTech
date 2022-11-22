function checkDivisible(n, divisor) {
  if (n % divisor == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

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
