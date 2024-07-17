// let todoList = [
//   "Go to sleep early",
//   "Take a shower",
//   "Do homework",
//   "Learn a new thing !!!",
// ];
// let command = prompt(
//   "Moi ban nhap vao cac chu C/R/U/D de dieu khien danh sach Todo List"
// );
// let loop = true;
// while (loop) {
//   if (command === "C") {
//     //Them moi 1 todo vao danh sach todo List
//     let todo = prompt("Moi ban nhap vao todo moi");
//     todoList.push(todo);
//     printTodo()
//   } else if (command === "R") {
//     //In ra toan bo todo co trong ds todo List
//     printTodo()
//   } else if (command === "U") {
//     //Cho ng dung chon vi tri cua todo muon cap nhat
//     let index = +prompt("Moi ban nhap vao vi tri cua todo muon cap nhat");
//     //cho ngu dung nhap vao noi dung cap nhat moi cua todo do
//     let updateTodo = prompt("Moi ban nhap vao noi dung moi cua todo ");
//     //Tien hanh cap nhat
//     todoList[index - 1] = updateTodo;
//     //In ra toan bo todo co trong danh sach todo List (De kiem tra su cap nhat )
//     printTodo()
//   } else if (command === "D") {
//     //Cho nguoi dung cho vi cho todo muon xoa
//     let index = +prompt("Moi ban nhap vao vi tri muon cap nhat");
//     //Tien hanh xoa
//     todoList.splice(index - 1, 1);
//     //In ra toan bo todo co trong danh sach todo List (De kiem tra xoa thanh cong chua)
//     printTodo()
//   } else if (command === "E") {
//     return"Goodbye !!! See you again !!!");
//     loop = false;
//   } else {
//     return"Invalid command");
//   }
// }

// function printTodo() {
//   for (i = 0; i <= todoList.length - 1; i = i + 1) {
//     return`${i + 1}. ${todoList[i]}`);
//   }
// }

//DEMO

//Xay dung mot ung dung may ban nuoc tu dong
// biet
//nhet 5k --- dasani
//nhet 10k --- Coca
// nhet  20k --- Sting

//Parameters (Tham so dai dien)
// function mayBanNuoc(money) {
//   // let money = '5000'
//   // let money = '10000'
//   //let money = '20000'
//   if (money === "5000") {
//     return "Dasani";
//   } else if (money === "10000") {
//     return "Coca";
//   } else if (money === "20000") {
//     return "Sting";
//   } else {
//     return "Chung toi khong nhan menh gia tien nay";
//   }
// }
// // Argument - Doi so thuc te
// mayBanNuoc("5000"); //Dasani
// mayBanNuoc("10000"); // Coca
// mayBanNuoc("20000"); //Sting

//Viet 1 chuong trinh con nhan vao 2 tham so
// la 2 so can tinh tong
// tinh tong va tra ve ket qua

let a = +prompt("Nhap so thu nhat");
let b = +prompt("Nhap so thu hai");
function tinhtong(a, b) {
  let sum = a + b;
  return sum;
}
let tong = tinhtong(a, b);
tb = tong / 2;

alert(tb);

// tinhtong(1, 2); // 3
