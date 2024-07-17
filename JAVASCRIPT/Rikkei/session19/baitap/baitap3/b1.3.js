let box = document.getElementById("box");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let body = document.getElementById("body");
box1.onmouseover = function () {
  box.style.backgroundColor = "red";
  body.style.backgroundColor = "green";
  console.log(box);
};
box2.onmouseover = function () {
  box.style.backgroundColor = "green";
  body.style.backgroundColor = "violet";
};
box3.onmouseover = function () {
  box.style.backgroundColor = "blue";
  body.style.backgroundColor = "yellow";
};
