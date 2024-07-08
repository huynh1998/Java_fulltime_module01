let a = +prompt("Nhập vào điểm thi bài kiểm tra");
let b = +prompt("Nhập vào điểm thi giữa kỳ");
let c = +prompt("Nhập vào điểm thi cuối kỳ");
console.log(a, b, c);
let DTB;
if (a % 1 == 0 || b % 1 == 0 || c % 1 == 0) {
  console.log("nhập lại điểm số");
} else {
  DTB = (a + b + c) / 3;
  console.log(DTB);
  if (DTB > 9) {
    console.log("học sinh giỏi");
  } else if (DTB > 8 && DTB <= 9) {
    console.log("học sinh khá");
  } else if (DTB <= 8 && DTB > 6.5) {
    console.log("học sinh trung bình");
  } else {
    console.log("học sinh kém");
  }
}
