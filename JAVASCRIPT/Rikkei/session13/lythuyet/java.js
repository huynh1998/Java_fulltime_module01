let menu = [
  "Tiết canh dê",
  "Lòng xách dê xào",
  "Canh đắng",
  "Dê xào lăn",
  "Dê xào xả ớt",
  "Dê chao dầu",
  "Nầm dê nướng",
];

//Create - Thêm mới 1 phần tử

//Thêm đầu
menu.unshift("Nầm dê xào khế");
console.log(menu);

//Thêm  cuối
menu.push("Thịt chó");
console.log(menu);

//Thêm vào 1 vị trí bất kỳ
menu.splice(1, 0, "Đậu lướt ván", "Đậu tẩm hành", "Đậu nhồi thịt");
console.log(menu);

//Read one - Lấy ra 1 phần tử
menu[5]; //Dê xào xả ớt
console.log(menu[5]);

// Read all - Lấy ra toàn bộ phần tử
for (i = 0; i <= menu.length - 1; i = i + 1) {
  console.log(`${menu[i]} + 10k`);
}

//U - Update - Cập nhật
menu[7] = "Nầm dê hấp";
console.log(menu);

//D - Delete - Xóa
// Xóa đầu
menu.shift();
console.log(menu);

//Xóa cuối
menu.pop();
console.log(menu);

//Xóa vị trí bất kỳ
menu.splice(4, 1);
console.log(menu);
