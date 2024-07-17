function factorial(num) {
  let value = 1;
  for (i = 1; i <= num; i = i + 1) {
    value = value * i;
  }
  return value;
}

console.log(factorial(5));
