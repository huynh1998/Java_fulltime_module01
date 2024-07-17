let text = document.getElementById("text");
let hiddentext = document.getElementById("hiddentext");
let showtext = document.getElementById("showtext");
hiddentext.onclick = function () {
  text.style.display = "none";
};
showtext.onclick = function () {
  text.style.display = "block";
};
