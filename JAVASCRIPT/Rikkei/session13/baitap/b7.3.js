let x = "Keep Calm And Code On";
b = "";
for (i = 0; i <= x.length - 1; i = i + 1) {
  if (x[i].toUpperCase() === x[i]) {
    b = b + x[i].toLowerCase();
  } else {
    b = b + x[i].toUpperCase();
  }
}
console.log(b);
