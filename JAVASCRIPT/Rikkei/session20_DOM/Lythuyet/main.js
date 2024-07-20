// let hide = document.getElementById("hide");
// let show = document.getElementById("show");
// const text = document.getElementById("text");

// // Luon log ra de kiem tra xem goi dung phan tu

// // console.log(hide);
// // console.log(show);
// // console.log(text);

// hide.onclick = function () {
//   text.style.display = "none";
// };
// show.onclick = function () {
//   text.style.display = "block";
// };

//Bai 5

// const togglebtn = document.getElementById("togglebtn");
// const body = document.getElementById("body");

// togglebtn.onclick = function () {
//   //Background body
//   //chua co mau => add mau den + doi mau text
//   //   console.log(body.style);
//   // Cach1: Phu hop voi viec thay doi style ngan
//   //   if (!body.style.backgroundColor) {
//   //     body.style.backgroundColor = "black";
//   //     body.style.color = "white";
//   //   } else {
//   //     body.style.backgroundColor = "";
//   //     body.style.color = "";
//   //   }
//   //Neu co mau r => add mau trang + doi mau text
//   //---------------------------------------------------------------------------------------
//   //Cach2: Su dung CSS de lam dung cac tac vu cua CSS
//   //Class
//   //Kiem tra xem da ton tai class dark-mode trong body hay chua
//   //Neu roi ====> xoa di
//   //Neu chua ====> them vao
//   //   if (body.classList.contains("dark-mode") === true) {
//   //     //Kiem tra n ton tai => xoa di remove
//   //     body.classList.remove("dark-mode");
//   //   } else {
//   //     body.classList.add("dark-mode");
//   //     // Neu chua => them vao add
//   //   }
//   //-------------------------------------------------------------------------------------
//   //Cach3: Su dung toggle
//   //   body.classList.toggle("dark-mode");
// };
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
// ---------------------------------THUC HANH 1 -------------------------------------------

let todoListDB = [
  {
    id: 1,
    content: "Di ngu som di",
    status: false,
  },
  {
    id: 2,
    content: "Di da bong nao :))",
    status: true,
  },
  {
    id: 3,
    content: "Hoc bai thoi :V ",
    status: false,
  },
  {
    id: 4,
    content: "Xem film :3",
    status: false,
  },
  {
    id: 5,
    content: "Day nao !!!!!",
    status: false,
  },
];

window.localStorage.setItem("todoListDB", JSON.stringify(todoListDB));
//Buoc1:
//Hien thi du lieu data base ra trinh duyet HTML

const ul = document.getElementById("myUL");
const input = document.getElementById("myInput");
const addBtn = document.getElementById("addBtn");

function render() {
  //Phai clear the li cũ di roi moi them vao thi se khong bi lap lai cac the li cũ
  //(Vi da goi 2 lan render)
  ul.innerHTML = "";
  //Tao ra cac the li goi theo mang
  for (let idx in todoListDB) {
    //Moi lan tao ra 1 the li khi duyet quan tung doi tuong todo
    //Kiem tra neu doi tuong todo
    //co tatus === true => li co them class checked
    // co status === false => li binh thuong

    //-----------------------Cach1: if-else--------------------------------
    //   let li;
    //   if (!todoListDB[idx].status) {
    //     li = `<li >${todoListDB[idx].content}</li>`;
    //   } else {
    //     li = `<li class = "checked">${todoListDB[idx].content}</li>`;
    //   }

    // ------------------------ Cach 2 : Toan tu 3 ngoi---------------------

    let li = todoListDB[idx].status
      ? // ? la true
        `<li id=${todoListDB[idx].id} class="checked">
      ${todoListDB[idx].content}
      <span class="close">×</span>
      </li>`
      : // : la false
        `<li id = ${todoListDB[idx].id}>
      ${todoListDB[idx].content}
      <span class="close">×</span>
      </li>`;

    //Goi cac the li vao trong the ul

    //Cach pho thong:   ul.innerHTML = ul.innerHTML + li;

    //Cach theo cu phap:
    ul.insertAdjacentHTML("beforeend", li);
  }

  let liList = ul.children; //HTML Collection => Tap hop the con cua the ul
  for (let li of liList) {
    li.onclick = function () {
      //B1: Lay ra id nam trong attribute cua tung the li

      //B2 : Tim kiem phan tu du lieu trong DB trung voi id cua phan tu li vua click vao

      //B3 : Tim kiem thanh cong thi su dung vi tri cua phan tu du lieu tim kiem
      //duoc de cap nhat lai truong status cua du lieu do trong DB

      let findIndex = todoListDB.findIndex(function (el, i) {
        return el.id === +li.id;
      });
      todoListDB[findIndex].status = !todoListDB[findIndex].status;

      render();
    };
  }
  let spanList = document.getElementsByClassName("close");
  for (let delBtn of spanList) {
    delBtn.onclick = function (event) {
      event.stopPropagation(); //Ngan chan noi bot su kien ( event bubbling)
      //B1 : Lay ra the li dang chua delBtn(.parentElement)
      let li = delBtn.parentElement;
      //B2 : Lay ra duoc attribute id cua the li cha
      let id = li.id;
      //B3 : Tim duoc doi tuong du lieu ung voi the li cha vua bam vao
      let findIndex = todoListDB.findIndex(function (el, i) {
        return el.id === +li.id;
      });
      //B4 : Xoa no khoir DB
      todoListDB.splice(findIndex, 1);
      //B5 : Render
      render();
    };
  }
}
render();

//--------------------------------Tinh nang them moi: CREATE-----------------------------------

addBtn.onclick = function () {
  if (!input.value) {
    alert("Moi ban nhap lai noi dung");
  } else {
    //B1 : Lay ra noi dung nam trong o input
    let content = input.value;
    //   console.log(content);

    //B2 : Tao moi 1 doi tuong du lieu todo {id,content,status}
    let todo = {
      id:
        todoListDB.length === 0 ? 1 : todoListDB[todoListDB.length - 1].id + 1,
      content: content,
      status: false,
    };

    //B3 : Them doi tuong du lieu do vao trong DB

    todoListDB.push(todo);

    //B4 : Phan anh su thay doi cua du lieu trong DB len tren giao dien ung dung
    render();
    input.value = "";
  }
};
