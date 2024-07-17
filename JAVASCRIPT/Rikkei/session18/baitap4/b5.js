//Xay dung ung dung
// Coi nhu du lieu da duoc lay thanh cong tu tren
//sever ve phia client

//stores - Kho luu tru du lieu
//co ten la stores o tren server
let stores = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
//carts-Kho luu tru du lieu
// co ten la carts o ten server

let carts = [];
let loop = true;
while (loop) {
  let command = prompt("Moi ban nhap vao cac ky tu C/R/U/D de mua hang");
  switch (command) {
    case "C":
      let productName = prompt("Moi ban nhap ten san pham muon mua"); //Milk, Yakult,....
      let findIndex = stores.findIndex(function (element, index) {
        return element.name === productName;
      });
      if (findIndex === -1) {
        //Nhap vao k dung ten san pham
        console.log(
          `Khong tim thay san pham ${productName}. Moi ban tiep tuc mua hang`
        );
      } else {
        // Mua hang thanh cong
        let cartIndex = carts.findIndex(function (element, index) {
          return element.name === productName;
        });
        if (cartIndex === -1) {
          //Push
          let product = stores[findIndex]; //{}
          //Tao ra 1 doi tuong moi voi dia chi moi hoan toan
          let cartProduct = { ...product, count: 1 }; //{name,id ,ghi de count = 1}

          carts.push(cartProduct);
        } else {
          carts[cartIndex].count = carts[cartIndex] + 1;
        }
        stores[findIndex].count = stores[findIndex].count - 1;
      }
      displayProduct(stores);
      displayProduct(carts);

      break;

    case "R":
      //stores
      console.log("San pham trong stores:");
      displayProduct(stores);
      console.log("Gio hang cua ban:");
      if (carts.length === 0) {
        console.log("Gio hang cua ban chua co gi! Moi ban tiep tuc mua hang");
      } else {
        displayProduct(carts);
      }
      break;

    case "U":
      let updateIndex = +prompt(
        "Ban muon cap nhat lai san pham nao trong cart"
      );

      //Validate du lieu dau vao
      let oldCart = carts[updateIndex - 1].count;
      carts[updateIndex - 1].count = +prompt(
        `Moi ban nhap vao so luong moi cua san pharm ${
          carts[updateIndex - 1].name
        }`
      );
      //Tim kiem san pham vua update trong carts la sp nao trong stores
      let storeIndex = stores.findIndex(function (element, index) {
        return element.id === carts[updateIndex - 1].id;
      });
      stores[storeIndex].count =
        stores[storeIndex].count + oldCart - carts[updateIndex - 1].count;
      console.log("San pham trong stores:");
      displayProduct(stores);
      console.log("Gio hang cua ban:");
      displayProduct(carts);
      break;

    case "D":
      let deleteIndex = +prompt("Ban muon xoa san pham nao trong cart");
      let deleteProduct = carts[deleteIndex - 1].id;
      //Validate du lieu dau vao
      carts.splice(deleteIndex - 1, 1);
      let deleteStoreIndex = stores.findIndex(function (element, index) {
        return element.id === deleteIndex;
      });
      stores[deleteStoreIndex].count = 100;

      console.log("San pham trong stores");
      displayProduct(stores);
      console.log("San pham trong carts");
      displayProduct(carts);

      break;

    case "E":
      console.log("Cam on da mua hang");
      loop = false;
      break;

    default:
      console.log("Invalid command");
      break;
  }

  function displayProduct(database) {
    for (let idx in database) {
      console.log(
        `${+idx + 1}.${database[idx].name} - quantity:${database[idx].count}`
      );
    }
  }
}
