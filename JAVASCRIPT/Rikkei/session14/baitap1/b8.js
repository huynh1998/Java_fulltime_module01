let a = [5, 6, 9, 3, 11, 16, 2, 1, 22, 7];
for (i = 0; i < a.length - 1; i = i + 1) {
  for (j = i + 1; j < a.length; j = j + 1) {
    if (a[i] < a[j]) {
      let sapxep = a[i];
      a[i] = a[j];
      a[j] = sapxep;
    }
  }
}
console.log(a);
