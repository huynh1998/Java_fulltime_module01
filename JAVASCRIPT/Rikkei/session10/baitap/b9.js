let a = +prompt('Nhập chiều rộng hình chữ nhật');
let b = +prompt('Nhập chiều dài hình chữ nhật');
if(Number.isInteger(a && b) && a > 0 && b > 0) {
    let S = a * b ;
    console.log(` Diện tích hình chữ nhật là ${S}`);
} else {
    console.log('Nhập lại kích thước hình chữ nhật');
}