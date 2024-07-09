let a = [5, 6, 9, 3, 11, 16, 2, 1, 22, 7];
let max = a[0];
let sum = 0;
for (i = 0; i <= a.length - 1; i = i + 1) {
  sum = sum + a[i];
  DTB = sum / a.length;
  if (max < a[i]) {
    max = a[i];
  }
}

console.log(` ${max} la so lon nhat`);
console.log(DTB);
