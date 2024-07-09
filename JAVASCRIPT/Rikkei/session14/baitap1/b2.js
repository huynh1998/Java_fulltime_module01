let a = [5, 6, 9, 3, 11, 16, 2, 1, 22, 7];
let max = a[0];
for (i = 1; i <= a.length - 1; i = i + 1) {
  if (max < a[i]) {
    max = a[i];
    vitri = i;
  }
}

console.log(`So lon nhat la ${max} tai vi tri ${vitri}`);
