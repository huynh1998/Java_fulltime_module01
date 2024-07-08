let age = +prompt('Nhap so tuoi');
if (Number.isInteger(age) && age >=1 ) {
    if (age >= 16 ) {
        console.log('Hoc sinh đủ tuổi học lớp 10');
    } else {
        console.log('Học sinh k đủ tuổi học lớp 10');
    }
} else {
    console.log('Nhập lại số tuổi');
}