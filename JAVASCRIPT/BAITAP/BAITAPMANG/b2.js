// BAI 1 : Dem bao nhieu so > 10 trong mang

// let a = [2, 5, 8, 12, 14, 6, 9, 24, 4, 15];
// let dem = 0;
// for (i = 0; i <= a.length - 1; i++) {
//   if (a[i] > 10) {
//     console.log(a[i]);
//     dem = dem + 1;
//   }
// }
// console.log(dem);

// BAI 2 : Tim max va hien vi tri max

// let a = [2, 5, 8, 12, 14, 6, 9, 24, 4, 15];
// // Dat max = gtri cua mang tai vi tri so 0
// let max = a[0];
// let vitri;
// //Vong lap va so sanh tung phan tu voi max
// // phan tu a[i] > max thi gan max bang chinh phan tu a[i] day
// for (i = 1; i < a.length; i++) {
//   if (max < a[i]) {
//     max = a[i];
//     vitri = i;
//   }
// }
// console.log(`${max} o vi tri thu ${vitri}`);

//BAI 3: Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
// let a = [2, 5, 8, 12, 14, 6, 9, 24, 4, 15];
// let sum = 0;
// let TB;
// for (i = 0; i < a.length; i++) {
//   sum = sum + a[i];
//   TB = sum / a.length;
// }
// console.log(TB);
// let b = [];
// for (i = 0; i < a.length; i++) {
//   b.unshift(a[i]);
// }
// console.log(b);

// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.

// let a = [-2, 5, -8, 12, 14, -6, 9, 24, 4, -15];
// let dem = 0;
// for (i = 0; i < a.length; i++) {
//   if (a[i] < 0) {
//     dem = dem + 1;
//     console.log(a[i]);
//   }
// }
// console.log(dem);

// Bai 6 :Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không?

// let n = +prompt("Nhap so nguyen");
// let a = [-2, 5, -8, 12, 14, -6, 9, 24, 4, -15];
// let check = false;
// for (i = 0; i < a.length; i++) {
//   if (n === a[i]) {
//     check = true;
//   }
// }
// if (check === true) {
//   console.log("Number X is in the array");
// } else {
//   console.log("Number X is not in the array");
// }

// Bai 7 : Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không?
//  Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.

// let n = +prompt("Nhap so nguyen");
// let a = [-2, 5, -8, 12, 14, -6, 9, 24, 4, -15];
// let check = false;
// for (i = 0; i < a.length; i++) {
//   if (n === a[i]) {
//     check = true;
//     a.splice(i, 1);
//     a.push(0);
//   }
// }
// if (check === true) {
//   console.log(a);
// } else {
//   console.log(`So ${n} khong nam trong mang`);
// }

// Bai 8 :Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.

// let a = [-2, 5, -8, 12, 14, -6, 9, 24, 4, -15];
// let sapxep;
// for (i = 0; i < a.length; i++) {
//   for (j = i + 1; j < a.length; j++) {
//     if (a[i] > a[j]) {
//       sapxep = a[j];
//       a[j] = a[i];
//       a[i] = sapxep;
//     }
//     console.log(a);
//   }
// }

// let a = [-2, 5, -8, 12, 14, -6, 9, 24, 4, -15];
// let b = [-2, 5, -8, 12, 14, -6, 9, 24, 4, -15];
// c = [];
// for (i = 0; i < a.length; i++) {
//   for (i = 0; i < b.length; i++) {
//     c.push(a[i], b[i]);
//   }
// }
// console.log(c);

// let a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// console.log(a[1][2]); //ket qua 9 => Lay phan tu so 2 cua mang a[1]

// let a = ["c", "s", "c", "2", "6", "1"];
// let b = [];
// let c = [];
// let dem = 0;
// for (i = 0; i < a.length; i++) {
//   b.unshift(a[i]);
//   if (a[i] % 1 === 0) {
//     c.push(a[i]);
//     dem = dem + 1;
//   }
// }
// console.log(b.join(""));
// console.log(c);
// console.log(dem);

// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.
// let a = "162csc";
// let dem = 0;
// for (i = 0; i < a.length; i++) {
//   if (a[i] % 1 === 0) {
//     dem = dem + 1;
//   }
// }
// console.log(dem);

// Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

let a = "Hello World";
let b = "World Hello";
let check = false;
for (i = 0; i < a.length; i++) {
  if (a[i] === b[i]) {
    check = true;
  }
}
if (check === true) {
  console.log("Giong nhau");
} else {
  console.log("Khac nhau");
}
