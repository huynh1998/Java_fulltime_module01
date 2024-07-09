let a = ["c", "s", "c", "2", "6", "1"];
let b = [];
for (i = a.length - 1; i >= 0; i = i - 1) {
  b.push(a[i]);
}
console.log(`"${b.join("")}"`);
