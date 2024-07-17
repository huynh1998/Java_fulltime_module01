//BAI1: Viết một chương trình JavaScript thực hiện đảo ngược các giá trị trong một mảng đã cho

// let arr = [-3, 5, 1, 3, 2, 10];
// let a = [];
// for (i = arr.length - 1; i >= 0; i = i - 1) {
//   a.push(arr[i]);
// }
// console.log(a);

// Viết một chương trình JavaScript để tìm một giá tri được nhập vào từ hộp thoại có nằm trong mảng hay không.
//  Nếu có in ra vị trí của phần tử đó.

// let n = +prompt("Nhap gia tri");
// let arr = [-3, 5, 1, 3, 2, 10];
// for (i = 0; i <= arr.length - 1; i = i + 1) {
//   if (n === arr[i]) {
//     console.log(`So ${n} nam o vi tri ${i}`);
//     break;
//   }
// }

//Hướng dẫn tạo mảng và sử dụng các phương thức để thêm, xóa và thay đổi giá trị phần tử ở trong mảng

// let arr = [];
// for (i = 0; i <= 5; i = i + 1) {
//   let n = +prompt("Nhap so n vao");
//   arr.push(n);
// }

// console.log(arr);
// let a = 11;
// arr.unshift(a);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.splice(3, 2);
// console.log(arr);
// arr.splice(1, 0, 6, 81);
// console.log(arr);

// Tạo mảng có sẵn với các phẩn tử số. Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:

// let n = +prompt("Nhap so vao");
// array = [1, 2, 3, 4, 5, 6];
// let check = false;
// for (i = 0; i <= array.length - 1; i = i + 1) {
//   if (n === array[i]) {
//     check = true;
//     break;
//   }
// }
// if (check === true) {
//   console.log("Bingo");
// } else {
//   console.log("Chuc ban may man");
// }

// Cho ngươi dùng nhập vào dãy số bất kỳ. Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array.
//  Tiến hành đảo ngược các phần tử trong mảng

// let n = prompt("Nhap 1 chuoi so");
// arr = n.split(",");
// console.log(arr);
// let a = [];
// for (i = 0; i <= arr.length - 1; i = i + 1) {
//   a.unshift(arr[i]);
// }
// console.log(a.join(""));

// Cho người dùng nhập vào dãy số bất kỳ. Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array.
//  Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất trong mảng

// let n = prompt("Nhap 1 chuoi so");
// arr = n.split(",");
// console.log(arr);
// let max = arr[0];
// for (i = 0; i <= arr.length - 1; i = i + 1) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);

//Bài 1: Viết một chương trình JavaScript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau.

// let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// let a = myColor.join(",");
// console.log(`"${a}"`);

// Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (_) giữa 2 số chẵn.

// let a = "245468";
// let b = a.split("");
// console.log(b);
// for (i = 0; i < b.length; i = i + 1) {
//   if (b[i] % 2 === 0 && b[i + 1] % 2 === 0) {
//     b.splice(i + 1, 0, "-");
//   }
// }
// console.log(b.join(""));

// Bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường
// trong chuỗi vừa nhập sang thành dạng chữ hoa.

// let x = "Keep Calm And Code On";
// let a = "";
// for (i = 0; i < x.length; i = i + 1) {
//   if (x[i] === x[i].toUpperCase()) {
//     a = a + x[i].toLowerCase();
//   } else {
//     a = a + x[i].toUpperCase();
//   }
// }
// console.log(a);

// Bước 1: Tạo một trang web với một form đơn giản cho phép người dùng nhập từ cần tìm kiếm.

// let x = prompt("Nhap vao day");
// let a = ["1", "2", "3", "4"];
// let b = ["5", "6", "7", "8"];
// let c = "";
// for (i = 0; i < a.length; i = i + 1) {
//   console.log(a[i]);
//   if (x === a[i]) {
//     c = b[i];
//   }
// }
// alert(c);
