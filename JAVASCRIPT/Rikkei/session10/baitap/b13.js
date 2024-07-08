let age = +prompt('Nhập một số nguyên');
if ( Number.isInteger(age) && age > 0 && age < 120) {
    console.log('Đây là tuổi một người');
} else {
    console.log('Đây không phải là tuổi một người');
}