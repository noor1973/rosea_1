let cart = JSON.parse(localStorage.getItem("rosea_cart")) || [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  cart.push(product);
  localStorage.setItem("rosea_cart", JSON.stringify(cart));
  alert("تمت الإضافة إلى السلة 🌸");
}

function viewCart() {
  if (cart.length === 0) {
    alert("السلة فارغة");
    return;
  }

  let message = "🛒 السلة:\n\n";
  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name} : ${item.price} د.ع\n`;
    total += item.price;
  });

  message += `\nالمجموع: ${total.toLocaleString()} د.ع`;
  alert(message);
}
