let work = ["Đánh răng", "Ăn sáng", "Đi học", "Ăn trưa", "Học tiếp", "Đi về"];
work.push("Chơi game");
console.log(work);
work.unshift("Ngủ dậy");
console.log(work);

work.splice(1, 0, "Xem điện thoại", "Tập thể dục");
console.log(work);
console.log(work[4]);

work.shift();
console.log(work);
work.pop();
console.log(work);

for (i = 0; i <= work.length - 1; i = i + 1) {
  console.log(work[i]);
}
