/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function evenPalindrome (str, strLength) {
  let loMid = strLength / 2 - 1;
  let hiMid = strLength / 2;
  for (let x = loMid; x >= 0; x--) {
    if (str[loMid] != str[hiMid]) {
      return false;
    }
    loMid -= 1;
    hiMid += 1;
  }
  return true;
}

function oddPalindrome (str, strLength) {
  let mid = Math.floor(strLength / 2);
  for (let x = mid; x >= 0; x--) {
    if (str[x] != str[mid]) {
      return false;
    }
    mid += 1;
  }
  return true;
}

function isPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase();
  str = str.replace(/[\.,?!]/g, '');
  const strLength = str.length;
  if (strLength % 2 == 0) {
    return evenPalindrome(str, strLength);
  } else {
    return oddPalindrome(str, strLength);
  }
}

module.exports = isPalindrome;
