let toan = +prompt('Nhập điểm môn toán');
let li = +prompt('Nhập điểm môn lí') ;
let hoa = +prompt('Nhập điểm môn hóa');
let van = +prompt('Nhập điểm môn văn');
let su = +prompt('Nhập điểm môn sử');
let dia = +prompt('Nhập điểm môn địa');
let DTB = (toan + li + hoa + van + su + dia)/6;
if (DTB <= 10 && DTB >= 8) {
    console.log('GIỎI');
} else if (DTB >= 6.5) {
    console.log('KHÁ');
} else if (DTB >=5) {
    console.log('TRUNG BINH');
} else {
    console.log('YẾU');
}