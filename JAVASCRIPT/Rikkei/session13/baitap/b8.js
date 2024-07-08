let x = prompt("Mời bạn nhập từ điển");
let english = ["Car", "Motorbike", "Bicycle", "Train", "Truck"];
let tiengviet = ["Xe oto", "Xe máy", "Xe đạp", "Tàu hỏa", "Xe tải"];
let text = "";

for (i = 0; i <= english.length - 1; i = i + 1) {
  if (x == english[i]) {
    text = tiengviet[i];
    console.log(text);
  }
}
