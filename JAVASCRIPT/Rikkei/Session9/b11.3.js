let a = +prompt('Nhập vào số giờ trong ngày');
if (a >= 0 && a < 10) {
    console.log('Good morning')
} else if (a >= 10 && a < 20) {
    console.log('Good day')
} else if (a >= 20 && a <= 24) {
    console.log('Good evening')
} else {
    console.log('false')
}