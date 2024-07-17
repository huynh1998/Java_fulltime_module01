let r = +prompt("Nhap ban kinh tron");
function perimeter(bankinh) {
  perimeter = bankinh * 2 * Math.PI;
  return perimeter;
}
function acreage(bankinh) {
  acreage = Math.PI * bankinh ** 2;
  return acreage;
}
console.log(perimeter(r));
console.log(acreage(r));
