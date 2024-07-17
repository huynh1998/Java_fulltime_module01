let C = +prompt("Nhap nhiet do C");
// let F = +prompt("Nhap nhiet do F");

// function change1(nhietdoF) {
//   let nhietdoC = (nhietdoF - 32) / 1.8;
//   return nhietdoC;
// }
function change2(nhietdoC) {
  let nhietdoF = nhietdoC * 1.8 + 32;
  return nhietdoF;
}
// console.log(change1(F));
console.log(change2(C));
