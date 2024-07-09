let a = [5, 6, 9, 3, 11, 16, 2, 1, 22, 7];
let dem = 0;
for (i = 0; i <= a.length - 1; i = i + 1) {
  if (a[i] > 10) {
    dem = dem + 1;
  }
}
console.log(dem);
