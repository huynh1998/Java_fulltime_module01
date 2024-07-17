let button = document.getElementById("btn");
let box = document.getElementById("box");
let body = document.getElementById("body");
let x = document.getElementById("x");
button.onclick = function () {
  box.style.display = "block";
  box.style.display = "flex";
  box.style.justifyContent = "space-between";
  body.style.backgroundColor = "rgba(0,0,0,0.3)";
};
x.onclick = function () {
  box.style.display = "none";
  body.style.backgroundColor = "white";
};
