const addSkill = document.getElementById("add-skill");
const boxModel = document.getElementById("box-model");
const close = document.getElementById("close");
const cancel = document.getElementById("cancel");
const inputSkillName = document.getElementById("name-skill");
const inputyear = document.getElementById("year");
const listSkill = document.getElementById("list-skill");
const submit = document.getElementById("submit");
const inputImage = document.getElementById("image");
const error = document.getElementById("error-skill");

//Thực thi khi onclick hiện ra bảng điền thông tin skill

addSkill.onclick = function () {
  boxModel.style.display = "block";
};
close.onclick = function () {
  boxModel.style.display = "none";
};
cancel.onclick = function () {
  boxModel.style.display = "none";
};

// Thêm skill vào bảng table
function renderSkill() {
  const skillDB = JSON.parse(localStorage.getItem("skill")) || [];
  listSkill.innerHTML = "";
  for (let idx in skillDB) {
    let list = `<tr>
              <td>${skillDB[idx].id}</td>
              <td>${skillDB[idx].name}</td>
              <td>
                <img width="60px" src="${skillDB[idx].image}" alt="" />
              </td>
              <td>${skillDB[idx].year}</td>
              <td>23/07/2024</td>
              <td>
                <button id="delete-skill" type="button"
                onclick="deleteSkill(${skillDB[idx].id})"
                >Xóa</button>
              </td>
            </tr>`;
    listSkill.innerHTML += list;
  }
}
renderSkill();

submit.onclick = function () {
  const skillDB = JSON.parse(localStorage.getItem("skill")) || [];
  const skillName = inputSkillName.value.trim();
  const year = inputyear.value.trim();
  const image = inputImage.value;

  //Kiểm tra điều kiện ô input chưa điền thông tin gì

  if (!skillName) {
    error.textContent = "Mời bạn điền lại thông tin ";
    return;
  }

  //Kiểm tra đk nhập vào ô input có trùng name với các phần tử trong skillDB
  let vitri = skillDB.findIndex(
    (element) => element.name.toLowerCase() === skillName.toLowerCase()
  );
  if (vitri !== -1) {
    error.textContent = "Kỹ năng đã có rồi !!!";
    return;
  }

  //Tạo 1 phần tử mới newSkill

  let newSkill = {
    id: skillDB.length === 0 ? 1 : skillDB[skillDB.length - 1].id + 1,
    name: skillName,
    year: year,
    image: image,
  };
  skillDB.push(newSkill);
  localStorage.setItem("skill", JSON.stringify(skillDB));

  boxModel.style.display = "none";
  inputSkillName.value = "";
  inputyear.value = "";
  renderSkill();
};

// Click nút xóa

function deleteSkill(idDelete) {
  const skillDB = JSON.parse(localStorage.getItem("skill")) || [];
  let vitrixoa = skillDB.findIndex((element) => element.id === idDelete);
  skillDB.splice(vitrixoa, 1);
  localStorage.setItem("skill", JSON.stringify(skillDB));
  renderSkill();
}
