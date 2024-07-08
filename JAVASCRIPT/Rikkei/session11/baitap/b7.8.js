// BÀI 8: In ra dãy 20 số Fibonaci đầu tiên
let fib1 = 0;
let fib2 = 1;
for (i = 2; i <= 20; i = i + 1) {
  let fibN = fib1 + fib2;
  fib1 = fib2;
  fib2 = fibN;
  console.log(fibN);
}
