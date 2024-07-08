let money = +prompt("Nhap so tien ban dau");
let n = +prompt("So thang gui ngan hang");
let hesolai = 0.04;
let lai = 0;
for (i = 1; i <= n; i = i + 1) {
  lai = (money + lai) * hesolai + lai;
  console.log(`So tien lai thang ${i} la ${lai}`);
}
