let A = "245468777888";
let convert = A.split("");
for (i = 0; i <= convert.length - 1; i = i + 1) {
  if (convert[i] % 2 === 0 && convert[i + 1] % 2 === 0) {
    convert.splice(i + 1, 0, "-");
  }
}
console.log(convert.join(""));
