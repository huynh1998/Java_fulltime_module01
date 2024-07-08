let n = +prompt("Moi ban nhap vao so tu nhien N (2-100)");
if (Number.isInteger(n) && n >= 2 && n <= 100) {
  for (let i = 2; i <= n; i = i + 1) {
    console.log(`Binh phuong cua i = ${i ** 2}`);
    if (i % 2 == 0) {
      console.log(`Ket qua binh phuong chia het cho 2 la ${i ** 2}`);
    }
  }
} else {
  console.log("nhap lai");
}
