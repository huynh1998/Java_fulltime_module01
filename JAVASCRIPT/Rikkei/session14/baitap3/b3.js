let a = [];
for (i = 1; i <= 6; i = i + 1) {
  let check = false;
  while (check == false) {
    let num = +prompt(`Nhập số nguyên thứ ${i}`);
    if (Number.isInteger(num)) {
      a.push(num);
      check = true;
    } else {
      alert("Vui lòng nhập lại");
    }
  }
}
console.log(a);

let b = a;
for (i = 0; i <= b.length - 1; i = i + 1) {
  if (b[i] % 2 === 1) {
    b.splice(i, 1);
  }
}
console.log(b);
