let a = +prompt("Nhap so nguyen a");
let b = +prompt("Nhap so nguyen b");
function changeplaces(a, b) {
  let c = [];
  c.push(a, b);
  let d = [];
  for (i = c.length - 1; i >= 0; i = i - 1) {
    d.push(c[i]);
  }
  return d;
}
console.log(changeplaces(a, b));
