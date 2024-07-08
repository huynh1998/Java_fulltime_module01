// Nhap so n , tim cac so nguyen to tu 1 - n

// let n = +prompt("Nhap vao so n");
// for (i = 2; i < n; i = i + 1) {
//   let check = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       check = false;
//       break;
//     }
//   }

//   if (check) console.log(i);
// }

// Nhap so n , hien thi n so nguyen to

// kiem tra so n la so tu nhien , n > 0
let n = +prompt("Moi ban nhap vao so n");
//Bien dem so nguyen to dc in ra
let count = 0;
let num = 2; // so nguyen to dau tien trong day so nguyen to
while (count < n) {
  //phai tim ra so nguyen to thi bien count moi tang len 1 don vi
  let check = true;
  for (let i = 2; i < num; i = i + 1) {
    if (num % i === 0) {
      check = false;
    }
  }
  // kiem tra check. check last = check first thi bien dem count tang len 1 don vi
  if (check === true) {
    console.log(num);
    count = count + 1;
  }
  //check sai thi bien num tang len 1 roi kiem tra lai vong lap for
  num = num + 1;
}
