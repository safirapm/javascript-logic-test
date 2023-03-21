function wordPalindrome(str) {
  let reversedWord = str.split("").reverse().join("");

  if (str === reversedWord) {
    return true;
  } else {
    return false;
  }
}

console.log(wordPalindrome("racecar"));
console.log(wordPalindrome("level"));
console.log(wordPalindrome("radar"));
console.log(wordPalindrome("civic"));
console.log(wordPalindrome("clever"));
console.log(wordPalindrome("clear"));
console.log(wordPalindrome("bmw"));
