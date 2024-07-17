let root = prompt("Moi ban nhap vao 1 chuoi bat ky").split("");
console.log(root);
//['h', 'e', 'l', 'l', 'o']
//['h','e','l','l'], ['e','l','l','o']

//........

//['h','e','l','l','o']

//length cua sub = 4;
// let subArray = [];
// for (let i = 0; i < root.length - 1; i = i + 1) {
//   subArray.push(root[i]);
// }

// let subArray2 = [];
// for (let i = 1; i < root.length; i = i + 1) {
//   subArray2.push(root[i]);
// }
// console.log(subArray, subArray2);

// //length cua sub = 3
// let subArray3 = [];
// for (let i = 0; i < root.length - 2; i = i + 1) {
//   subArray3.push(root[i]);
// }

// let subArray4 = [];
// for (let i = 1; i < root.length - 1; i = i + 1) {
//   subArray4.push(root[i]);
// }

// let subArray5 = [];
// for (let i = 2; i < root.length; i = i + 1) {
//   subArray5.push(root[i]);
// }

// console.log(subArray3);
// console.log(subArray4);
// console.log(subArray5);

// Thay vi tao ra mang con giam dan thi ta tao ra mang con tang dan

//length cua mang k = 1
// let result = []
// for (i = 0; i <= root.length - 1; i = i + 1) {
//   let subArr = [];
//   for (j = i; j < i + 1; j = j + 1) {
//     subArr.push(root[j]);
//   }
//   //   subArr.push(root[i]);
//   console.log(subArr);
// }

// // length cua mang = 2
// for (i = 0; i <= root.length - 2; i = i + 1) {
//   let subArr = [];
//   //   subArr.push(root[i + 1]);
//   //   console.log(subArr);
//   for (j = i; j < i + 2; j = j + 1) {
//     subArr.push(root[j]);
//   }
//   console.log(subArr);
// }

//............
//length cua k = root.length - 1
let result = [];
for (k = 1; k <= root.length - 1; k = k + 1) {
  for (let i = 0; i <= root.length - k; i = i + 1) {
    let subArr = [];
    for (j = i; j < i + k; j = j + 1) {
      subArr.push(root[j]);
    }
    result.push(subArr.join(""));
  }
}
result.push(root.join(""));
console.log(result);
