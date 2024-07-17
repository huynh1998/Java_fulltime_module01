let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [10, 20, 30, 40, 50];
let arr3 = [1, 3, 5, 7, 9];

//tinh tong cac mang
function tong(arr) {
  sum = 0;
  for (i = 0; i <= arr.length - 1; i = i + 1) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(tong(arr1));
console.log(tong(arr2));
console.log(tong(arr3));
