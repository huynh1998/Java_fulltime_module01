// console.log(window.localStorage);

// console.log("email", window.localStorage.email);
// console.log("password", window.localStorage.password);

// console.log("Dang nhap thanh cong");
// window.localStorage.password = "123456";
// window.localStorage.password = 123456;
// window.localStorage.password = true;

// window.localStorage.profile = JSON.stringify({
//   fullName: "Huynh",
//   age: 18,
//   school: "nuce",
// });

// window.localStorage.hobbies = JSON.stringify([
//   "play game",
//   "listening to music",
// ]);

// let profile = JSON.parse(window.localStorage.profile); //{'fullName',''}
// console.log("profile", profile.age);

//.parse() => Chuyen doi du lieu json ve dang js thong thuong

//getItem : Lấy dữ liệu từ local storage

// let profile = JSON.parse(window.localStorage.getItem("hobbies"));
// console.log("profile", profile);

// //setItem : Lưu trữ dữ liệu vào trong local storage

window.localStorage.setItem(
  "address",
  JSON.stringify({
    number: 190,
    street: "Văn Chương",
    district: "Đống Đa",
    city: "Hà Nội",
  })
);
