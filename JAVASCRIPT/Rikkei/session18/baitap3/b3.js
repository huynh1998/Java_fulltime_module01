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
let infor;
let diemtrungbinhcao = arr[0].mark;
for (i = 1; i <= arr.length - 1; i++) {
  if (diemtrungbinhcao < arr[i].mark) {
    diemtrungbinhcao = arr[i].mark;
    infor = arr[i];
  }
}
console.log(infor);
