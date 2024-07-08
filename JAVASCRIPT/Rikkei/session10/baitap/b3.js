let x = +prompt('Nhập vào số nguyên');
if ( Number.isInteger(x) && x != 0) {
    if(x > 0) {
        console.log('Số đó lớn hơn 0')
    } else {
        console.log('Số đó nhỏ hơn 0')
    }
} else {
    console.log('Nhập lại số nguyên')
}