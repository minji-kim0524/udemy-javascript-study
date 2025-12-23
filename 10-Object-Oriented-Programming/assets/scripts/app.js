class Product {
  // 클래스 정의 안에서는 값을 등호로 지정
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  // 생성자 메서드(함수)
  // - 매개변수들에 대한 값을 지정할 수 있음
  // - 즉, 클래스의 필드에 인자를 지정할 수 있음
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

console.log(new Product());

const productList = {
  products: [
    // 새로운 객체 생성
    new Product(
      "A Pillow",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNPBR_0gPsRmSwOyHcdWdk8-LhSR-rx6csA&s",
      "A soft pillow!",
      19.99
    ),
    // {
    //   title: "A Pillow",
    //   imageUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNPBR_0gPsRmSwOyHcdWdk8-LhSR-rx6csA&s",
    //   price: 19.99,
    //   description: "A soft pillow!",
    // },
    new Product(
      "A Carpet",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUBXEH_PVtgNjPc8NzeXl1MRSVK-bM5uHOQ&s",
      "A carpet which you migth like =- or not.",
      89.99
    ),
    // {
    //   title: "A Carpet",
    //   imageUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUBXEH_PVtgNjPc8NzeXl1MRSVK-bM5uHOQ&s",
    //   price: 89.99,
    //   description: "A carpet which you migth like =- or not.",
    // },
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
