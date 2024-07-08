// BÀI 2: Viết chương trình hiển thị bình phương của số chẵn từ 2 🡪 N.
//  N nhập từ người dùng. Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.

let n = +prompt("Nhap vao so n");
if (Number.isInteger(n) && n >= 2 && n <= 100) {
  for (i = 2; i <= n; i = i + 1) {
    if (i % 2 === 0) {
      binhphuong = i ** 2;
      console.log(binhphuong);
    }
  }
} else {
  console.log("nhap lai so n");
}
