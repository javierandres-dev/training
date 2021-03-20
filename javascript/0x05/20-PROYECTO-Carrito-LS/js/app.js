/**
 * VARIABLES
 */
const d = document,
  $cartList = d.getElementById("lista-carrito"),
  $tbody = $cartList.querySelector("tbody"),
  $btnEmptyCart = d.getElementById("vaciar-carrito"),
  available = [];
let cart = [];
/**
 * LISTENERS
 */
d.addEventListener("DOMContentLoaded", (e) => {
  // update cart with the content of local storage
  cart = JSON.parse(localStorage.getItem("cart")) || cart;
  // update user view
  showCart();
  // get available products
  inventory("[data-id]");
  d.addEventListener("click", (e) => {
    // purchase button pressed
    if (available.includes(e.target)) {
      addToCart(e);
    }
    // delete button pressed
    if (e.target.classList.contains("borrar-curso")) {
      removeFromCart(e);
    }
    // empty cart button pressed
    if (e.target === $btnEmptyCart) {
      emptyCart();
    }
  });
});
/**
 * FUNCTIONS
 */
// array with all available products to compare with the purchase button
const inventory = (forSale) => {
  const $products = d.querySelectorAll(forSale);
  $products.forEach((product) => {
    available.push(product);
  });
};
// add products to the cart
const addToCart = (e) => {
  const $product = e.target.parentElement.parentElement;
  // set product
  product = {
    id: $product.querySelector("a").dataset.id,
    image: $product.querySelector("img").src,
    name: $product.querySelector("h4").textContent,
    price: $product.querySelector("span").textContent,
    number: 1,
  };
  // checks if the product exists in the cart to add or increment the amount
  if (cart.some((el) => el.id === product.id)) {
    const products = cart.map((el) => {
      if (el.id === product.id) {
        el.number++;
        return el;
      } else {
        return el;
      }
    });
    cart = [...products];
  } else {
    cart.push(product);
  }
  // sync local storage
  syncStorage();
};
// remove all products from the cart
const emptyCart = () => {
  cart.splice(0, cart.length);
  // sync local storage
  syncStorage();
};
// remove a specific product from the cart
const removeFromCart = (e) => {
  const productId = e.target.getAttribute("data-del");
  cart = cart.filter((el) => el.id !== productId);
  // sync local storage
  syncStorage();
};
// remove all content from the user interface
const cleanHTML = () => {
  while ($tbody.firstChild) {
    $tbody.removeChild($tbody.firstChild);
  }
};
// print content on the user interface
const showCart = () => {
  cleanHTML();
  cart.forEach((product) => {
    const tr = d.createElement("tr"),
      img = d.createElement("img");
    img.setAttribute("src", product.image);
    let td = d.createElement("td");
    td.appendChild(img);
    tr.appendChild(td);
    td = d.createElement("td");
    td.innerText = product.name;
    tr.appendChild(td);
    td = d.createElement("td");
    td.innerText = product.price;
    tr.appendChild(td);
    td = d.createElement("td");
    td.innerText = product.number;
    tr.appendChild(td);
    td = d.createElement("td");
    td.innerHTML = `<a href="#" style="text-decoration: none;"><div data-del="${product.id}" class="borrar-curso">X</div></a>`;
    tr.appendChild(td);
    $tbody.appendChild(tr);
  });
};
// update local storage with the content of the cart
const syncStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  // refresh the user view
  showCart();
};
