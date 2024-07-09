let x = [5, 6, "-", "c", "-", "d"];
for (i = 0; i <= x.length - 1; i = i + 1) {
  if (x[i] === "-") {
    x.splice(i, 1, "_");
  }
}
console.log(x);
