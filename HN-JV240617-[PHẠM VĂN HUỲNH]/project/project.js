const addProject = document.getElementById("addBtn");
const boxModel = document.getElementById("box-model");
const closeup = document.getElementById("closeup");
const cancel = document.getElementById("cancel");
const listProject = document.getElementById("list-project");
const submit = document.getElementById("submit");
const inputProjectName = document.getElementById("project-name");
const inputTechnology = document.getElementById("technology");
const inputLinkProject = document.getElementById("link");
const inputImage = document.getElementById("image-project");
const error = document.getElementById("error-project");
const boxUpdate = document.getElementById("box-model-update");
const closeUpdate = document.getElementById("closeup-update");
const cancelUpdate = document.getElementById("cancel-update");
const submitUpdate = document.getElementById("submit-update");
let idUpdateProject = null;

// Thực hiện onclick thêm dự án sẽ hiện ra bảng điền thông tin dự án

addProject.onclick = function () {
  boxModel.style.display = "block";
};
closeup.onclick = function () {
  boxModel.style.display = "none";
};
cancel.onclick = function () {
  boxModel.style.display = "none";
};
closeUpdate.onclick = function () {
  boxUpdate.style.display = "none";
};
cancelUpdate.onclick = function () {
  boxUpdate.style.display = "none";
};

// Chức năng thêm

submit.onclick = function () {
  const projectDB = JSON.parse(localStorage.getItem("project")) || [];
  const projectName = inputProjectName.value.trim();
  const technology = inputTechnology.value.trim();
  const linkProject = inputLinkProject.value;
  const image = inputImage.value;

  //Kiểm tra các ô iput chưa điền thông tin

  if (!projectName) {
    error.textContent = "Mời bạn điền đẩy đủ thông tin";
    return;
  }

  //Kiểm tra xem dự án mới đã có chưa

  let vitri = projectDB.findIndex(
    (element) => element.name.toLowerCase() === projectName.toLowerCase()
  );
  if (vitri !== -1) {
    error.textContent = "Dự án này đã có rồi !!!";
    return;
  }

  // Tạo dự án mới

  let newProject = {
    id: projectDB.length === 0 ? 1 : projectDB[projectDB.length - 1].id + 1,
    name: projectName,
    image: image,
    technology: technology,
    linkProject: linkProject,
  };
  projectDB.push(newProject);
  localStorage.setItem("project", JSON.stringify(projectDB));
  boxModel.style.display = "none";
  inputProjectName.value = "";
  inputTechnology.value = "";
  inputLinkProject.value = "";
  formtitle.textContent = "Thêm dự án mới";
  renderProject();
};

function renderProject() {
  const projectDB = JSON.parse(localStorage.getItem("project")) || [];
  listProject.innerHTML = "";
  for (let idx in projectDB) {
    let list = `
           <tr>
              <td>${projectDB[idx].id}</td>
              <td>${projectDB[idx].name}</td>
              <td>
              <a href="${projectDB[idx].linkProject}">
                  <img width="80px " src="${projectDB[idx].image}" alt="" />
                </a>
                
              </td>
              <td>${projectDB[idx].technology}</td>
              <td>
                <button id="fix" type="button" onclick="fixProject(${projectDB[idx].id})">
                  Sửa
                </button>
                <button id="delete-project" type="button" onclick="deleteProject(${projectDB[idx].id})">
                Xóa
                </button>
              </td>
            </tr>`;
    listProject.innerHTML += list;
  }
}
renderProject();

// Xóa dự án

function deleteProject(idDelete) {
  const projectDB = JSON.parse(localStorage.getItem("project")) || [];
  let vitrixoa = projectDB.findIndex((element) => element.id === idDelete);
  projectDB.splice(vitrixoa, 1);
  localStorage.setItem("project", JSON.stringify(projectDB));
  renderProject();
}

// Sửa dự án
function fixProject(idEdit) {
  boxUpdate.style.display = "block";
  let vitrisua = projectDB.findIndex((element) => element.id === idEdit);

  idUpdateProject = idEdit;
}
submitUpdate.onclick = function () {
  const projectDB = JSON.parse(localStorage.getItem("project")) || [];
  if (idUpdateProject) {
    let vitriupdate = projectDB.findIndex(
      (element) => element.id === idUpdateProject
    );
    projectDB[vitriupdate].name = projectName;
    localStorage.setItem("project", JSON.stringify(projectDB));
    idUpdateProject = null;
    renderProject();
    inputProjectName.value = "";
    inputImage.value = "";
    inputTechnology.value = "";
    inputLinkProject.value = "";
  }
};
