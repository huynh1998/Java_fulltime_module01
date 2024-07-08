let fib1 = 1;
let fib2 = 1;
let fibN;
for (i = 1; i <= 18; i = i + 1) {
  fibN = fib1 + fib2;
  fib1 = fib2;
  fib2 = fibN;
  console.log(fibN);
  break;
}
