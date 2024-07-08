let a = +prompt('Nhập vào số giờ trong ngày');
if (a > 18 && a <= 24) {
    console.log('Good evening')
} else if(a >= 0 && a <= 18) {
    console.log('Good day')
} else {
    console.log('false')
}