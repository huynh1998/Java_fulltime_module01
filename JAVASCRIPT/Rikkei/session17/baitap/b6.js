let todoList = [
  { id: 1, todo: "Have breakfast", completed: false },
  { id: 2, todo: "Have breakfast", completed: true },
  { id: 3, todo: "Have breakfast", completed: false },
];
//Tao ham fuction
function addTodo(todo) {
  let newid = 0;
  for (i = 0; i < todoList.length; i++) {
    newid = todoList.length + 1;
  }
  let newTodo = {
    id: newid,
    todo: todo,
    completed: true,
  };
  todoList.push(newTodo);
}

addTodo("Đi tắm");
console.log(todoList);

//Bước 3: Tạo hàm updateTodo() để cập nhật lại trạng thái cho công việc
function updateComplete(id) {
  let findindex = todoList.findIndex(function (element, index) {
    return (id = element.id);
  });
  todoList[findindex].completed = true;
}
updateComplete(5);
console.log(todoList);

//Bước 4: Tạo hàm removeTodo() để cập nhật lại trạng thái cho công việc
function removeTodo(id) {
  let check = -1;
  for (let i = 0; i < todoList.length; i++) {
    if (id == todoList[i].id) {
      check = i;
    }
  }
  todoList.splice(check, 1);
}

removeTodo(2);
console.log(todoList);
