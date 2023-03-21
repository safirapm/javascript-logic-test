function stringNearby(str) {
  let strAri = str.indexOf("Ari");
  let strDanang = str.indexOf("Danang");

  if (strAri - strDanang === 1 || strDanang - strAri === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(stringNearby(["Susi", "Ari", "Danang", "Jono"]));
console.log(stringNearby(["Okta", "Ari", "Beben", "Danang"]));
console.log(stringNearby(["Ari", "Danang", "Okta", "Beben"]));
console.log(stringNearby(["Danang", "Ari", "Beben", "Okta"]));
console.log(stringNearby(["Okta", "Beben", "Danang", "Ari"]));
