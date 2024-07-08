let fib1 = 1;
let fib2 = 1;
let sum = 2;
for (i = 3; i <= 20; i = i + 1) {
  fibN = fib1 + fib2;
  fib1 = fib2;
  fib2 = fibN;
  sum = sum + fibN;
}
console.log(sum);
