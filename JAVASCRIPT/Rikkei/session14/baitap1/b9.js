// let a = [5, 6, 9, 3, 11, 16, 2, 1, 22, 7];
// let b = [-11, 2, 4, -8, 14, 26, 8, 10, 15, 18];
// let c = [];
// for (i = 0; i <= b.length - 1; i++) {
//   c.push(a[i], b[i]);
// }
// console.log(c);

let a = [];
let b = [];
for (let i = 1; i <= 3; i = i + 1) {
  let loop = true;
  while (loop) {
    let num = +prompt(`Moi ban nhap phan tu thu ${i} vao mang`);
    if (Number.isInteger(num)) {
      a.push(num);
      loop = false;
    } else {
      alert("Moi ban nhap lai");
    }
  }
}
for (let i = 1; i <= 3; i = i + 1) {
  let loop = true;
  while (loop) {
    let num = +prompt(`Moi ban nhap phan tu thu ${i} vao mang`);
    if (Number.isInteger(num)) {
      b.push(num);
      loop = false;
    } else {
      alert("Moi ban nhap lai");
    }
  }
}
console.log(a);
console.log(b);
let c = [];
for (i = 0; i < 3; i = i + 1) {
  c.push(a[i], b[i]);
}
console.log(c);
