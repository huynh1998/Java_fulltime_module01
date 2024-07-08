let a = +prompt('Nhập số a')
let b = +prompt('Nhập số b')
if(a == 0 && b == 0) {
    console.log('PT vô số nghiệm');
} else if ( a == 0 && b != 0) {
    console.log('PT vô nghiệm');
} else {
    x = -b/a ;
    console.log(`PT có nghiệm là x = ${x}`);
}