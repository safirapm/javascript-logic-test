function ascendAlphabet(str) {
  return str.split("").sort().join("");
}

console.log(ascendAlphabet("lamborgini"));
console.log(ascendAlphabet("toyota"));
console.log(ascendAlphabet("porche"));
console.log(ascendAlphabet("bmw"));
console.log(ascendAlphabet("mazda"));
