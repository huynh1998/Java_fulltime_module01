let a = [];
for (i = 1; i <= 6; i = i + 1) {
  let check = true;
  while (check == true) {
    let num = +prompt(`Nhập số nguyên thứ ${i}`);
    if (Number.isInteger(num)) {
      check = false;
      a.push(num);
    } else {
      alert("Vui lòng nhập lại");
    }
  }
}
console.log(a);
let b = a;
let c = [];
for (i = 0; i <= b.length - 1; i = i + 1) {
  if (b[i] % 2 === 0) {
    c.push(b[i]);
    b.splice(i, 1);
  }
}
console.log(c);
console.log(b);
