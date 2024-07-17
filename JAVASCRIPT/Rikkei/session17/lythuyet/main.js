let students = ["Hai Yen", "A Nghia", "Duong", "A Huynh", "Hung", "Ngoc"];
// //for...of
// for (let student of students) {
//   console.log(students.indexOf(student), student);
// }

// //for...in
// for (let index in students) {
//   console.log(index, students[index]);
// }
// //forEach
// students.forEach(function (element, index) {
//   console.log(index, element);
// });

//ARRAY METHOD

//map

// let newArr = students.map(function (element, index) {
//   return `${element} thi hackathon`;
// });
// console.log(newArr);

//filter,find,findindex

// let filterStudents = students.filter(function (element, index) {
//   return element.startsWith("A") === true;
// });
// console.log(filterStudents);

// let student = students.find(function (element, index) {
//   return element.startsWith("A") === true;
// });
// console.log(student);

let indexstudent = students.findIndex(function (element, index) {
  return element.startsWith("A") === true;
});
console.log(indexstudent);

//reduce- giam,

// let numbers = [10, 20, 30, 50, 90, 200];

// // Tinh tong, tinh tich, tinh trung binh cong,....

// let result = numbers.reduce(function (acc, cur) {
//   acc = acc + cur;
//   return acc;
// }, 0); //let acc = 0
// console.log(result);
// //tinh tong
// let result1 = numbers.reduce(function (acc, cur) {
//   acc = acc * cur;
//   return acc;
// }, 1); //let acc = 0
// console.log(result1);

// let result2 = numbers.reduce(function (acc, cur) {
//   acc = acc + cur;
//   return acc;
// }, 0);
// console.log(result2 / numbers.length);

//some,every
// let students = ["Hai Yen", "A Nghia", "Duong", "A Huynh", "Hung", "Ngoc"];
// let checkStartWithA = students.some(function (element, index) {
//   return element.startsWith("A") === true;
// }); // true
// console.log(checkStartWithA);

//sort - sap xep- chuyen doi truc tiep
// let numbers = [10, 20, -30, 50, -90, 200];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);

////////////////////////////////////////////////////////////////////////////////////////

// Object-Doi tuong
// Mo ta doi tuong truy na

// let person = {
//   name: "Duong", //Thuoc tinh name (key : value)
//   age: 23,
//   hometown: "Ha Noi",
//   married: false,
//   beautiful: "handsome",
//   hobbies: ["play gaming at home", "read a book ", "eating out"],
// };
// console.log(person);
// //Create - Them moi 1 thuoc tinh vao 1 doi tuong
// person.jobs = ["Developers", "Ky su"];
// console.log(person);
// //Read one - Lay ra duoc value(gia tri) cua mot thuoc tinh
// console.log(`${person.name} da pes thoi`);
// console.log(`${person["name"]} da pes thoi`);
// for (let hobby of person.hobbies) {
//   console.log(`${person.name} love ${hobby}`);
// }

// //Read all - Lay ra toan bo thuoc tinh
// for (let key in person) {
//   //   console.log(key);
//   //   key; // 'name','age','....
//   console.log(`${key}:${person[key]}`);
// }

// //Update- Cap nhat lai gia tri cua thuoc tinh
// person.age = 27; // Hoac person.['age'] = 27
// console.log(person);
// //Delete - Xoa di mot thuoc tinh;
// delete person.age;
// console.log(person);

//Danh sach cac doi tuong co tinh chat tuong dong nhau

// let students = [
//   {
//     id: "SV0001",
//     name: "Hai Yen",
//     age: 25,
//   },
//   {
//     id: "SV0002",
//     name: "Hung",
//     age: 21,
//   },
//   {
//     id: "SV0002",
//     name: "Ngoc sora",
//     age: 30,
//   },
// ];

// console.log("Sinhvien", students[0].name);
// console.log("Sinhvien", students[1].age);
// console.log("Sinhvien", students[2].id);
// for (let student of students) {
//   console.log(student.name);
// }
