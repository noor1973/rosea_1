let products = JSON.parse(localStorage.getItem("rosea_products")) || [
  {
    id: 1,
    name: "شريط ساتان",
    price: 5000,
    image: "https://via.placeholder.com/400x300"
  }
];

const productsContainer = document.getElementById("products");

productsContainer.innerHTML = "";

products.forEach(product => {
  productsContainer.innerHTML += `
    <div class="product">
      <img src="${product.image}">
      <div class="info">
        <h3>${product.name}</h3>
        <p>السعر: ${product.price.toLocaleString()} د.ع</p>
        <button onclick="addToCart(${product.id})">إضافة إلى السلة</button>
      </div>
    </div>
  `;
});
