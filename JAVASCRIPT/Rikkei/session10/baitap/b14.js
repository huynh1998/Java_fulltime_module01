let a = +prompt('Nhập số thực a');
let b = +prompt('Nhập số thực b');
let c = +prompt('Nhập số thực c');
if ( a > 0 && b > 0 && c > 0) {
    if ( a + b > c && b + c > a && a + c > b) {
        console.log('Đây là 3 cạnh của tam giác');
    } else {
        console.log('Đây không phải 3 cạnh của tam giác');
    }
} else {
    console.log('Mời nhập lại 3 số a,b,c');5
}