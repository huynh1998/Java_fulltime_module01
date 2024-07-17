let a = [];

for (i = 1; i <= 5; i = i + 1) {
  let check = false;
  while (check == false) {
    let n = +prompt("Nhap vao so nguyen n");
    if (Number.isInteger(n)) {
      check = true;
      a.push(n);
    } else {
      alert("Nhap lai so nguyen");
    }
  }
}
console.log(a);
let max = a[0];
let min = a[0];
for (j = 0; j <= a.length - 1; j = j + 1) {
  if (max < a[j]) {
    max = a[j];
  }
  if (min > a[j]) {
    min = a[j];
  }
}
console.log(`Max là ${max}, Min là ${min}`);
