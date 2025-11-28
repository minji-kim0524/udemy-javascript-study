export function renderProducts(products, deleteProductFn) {
  const productListEl = document.getElementById("product-list");
  productListEl.innerHTML = "";
  products.forEach((product) => {
    const newListEl = document.createElement("li");
    const prodTitleEl = document.createElement("h2");
    const prodPriceEl = document.createElement("p");
    const prodDeleteButtonEl = document.createElement("button");

    prodTitleEl.innerHTML = product.title;
    prodPriceEl.innerHTML = product.price;
    prodDeleteButtonEl.innerHTML = "DELETE";

    newListEl.id = product.id;

    prodDeleteButtonEl.addEventListener(
      "click",
      deleteProductFn.bind(null, product.id)
    );

    newListEl.appendChild(prodTitleEl);
    newListEl.appendChild(prodPriceEl);
    newListEl.appendChild(prodDeleteButtonEl);

    productListEl.appendChild(newListEl);
  });
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
  } else {
    const productEl = document.getElementById(prodId);
    // 아래 두 가지 방법은 모두 작동함
    productEl.remove(); // 모든 브라우저 작동하진 않지만 더 짧고 현대적인 접근 방법
    // productEl.parentElement.removeChild(productEl); // 더 다양한 브라우저에서 작동하지만 레거시한 방법
  }
}
