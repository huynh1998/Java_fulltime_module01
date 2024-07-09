let a = "1,2,3,4,5";
let b = "1,2,3,4,6";
console.log(a);
console.log(b);
let check = false;
for (i = 0; i <= a.length - 1; i = i + 1) {
  if (a[i] !== b[i]) {
    check = true;
    break;
  }
}
if (check == true) {
  console.log("a va b khac nhau");
} else {
  console.log("a va b giong nhau");
}
