let a = +prompt('Nhập kích thước cạnh kề thứ nhất tam giác vuông ');
let b = +prompt('Nhập kích thước cạnh kề thứ hai tam giác vuông');
if (Number.isInteger(a && b) && a > 0 && b > 0) {
    let S = (a * b)/2 ;
    console.log(`Diện tích tam giác vuông là ${S}`);
} else {
    console.log('Nhập lại kích thước hai cạnh kề tam giác vuông');
}