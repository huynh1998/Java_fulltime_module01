let fib1 = 0;
let fib2 = 1;
let dem = 0;
for (i = 1; i <= 30; i = i + 1) {
  fibN = fib1 + fib2;
  fib1 = fib2;
  fib2 = fibN;
  if (fibN % 5 === 0) {
    dem = dem + 1;
    console.log(`So thu ${dem} chia het cho 5 la ${fibN}`);
  }
}
