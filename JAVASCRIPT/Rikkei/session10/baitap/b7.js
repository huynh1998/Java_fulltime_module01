let meters = +prompt('Nhập vào số mét');
if(Number.isInteger(meters)) {
    let feet = meters * 3.2808 ;
    console.log(`Kết quả feet là ${feet}`);
} else {
    console.log('Nhập lại số mét');
}