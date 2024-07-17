let a = "Hello World";
let b = "My Cat is yellow";
function change(str) {
  let c = "";
  for (i = str.length - 1; i >= 0; i = i - 1) {
    if (str[i] == str[i].toUpperCase()) {
      c = c + str[i].toLowerCase();
    } else {
      c = c + str[i].toUpperCase();
    }
  }
  return c;
}
console.log(change(a));
console.log(change(b));
