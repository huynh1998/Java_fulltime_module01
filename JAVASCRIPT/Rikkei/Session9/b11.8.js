let weight = +prompt('Nhập cân nặng');
let height = +prompt('Nhập chiều cao')
let BMI = weight/(height ** 2);
if( height > 0 && weight > 0) {
    if(BMI < 18.5) {
        console.log('Cân nặng thấp(gầy)');
    } else if( BMI < 25) {
        console.log('Bình thường');
    } else if(BMI < 30) {
            console.log('Tiền béo phí');
    } else if( BMI < 35) {
            console.log('Béo phì độ I');
    } else if ( BMI < 40) {
            console.log('Béo phì độ II');
    } else {
            console.log('Béo phì độ III');
        }
    }
 else {
    console.log('Nhập lại cân nặng và chiều cao');
}