for (i = 1; i <= 10; i = i + 1) {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  console.log(`%c Xin chao cac ban`, `color: rgb(${red} , ${green} , ${blue})`);
}
