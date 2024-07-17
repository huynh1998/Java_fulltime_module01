// let products = [
//   { id: 1, name: "Milk", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
// ];

// //Them 1 phan tu
// let phantu4 = { id: 4, name: "Coca", count: 100 };
// products.push(phantu4);
// console.log(products);

// //Xoa phan tu co id = 2
// let phantu = products.findIndex(function (element, index) {
//   return element.id === 2;
// });
// products.splice(phantu, 1);
// console.log(products);

// //Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0

// let phantu3 = products.findIndex(function (element, index) {
//   return element.id === 3;
// });

// products[phantu3].count = 0;
// console.log(products);

// // // Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không?
// // //  Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
// let phantuso3 = products.find(function (element, index) {
//   return element.id === 3;
// });
// if (phantuso3.name === "Butter") {
//   console.log(phantuso3);
// } else {
//   console.log("Khong co trong phan tu");
// }

// // for (let product of products) {
// //   for (let key in product) {
// //     if (product[key] == "Butter") {
// //       console.log(key, product);
// //     }
// //   }
// // }

let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];

//Them 1 phan tu

let phantu4 = { id: 4, name: "Pessi", count: 100 };
products.push(phantu4);
console.log(products);

// Xoa phan tu co id = 2

let phantu = products.findIndex(function (element, index) {
  return element.id === 2;
});
products.splice(phantu, 1);
console.log(products);

//Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
let phantu2 = products.findIndex((e) => e.id === 3);
products[phantu2].count = 0;
console.log(products);

// Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không?
//  Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
let phantu6 = products.find((e) => e.name === "Butter");
if (phantu6.name === "Butter") {
  console.log(phantu6);
} else {
  console.log("khong tim thay");
}
