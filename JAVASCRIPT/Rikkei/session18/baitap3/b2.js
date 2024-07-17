function student(id, name, gender, age, mark) {
  (this.id = id),
    (this.name = name),
    (this.gender = gender),
    (this.age = age),
    (this.mark = mark);
}
let student1 = new student(1, "Nguyen Van A", "nam", 20, 8);
let newstudent = new student(2, "Gumayusi", "nam", 24, 15);
console.log(newstudent);
let arr = [];
arr.push(student1, newstudent);
console.log(arr);
console.log(arr[1]);
