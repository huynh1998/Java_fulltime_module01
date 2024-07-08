let a = +prompt(' nhap vao ngay sinh');
let b = +prompt('nhap vao thang sinh');
let ketqua;
switch(b) {
    case 1 :
        if (a <= 19) {
            ketqua = 'ma ket'
        }
        else {
            ketqua = 'bao binh'
        }
        break;
    case 2 :
        if (a <= 18 ) {
            ketqua = 'bao binh'
        }
        else {
            ketqua = 'song ngu'
        }
    case 3 :
        if (a <= 20) {
            ketqua = 'song ngu'
        } else {
            ketqua = 'bach duong'
        }
    case 4 : 
    if ( a <= 19) {
        ketqua = 'bach duong'
    } else {
        ketqua = 'kim nguu'
    }
    case 5 :
        if ( a <= 20) {
        ketqua = 'kim nguu'
        } else {
            ketqua = 'song tu'
        }
    case 6 :
        if (a <= 21) {
            ketqua = 'song tu'
        } else {
            ketqua = 'cu giai'
        }
    case 7 :
        if (a <= 22) {
            ketqua = 'cu giai'
        } else {
            ketqua = 'su tu'
        }
    case 8 :
        if (a <= 22) {
            ketqua = 'su tu'
        }
    case 9 :
        if ( a <=22) {
            ketqua = 'su tu'
        } else {
            ketqua = 'xu nu'
        }
    case 10 :
        if(a <=23) {
            ketqua = 'xu nu'
        } else {
            ketqua = 'thien binh'
        }
    case 11 :
        if ( a <=21) {
            ketqua = 'thien binh'
        } else {
            ketqua = 'ho cap'
        }
        case 12 :
        if (a <=21) {
            ketqua ='ho cap'
         } else {
            ketqua = 'ma ket'
            }
    break;
}
console.log(ketqua);