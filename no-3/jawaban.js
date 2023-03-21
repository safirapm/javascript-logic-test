function longestHashtag(str) {
  let longestWord = str
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .slice(0, 3);
  return longestWord.map((str) => "#" + str.toLowerCase());
}

console.log(
  longestHashtag("How the Avocado Became the Fruit of the Global Trade")
);
console.log(longestHashtag("Those programmer is skillful"));
console.log(longestHashtag("You have another luxury car"));
