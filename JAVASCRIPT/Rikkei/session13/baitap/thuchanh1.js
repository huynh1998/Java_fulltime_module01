// let x = [-3, 5, 1, 3, 2, 10];
// let result = "";
// for (i = x.length - 1; i >= 0; i = i - 1) {
//   result = result + ` ${x[i]}`;
// }
// console.log(result);

// Viết một chương trình JavaScript để tìm một giá tri được nhập vào từ hộp thoại có nằm trong mảng hay không.
//  Nếu có in ra vị trí của phần tử đó.
// let value = +prompt("Nhập số bất kỳ");
// let number = [-3, 5, 1, 3, 2, 10];
// for (i = 0; i <= number.length - 1; i = i + 1) {
//   if (value == number[i]) {
//     console.log(`${number[i]} nằm ở vị trí ${i}`);
//   }
// }

// Hướng dẫn tạo mảng và sử dụng các phương thức để thêm, xóa và thay đổi giá trị phần tử ở trong mảng

// let array = [];
// for (let i = 0; i < 5; i++) {
//   array.push(i);
// }
// // console.log(array);
// let a = 10;
// array.unshift(a);
// console.log(array);
// array.pop();
// console.log(array);
// array.shift();
// console.log(array);
// array.splice(1, 1);
// console.log(array);

// Tạo mảng có sẵn với các phẩn tử số. Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:

// Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)

// Nếu số đó không có trong mảng cho sẳn thì alert(“Chúc bạn may mắn lần sau”)

// let array = [1, 2, 3, 4, 5, 6];
// let n = +prompt("Nhập số n");
// let check = false;
// for (let i = 0; i <= array.length - 1; i = i + 1) {
//   if (n == array[i]) {
//     check = true;
//   }
// }
// if (check == true) {
//   console.log("Bingo");
// } else {
//   console.log("Chúc bạn may mắn lần sau");
// }

// Cho ngươi dùng nhập vào dãy số bất kỳ. Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array.
//  Tiến hành đảo ngược các phần tử trong mảng

// let n = prompt("Nhập số n vào ");
// let convert = n.split(",");
// console.log(convert);
// let array = [];

// for (i = convert.length - 1; i >= 0; i = i - 1) {
//   array.push(convert[i]);
// }

// console.log(array);

// Cho người dùng nhập vào dãy số bất kỳ. Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array.
//  Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất trong mảng

// let n = prompt("Nhập số n vào ");
// let convert = n.split(",");
// let max = Number(convert[0]);
// for (i = 0; i <= convert.length - 1; i = i + 1) {
//   if (max < Number(convert[i])) {
//     max = Number(convert[i]);
//   }
// }
// console.log(max);
