let n = +prompt("Nhap so n");

// so nguyen to la so chi chia het cho 1 va chinh
// vd : 14, [13,12,11,...2]

// ky thuat cam co; bat cong tac
let check = true;
for (let i = 2; i < n; i = i + 1) {
  if (n % i === 0) {
    check = false;
    break;
  }
}

// neu check first = false # check last = true => dung =>
if (check === true) {
  console.log(`${n} la so nguyen to`);
} else {
  console.log(`${n} khong phai so nguyen to`);
}
