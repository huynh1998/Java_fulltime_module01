let players = {
  name: "Messi",
  age: 30,
  nation: "Argentine",
  club: "PSG",
};

//Them doi tuong email

players.email = "messi@gmail.com";
console.log(players);

//Thay doi club
players.club = "Barcelone";
console.log(players);

//Xoa phan tu age
delete players.age;
console.log(players);
