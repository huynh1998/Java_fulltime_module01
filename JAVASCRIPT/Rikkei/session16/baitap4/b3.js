function capso(num) {
  let a = [];
  for (i = 0; i <= num.length - 1; i = i + 1) {
    for (j = i + 1; j <= num.length - 1; j = j + 1) {
      if (num[i] + num[j] === 10) {
        a.push([num[i], num[j]]);
      }
    }
  }
  return a;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(capso(arr));
// for (i = 0; i <= arr.length - 1; i = i + 1) {
//   for (j = i + 1; j <= arr.length - 1; j = j + 1) {
//     if (arr[i] + arr[j] === 10) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }
