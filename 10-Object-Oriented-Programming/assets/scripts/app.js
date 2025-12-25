class Product {
  // 클래스 정의 안에서는 값을 등호로 지정
  //   title = "DEFAULT";
  //   imageUrl;
  //   description;
  //   price;

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

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    // 부모 클래스의 생성자 호출
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  // 화면 내용 업데이트 메서드
  // addProduct(product) {
  //   this.items.push(product);
  //   this.totalOutput.innerHTML = `<h2>Totla: \$${this.totalAmount}</h2>`;
  // }

  render() {
    const cartEl = this.createRootElement("section", "cart");

    cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
      `;

    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");

    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}}</p>
          <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  products = [
    new Product(
      "A Pillow",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNPBR_0gPsRmSwOyHcdWdk8-LhSR-rx6csA&s",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUBXEH_PVtgNjPc8NzeXl1MRSVK-bM5uHOQ&s",
      "A carpet which you migth like =- or not.",
      89.99
    ),
  ];

  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    const prodList = this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, "prod-list");
      productItem.render();
    }
  }
}

class Shop {
  render() {
    this.cart = new ShoppingCart("app");
    this.cart.render();
    const productList = new ProductList("app");
    productList.render();
    // console.log(new Product());

    // renderHook.append(cartEl);
  }
}

class App {
  static cart;

  static init() {
    // shop은 객체를 반환(참조)함 -> 객체 리터럴 표기법으로 구하는 것과 동일
    // - 객체 구조 분해 가능
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

// const productList = {
//   products: [
// 새로운 객체 생성
// new Product(
//   "A Pillow",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNPBR_0gPsRmSwOyHcdWdk8-LhSR-rx6csA&s",
//   "A soft pillow!",
//   19.99
// ),
// {
//   title: "A Pillow",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNPBR_0gPsRmSwOyHcdWdk8-LhSR-rx6csA&s",
//   price: 19.99,
//   description: "A soft pillow!",
// },
// new Product(
//   "A Carpet",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUBXEH_PVtgNjPc8NzeXl1MRSVK-bM5uHOQ&s",
//   "A carpet which you migth like =- or not.",
//   89.99
// ),
// {
//   title: "A Carpet",
//   imageUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUBXEH_PVtgNjPc8NzeXl1MRSVK-bM5uHOQ&s",
//   price: 89.99,
//   description: "A carpet which you migth like =- or not.",
// },
//   ],
//   render() {
//     const renderHook = document.getElementById("app");
//     const prodList = document.createElement("ul");
//     prodList.claasName = "product-list";
//     for (const prod of this.products) {
//       const prodEl = document.createElement("li");
//       prodEl.className = "product-item";
//       prodEl.innerHTML = `
//             <div>
//                 <img src="${prod.imageUrl}" alt="${prod.title}">
//                 <div class="product-item__content">
//                     <h2>${prod.title}</h2>
//                     <h3>\$${prod.price}</h3>
//                     <p>${prod.description}}</p>
//                     <button>Add to Cart</button>
//                 </div>
//             </div>
//           `;
//       prodList.append(prodEl);
//     }
//     renderHook.append(prodList);
//   },
// };

// 클래스 인스턴스화
