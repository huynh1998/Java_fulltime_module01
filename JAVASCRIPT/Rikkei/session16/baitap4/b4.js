let a = "Hello World";
let b = a.toLowerCase();
console.log(b);
let d = {};
for (i = 0; i <= b.length - 1; i = i + 1) {
  let c = b[i];
  if (c in d) {
    continue;
  }
  d[c] = true;
  let dem = 1;
  for (j = i + 1; j <= b.length - 1; j = j + 1) {
    if (b[i] === b[j]) {
      dem = dem + 1;
    }
  }
  console.log(`${b[i]} lap lai ${dem}`);
}
