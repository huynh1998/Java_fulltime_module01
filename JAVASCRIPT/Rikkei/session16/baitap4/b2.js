let num = +prompt("Nhap so nguyen");
// if (Number.isInteger(num) && num > 1) {
//   check = true;
//   for (i = 2; i < n; i = i + 1) {
//     if (n % i === 0) {
//       check = false;
//       break;
//     }
//   }
// } else {
//   alert("Vui long nhap lai");
// }
// if ((check = true)) {
//   alert(`${num} la so nguyen to`);
// } else {
//   alert(`${num} khong phai so nguyen to`);
// }

function compare(number) {
  //Kiem tra neu number < 1 thi khong phai la so nguyen to
  if (number <= 1) {
    return false;
  }
  //Kiem tra number > 2
  for (i = 2; i < number; i = i + 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
if (compare(num)) {
  alert(`${num} la so nguyen to`);
} else {
  alert(`${num} khong phai so nguyen to`);
}
