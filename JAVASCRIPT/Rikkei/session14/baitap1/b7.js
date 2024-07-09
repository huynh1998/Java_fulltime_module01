let a = [5, 6, 9, 3, 11, 16, 2, 1, 22, 7];
let check = -1;
let x = +prompt("Nhap so nguyen");
for (i = 0; i <= a.length - 1; i = i + 1) {
  if (x === a[i]) {
    check = i;
    break;
  }
}
if (check == i) {
  a.splice(i, 1);
  a.push(0);
  console.log(a);
}
