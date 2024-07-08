// nhap so n , tinh tong 30 so dau tien chia het cho 7 tu 1 -n

// let n = +prompt("Nhập số n vào");
// let sum = 0;
// for (i = 1; i <= n; i = i + 1) {
//   if (i % 7 === 0) {
//     let j = i / 7;
//     if (j <= 30) {
//       sum = sum + 7 * j;
//       //   (sum = sum + i;)
//     }
//   }
// }
// console.log(sum);

// Sử dụng vòng lặp từ 1 - 100. khi là số 99 hộp thoại thông báo đã hoàn thành

// for (i = 1; i <= 100; i = i + 1) {
//   console.log(i);
//   if (i === 99) {
//     console.log("Hoàn thành");
//   }
// }

// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.

// let fib1 = 1;
// let fib2 = 1;
// for (i = 3; i <= 20; i = i + 1) {
//   let fibN = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = fibN;
//   console.log(fibN);
// }

// Bài 4: Tìm 5 số đầu tiên trong dãy fibonacci chia hết cho 5

// let fib1 = 1;
// let fib2 = 1;
// let dem = 0;
// for (i = 3; i <= 50; i = i + 1) {
//   let fibN = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = fibN;
//   if (fibN % 5 === 0) {
//     dem = dem + 1;
//     if (dem <= 5) {
//       console.log(fibN);
//     }
//   }
// }

// BÀI 2: Viết chương trình hiển thị bình phương của số chẵn từ 2 🡪 N. N nhập từ người dùng.
//  Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.

// let n = +prompt("Nhap so chan n");
// if (n < 2 || n > 100) {
//   console.log("Nhap lai");
// } else {
//   for (i = 2; i <= n; i++) {
//     if (i % 2 === 0) {
//       console.log(i ** 2);
//     }
//   }
// }

// BÀI 6: Viết chương trình kiểm tra số N có phải là số hoàn hảo hay không? N nhập từ browser

// let n = +prompt("Nhap so n");
// let sum = 0;
// for (i = 2; i <= n; i++) {
//   if (n % i === 0) {
//     sum = sum + i;
//   }
// }

// if (n === sum) {
//   console.log(`${n} la so hoan hao`);
// } else {
//   console.log(`${n} ko la so hoan hao`);
// }

// Bai 7 : Nhap so n . tinh tong cac so chia het cho 7 tu 1 = n

// let n = +prompt("Nhap so n");
// let sum = 0;
// for (i = 1; i <= n; i = i + 1) {
//   if (i % 7 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

