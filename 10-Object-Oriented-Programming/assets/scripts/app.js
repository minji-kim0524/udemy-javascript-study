class Product {
  // 클래스 정의 안에서는 값을 등호로 지정
  title = "DEFAULT";
  imageUrl;
  description;
  price;
}

console.log(new Product());

const productList = {
  products: [
    // 새로운 객체 생성
    new Product(),
    {
      title: "A Pillow",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNPBR_0gPsRmSwOyHcdWdk8-LhSR-rx6csA&s",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUBXEH_PVtgNjPc8NzeXl1MRSVK-bM5uHOQ&s",
      price: 89.99,
      description: "A carpet which you migth like =- or not.",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.claasName = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
          `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
