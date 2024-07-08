let n = +prompt("Nhap so n");
console.log(`Các ước của ${n}`);
for (i = 2; i <= n; i = i + 1) {
  if (n % i === 0) {
    j = n / i;
    console.log(j);
  }
}
