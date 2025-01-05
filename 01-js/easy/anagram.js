/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.replace("/\s/g", "").toLowerCase();
  str2 = str2.replace("/\s/g", "").toLowerCase();

  if (str1.length != str2.length) {
    return false;
  }

  const map1 = {};

  for (let char of str1) {
    if (map1.hasOwnProperty(char)) {
      map1[char] = map1[char] + 1;
    } else {
      map1[char] = 1;
    }
  }

  for (let char of str2) {
    if (map1.hasOwnProperty(char)) {
      map1[char] = map1[char] - 1;
      if (map1[char] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
