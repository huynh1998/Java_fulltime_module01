let n = +prompt("Nhập 1 số nguyên dương");
//xét hàng ngay thấy 1 dãy số tăng dần

for (let j = 1; j <= n; j = j + 1) {
  let result = "";
  for (let i = j; i < n + j; i = i + 1) {
    result = result + ` ${i}`;
  }
  console.log(result.trim());
}
