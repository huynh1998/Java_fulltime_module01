let a = +prompt('Nhap vao so a');
let b = +prompt('Nhap vao so b');
if (Number.isInteger(a && b) ) {
    if (a % b == 0) {
        console.log('a chia het cho b');
    } else {
        console.log('a khong chia het cho b ');
    }
} else {
    console.log('Nhap lai so a va b');
}