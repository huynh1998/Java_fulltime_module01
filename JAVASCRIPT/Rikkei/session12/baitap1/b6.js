// let sum = 0;
// for (i = 1; i <= 30; i = i + 1) {
//   sum = sum + 7 * i;
// }
// console.log(sum);

// Nhap so tu nhien n. tinh tong cac so chia het cho 7

let n = +prompt("Nhap vao so n tu nhien");
let sum = 0;
for (i = 1; i <= n; i = i + 1) {
  if (i % 7 === 0) {
    sum = sum + i;
  }
}
console.log(sum);
