let a = +prompt("Nhap so nguyen a");
let b = +prompt("Nhap so nguyen b");
let x = [];
if (a < b) {
  for (i = a; i <= b; i = i + 1) {
    x.push(i);
  }
} else {
  for (i = a; i >= b; i = i - 1) {
    x.push(i);
  }
}
console.log(x);
