let a = [];
for (i = 0; i < 5; i = i + 1) {
  let n = prompt("Nhap cac phan tu mang vao");
  a.push(n);
}
let b = [];
for (j = 0; j < a.length; j = j + 1) {
  if (a[j] % 1 === 0) {
    b.push(a[j]);
  }
}
console.log(a);
console.log(b.join());
