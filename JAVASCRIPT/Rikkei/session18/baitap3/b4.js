function student(id, name, gender, age, mark) {
  (this.id = id),
    (this.name = name),
    (this.gender = gender),
    (this.age = age),
    (this.mark = mark);
}
let student1 = new student(1, "Nguyen Van A", "nam", 20, 8);
let newstudent = new student(2, "Gumayusi", "nam", 24, 7);
let student2 = new student(3, "Nguyen Van B", "nam", 18, 8.5);
console.log(newstudent);
let arr = [];
arr.push(student1, newstudent, student2);
console.log(arr);
let sum = 0;
let DTB;
for (i = 0; i <= arr.length - 1; i++) {
  sum = sum + arr[i].mark;
}

DTB = sum / arr.length;
console.log(DTB);
if (DTB > 7.5) {
  console.log("Kha");
} else if (DTB > 5) {
  console.log("Trung binh-Kha");
} else {
  console.log("Kem");
}
