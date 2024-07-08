// Yêu cầu người dùng nhập vào một số nguyên. Nếu số đã nhập > 0,
//  yêu cầu người dùng nhập tiếp cho đến khi số đã nhập < 0. Tính tổng các số đã nhập.
let n = +prompt("Nhap vao so n > 0");
let sum = 0;
while (n > 0) {
  sum = sum + n;
  n = +prompt("Nhap mot so < 0 se dung lai");
}
console.log(sum);
