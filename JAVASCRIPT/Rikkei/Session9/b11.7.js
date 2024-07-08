let x = +prompt('Nhập vào số nguyên x');
if (Number.isInteger(x)) {
    if(x > 0) {
        console.log('x là số nguyên dương');
    } else if(x == 0) {
        console.log('x có giá trị bằng 0');
    } else {
        console.log('x là số nguyên âm');
    }
} else {
    console.log('Nhập lại số nguyên x');
}