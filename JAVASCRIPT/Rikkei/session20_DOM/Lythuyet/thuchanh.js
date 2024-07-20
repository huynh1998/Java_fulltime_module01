const dbTodo = [
  { id: 1, todo: "Ngủ", status: false },
  { id: 2, todo: "Học", status: true },
  { id: 3, todo: "Chạy", status: false },
  { id: 4, todo: "Ăn", status: true },
];

// B1 : Hiển thị ra màn hình
// B1.1 : có thẻ ul(id="")
//B1.2 : Hiển thị ra màn hình các todo đang có : Lặp qua data để tạo các thẻ li
//mô tả todo , gán n vào trong thẻ ul

const todolist = document.getElementById("list-todo");
function todorender() {
  let string = "";
  for (idx in dbTodo) {
    string += `<li
    class = "${dbTodo[idx].status ? "red" : "xanh"} "
    onclick ='doimauchu(${dbTodo[idx].id})'
    >
    <span> ${dbTodo[idx].todo}</span>
    <button
    onclick = "xoaitem(${dbTodo[idx].id})">Xóa</button>
    </li>`;
  }
  todolist.innerHTML = string;
}
todorender();

// Gọi ra hàm khi ấn vào các hành động todolist thì sẽ đổi màu (xanh / đỏ)
function doimauchu(idcandoi) {
  let vitridoi = dbTodo.findIndex(function (el) {
    return (el.id = idcandoi);
  });
  dbTodo[vitridoi].status = !dbTodo[vitridoi].status;
  todorender();
}
// Gọi ra hàm khi ấn vào nút button Xóa thì sẽ xóa các phần tử todolist đó đi

function xoaitem(idcanxoa) {
  let vitrixoa = dbTodo.findIndex(function (el) {
    return (el.id = idcanxoa);
  });
  //Xóa trong mảng
  dbTodo.splice(vitrixoa, 1);
  //render lại khi đã xóa
  todorender();
}
