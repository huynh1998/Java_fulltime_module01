let productList = JSON.parse(window.localStorage.getItem("productList"));
let cart = JSON.parse(window.localStorage.getItem("cart"));
const maincart = document.getElementById("main-cart");
let cartQty = document.getElementsByClassName("total-qty")[0];

function renderCart() {
  let totalProduct = cart.reduce(function (acc, cur) {
    return (acc += cur.number);
  }, 0);

  cartQty.innerHTML = totalProduct;
}
// window.localStorage.setItem("productDetails", JSON.stringify(productDetails));
//

const card = document.getElementById("card");
//
function render() {
  //   maincart.innerHTML = "";
  //   let string = "";
  for (let idx in productList) {
    let product = `
        <div class="card">
              <div class="top-bar">
                <i class="fab fa-apple"></i>
                <em class="stocks">In Stock</em>
              </div>
              <div class="img-container">
                <img
                  class="product-img"
                  src="${productList[idx].imageUrl}"
                />
                <div class="out-of-stock-cover"><span>Out Of Stock</span></div>
              </div>
              <div class="details">
                <div class="name-fav">
                  <strong class="product-name">${productList[idx].name}</strong>
                  <button class="heart">
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
                <div class="wrapper">
                  <h5>Your next computer is not a computer</h5>
                  <p>
                   ${productList[idx].des}
                  </p>
                </div>
                <div class="purchase">
                  <p class="product-price">${productList[idx].price}</p>
                  <span class="btn-add">
                    <div>
                      <button class="add-btn" id="${productList[idx].id}">
                        Add <i class="fas fa-chevron-right"></i>
                      </button>
                    </div
                  ></span>
                </div>
              </div>
            </div>`;
    maincart.insertAdjacentHTML("beforeend", product);
  }
  //   maincart.innerHTML = string;
  // Cách 2 : đặt string = "", trong vòng for string += phần tử vào => maincart.innerHTML = string
  //Vị trí gắn sự kiện cho toàn bộ nút add
  let addBtnList = document.getElementsByClassName("add-btn");
  for (let addBtn of addBtnList) {
    addBtn.onclick = function () {
      //Tìm ra được vị trí của sản phẩm đang muốn add vào giỏ hàng
      // trong danh sách product
      let addProductIndex = productList.findIndex(function (e, i) {
        return e.id === +addBtn.id;
      });
      //   console.log(addProductIndex);
      let product = { ...productList[addProductIndex] };
      //   console.log(product);

      //Kiểm tra xem trong giỏ hàng đã có mặt hàng đó hay chưa

      let inCartIndex = cart.findIndex(function (e, i) {
        return e.id === product.id;
      });

      if (inCartIndex === -1) {
        //Chưa có trong giỏ hàng

        product.number = 1;
        cart.push(product);
        window.localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      } else {
        //trong giỏ hàng rồi

        cart[inCartIndex].number += 1;
        window.localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    };
  }
}
render();
renderCart();

// for (let addBtn in button) {

// _______________B1 : Tạo 1 mảng rỗng trong local Storage_________________

// _____________________B2 : Gắn sự kiện cho từng nút add_______________________
