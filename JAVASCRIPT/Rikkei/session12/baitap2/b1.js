let n = +prompt("Nhap a so fibonaci");
let fib1 = 1;
let fib2 = 1;
for (i = 3; i <= n; i = i + 1) {
  fibN = fib1 + fib2;
  fib1 = fib2;
  fib2 = fibN;
  console.log(fibN);
}
