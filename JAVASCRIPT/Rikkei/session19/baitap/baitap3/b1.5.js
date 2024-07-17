let body = document.getElementById("body");
let h1 = document.getElementById("h1");
let p = document.getElementById("p");
let button = document.getElementById("button");
button.onclick = function () {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    h1.style.color = "black";
    p.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    h1.style.color = "white";
    p.style.color = "white";
  }
};
