let staff = {
  id: 1,
  name: "Ronaldo",
  age: 30,
  salary: 20000,
};
let company = [];
company.push(staff);
console.log(company);

//Them moi mang nhan vien vao mang company

let newStaff = {
  id: 2,
  name: "Messi",
  age: 37,
  salary: 15000,
};
let staff1 = {
  id: 3,
  name: "Gapo",
  age: 25,
  salary: 10000,
};

company.push(newStaff);
company.push(staff1);
console.log(company);

//Cho người dùng nhập vào id nhân viên và mức lương muốn thay đổi
//Sử dụng hàm findIndex để tìm vị trí index của nhân viên đó trong mảng “company”

// let inputUpdate = Number(prompt("Nhap vao id nhan vien muon cap nhat "));
// let updateSalary = Number(prompt("Nhap vao muc luong muon thay doi"));

// let findIndex = company.findIndex(function (element, index) {
//   return element.id == inputUpdate; //
// });
// company[findIndex].salary = updateSalary;
// console.log(company);

//Xoa 1 phan tu id
let inputDelete = Number(prompt("Nhập vào id nhân viên muốn xóa"));
let findindex = company.findIndex(function (element, index) {
  return element.id == inputDelete;
});
company.splice(findindex, 1);
console.log(company);
