//DOM

// let h1HTML = document.getElementById("demo-id");
// console.log(h1HTML);

let democlasslist = document.getElementsByClassName("demo-class"); // [div,p,div]
console.log(democlasslist);
let divCollection = document.getElementsByTagName("div");
console.log(divCollection);

// let h1 = document.querySelector("h1#demo-id.demo-class");
// console.log(h1);

// let clasSellection = document.querySelectorAll(".demo-class");
// console.log(clasSellection);

// let h1 = document.getElementById("demo-id");

// h1.innerText = "Hello, toi vua duoc cap nhat ";
// h1.textContent = h1.textContent + " Noi dung moi duoc noi vao sau";
// h1.innerHTML = `<ul style="text-decoration: line-through">Hello world</ul>`;

// [
// {id,title,description,image,content}
// {id,title,description,image,content}
// {id,title,description,image,content}
// ]

// const blogData = [
//   {
//     id: 1,
//     title: "Toi binh thuong",
//     description: "Toi binh thuong 2024",
//     image: "Hinh anh 1",
//     content: "Toi binh thuong khong hieu vi sao toi binh thuong",
//   },
//   {
//     id: 2,
//     title: "Toi vui",
//     description: "Toi rat vui 2024",
//     image: "Hinh anh 1",
//     content: "Toi vui khong hieu vi sao toi vui",
//   },
//   {
//     id: 3,
//     title: "Toi buon",
//     description: "Toi rat buon 2024",
//     image: "Hinh anh 1",
//     content: "Toi buon khong hieu vi sao toi buon",
//   },
//   {
//     id: 4,
//     title: "Toi chan",
//     description: "Toi rat chan 2024",
//     image: "Hinh anh 1",
//     content: "Toi chan khong hieu vi sao toi chan",
//   },
// ];

// const cardContainer = document.getElementById("card-container");
// console.log(cardContainer);
// // let cardTemplate = `<div class="card">
// //           <h2>TITLE HEADING</h2>
// //           <h5>Title description, Dec 7, 2017</h5>
// //           <div class="fakeimg" style="height: 200px">Image</div>
// //           <p>Some text..</p>
// //         </div>`;
// for (let blog of blogData) {
//   cardContainer.innerHTML =
//     cardContainer.innerHTML +
//     `<div class="card">
//           <h2>${blog.title}</h2>
//           <h5>${blog.description}</h5>
//           <div class="fakeimg" style="height: 200px">${blog.image}</div>
//           <p>${blog.content}</p>
//         </div>`;
// }
// let a = document.getElementById("a");
// console.log(a.href);
// let input = document.getElementById("input");
// console.log(input.placeholder);
// console.log(input.type);

// //////////////////////////////////
// let img = document.getElementById("img");
// console.log(img.id);
// img.src =
//   "https://assets.petco.com/petco/image/upload/f_auto,q_auto/21-413474_AdobeStock_179815747_RLS";
// img.getAttribute(
//   "src",
//   "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg"
// );
// console.log(img.style);
// img.style.borderRadius = "50%";

// let div = document.getElementById("demo-style");
//Bo style dung de bien doi
//Mot phan tu
// div.style.background = "pink";
// div.style.width = "300px";
// div.style.height = "300px";
// div.style.borderRadius = "50%";
// div.style.textAlign = "center";
// div.style.lineHeight = "300px";
// div.style.fontSize = "40px";
// console.log(div.classList); //Danh sach cac class cua 1 phan tu HTML
// div.classList.add("pink-circle");
/////////////////////////////
// let btn = document.getElementById("btn");
// console.log(btn);

// btn.onclick = function () {
//   alert("Hello world");
// };
// let image = document.getElementById("img");
// function thayanh() {
//   image.setAttribute(
//     "src",
//     "https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg"
//   );
// }
