// BÀI 6: Viết chương trình kiểm tra số N có phải là số hoàn hảo hay không? N nhập từ browser
// let n = +prompt("Nhap so n vao");
// let sum = 0;
// for (i = 1; i < n; i = i + 1) {
//   if (n % i === 0) {
//     sum = sum + i;
//   }
// }
// if (sum === n && n !== 0) {
//   console.log(`${n} la so hoan hao`);
// } else {
//   console.log(`${n} ko la so hoan hao`);
// }

let n = +prompt("Nhập sô nguyên dương n");
let sum = 0;
for (i = 2; i <= n; i = i + 1) {
  if (n % i === 0) {
    console.log(n / i);
    sum = sum + n / i;
    console.log(sum);
  }
}
if (n === sum) {
  console.log(`${n} là số hoàn hảo`);
} else {
  console.log(`${n} không phải số hoàn hảo`);
}
