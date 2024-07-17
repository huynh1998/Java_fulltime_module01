let num = +prompt("Nhap 1 so nguyen");
function check(number) {
  if (Number.isInteger(number) && number !== 0) {
    if (number > 0) {
      alert("Day la so nguyen duong");
    } else {
      alert("Day la so nguyen am");
    }
  } else {
    alert("Vui long nhap lai");
  }
}
alert(check(num));
