// ax^2 + bx + c = 0
let a = +prompt('Nhập vào số a ');
let b = +prompt('Nhập vào số b');
let c = +prompt('Nhập vào số c');
if(a == 0 && b == 0 && c == 0) {
    console.log('PT vô số nghiệm'); 
} else if (a == 0 && b == 0 && c != 0) {
    console.log('PT vô nghiệm');
} else if (a == 0 && b != 0 && c ==0 ) {
    console.log(`Pt có nghiệm là x = 0`);
}  else {
    delta = b**2 - 4 * a * c;
    if (delta < 0) {
        console.log('PT vô nghiệm');
    } else if (delta == 0) {
        x = -b / 2 * a
        console.log(`PT có nghiệm kép là x1 = x2 = ${x}`);
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`PT có 2 nghiệm là ${x1} và ${x2}`);
    }
} 