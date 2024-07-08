let a = +prompt('Nhập kích thước cạnh hình vuông');
if(Number.isInteger(a) && a > 0 ) {
    let S = a ** 2 ;
    console.log(`Diện tích hình vuông là ${S}`);
} else {
    console.log('Nhập lại kích thước hình vuông');
}