let a = [10, -4, 5, 7, -2, 9];
let dem = 0;
for (i = 0; i <= a.length - 1; i = i + 1) {
  if (a[i] < 0) {
    dem = dem + 1;
    console.log(a[i]);
  }
}
console.log(`Co ${dem} so nguyen am trong chuoi`);
