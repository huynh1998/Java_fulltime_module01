let randomString = prompt("Mời bạn nhập vào câu bất kỳ"); // [0 -- độ dài của chuỗi - 1 ]
"Hello World"[0]; //Lấy ra chu H trong mảng ở vị trí số 0
"Hello World"[6]; //Lấy ra chữ W trong mảng ở vị trí số 6
let string = "";
for (i = randomString.length - 1; i >= 0; i = i - 1) {
  string = string + randomString[i];
}
console.log(string);
