let b = "rIkkEi acaDEMY";
let a = "hello WORD";
// let c = "";
// let c = a.toLowerCase().split(" ");
// for (i = 0; i <= c.length - 1; i++) {
//   c[i] = c[i][0].toUpperCase() + c[i].slice(1);
// }

// console.log(c.join(" "));

function change(str) {
  let work = str.toLowerCase().split(" ");
  for (i = 0; i <= work.length - 1; i = i + 1) {
    work[i] = work[i][0].toUpperCase() + work[i].slice(1);
  }
  return work.join(" ");
}
console.log(change(a));
console.log(change(b));
