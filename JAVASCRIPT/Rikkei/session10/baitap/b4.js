let a = +prompt('Nhập vào số a');
let b = +prompt('Nhập vào số b');
let c = +prompt('Nhập vào số c');
if (Number.isInteger(a && b && c)) {
    if (a > b && a > c) {
        console.log(`Max là ${a}`);
    } else if ( a > b && a < c ) {
        console.log(`Max là ${c}`)
    } else {
        console.log(`Max là ${b}`)
    }
} else {
    console.log(`Nhập lại số a,b,c`)
}